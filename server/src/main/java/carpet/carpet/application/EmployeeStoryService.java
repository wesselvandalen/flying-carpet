package carpet.carpet.application;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import carpet.carpet.data.EmployeeStoryRepository;
import carpet.carpet.data.EventRepository;
import carpet.carpet.domain.EmployeeStory;
import carpet.carpet.domain.Event;
import carpet.carpet.domain.Profile;
import carpet.carpet.presentation.dto.EmployeeStoryDTO;
import carpet.carpet.presentation.dto.EventDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeStoryService implements ContentServiceInterface<EmployeeStory, EmployeeStoryDTO> {

    private final EmployeeStoryRepository employeeStoryRepository;
    private final ProfileService profileService;

    public EmployeeStoryService(EmployeeStoryRepository employeeStoryRepository, ProfileService profileService) {
        this.employeeStoryRepository = employeeStoryRepository;
        this.profileService = profileService;
    }

    @Override
    public EmployeeStory create(EmployeeStoryDTO dto) {
        final EmployeeStory employeeStory = new EmployeeStory(dto.getQuote(), dto.getEmployeeName(), dto.getJobTitle(), dto.getDescription(), dto.getImage(), dto.getPublishDate());
        this.employeeStoryRepository.save(employeeStory);
        return employeeStory;
    }

    @Override
    public EmployeeStory update(EmployeeStoryDTO dto) {
        Optional<EmployeeStory> employeeStory = this.employeeStoryRepository.findById(dto.getId());
        if (employeeStory.isPresent()) {
            EmployeeStory foundEmployeeStory = employeeStory.get();
            foundEmployeeStory.setQuote(dto.getQuote());
            foundEmployeeStory.setEmployeeName(dto.getEmployeeName());
            foundEmployeeStory.setJobTitle(dto.getJobTitle());
            foundEmployeeStory.setDescription(dto.getDescription());
            foundEmployeeStory.setImage(dto.getImage());
            foundEmployeeStory.setPublishDate(dto.getPublishDate());
            foundEmployeeStory.setDescription(dto.getDescription());
            this.employeeStoryRepository.save(foundEmployeeStory);
            return foundEmployeeStory;
        }
        throw new RuntimeException("No employee story was found with id " + dto.getId());
    }

    @Override
    public EmployeeStory getById(Long id) {
        Optional<EmployeeStory> employeeStory = this.employeeStoryRepository.findById(id);
        if (employeeStory.isEmpty()) {
            throw new RuntimeException("The employee story with id " + id + " was not found.");
        }
        return employeeStory.get();
    }

    @Override
    public List<EmployeeStory> getAll() {
        return this.employeeStoryRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        List<Profile> profiles = this.profileService.getAll();
        if (profiles.size() == 0) {
            this.employeeStoryRepository.deleteById(id);
            return;
        }

        for (Profile profile : profiles) {
            Set<EmployeeStory> employeeStories = profile.getEmployeeStories();
            
            for (EmployeeStory employeeStory : employeeStories) {
                if (employeeStory.getId() == id) {
                    profile.removeEmployeeStory(employeeStory);
                    break;
                }
            }
        }

        this.employeeStoryRepository.deleteById(id);
    }
}