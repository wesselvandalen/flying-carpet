package carpet.carpet.application;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import carpet.carpet.data.EmploymentConditionRepository;
import carpet.carpet.domain.EmploymentCondition;
import carpet.carpet.domain.Event;
import carpet.carpet.domain.Profile;
import carpet.carpet.presentation.dto.EmploymentConditionDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmploymentConditionService implements ContentServiceInterface<EmploymentCondition, EmploymentConditionDTO> {

    private final EmploymentConditionRepository employmentConditionRepository;
    private final ProfileService profileService;

    public EmploymentConditionService(EmploymentConditionRepository employmentConditionRepository, ProfileService profileService) {
        this.employmentConditionRepository = employmentConditionRepository;
        this.profileService = profileService;
    }

    @Override
    public EmploymentCondition create(EmploymentConditionDTO dto) {
        final EmploymentCondition employmentCondition = new EmploymentCondition(dto.getTitle(), dto.getDescription(),
                dto.getIcon(), dto.getCategory());
        this.employmentConditionRepository.save(employmentCondition);
        return employmentCondition;
    }

    @Override
    public EmploymentCondition update(EmploymentConditionDTO dto) {
        Optional<EmploymentCondition> event = this.employmentConditionRepository.findById(dto.getId());
        if (event.isPresent()) {
            EmploymentCondition foundEmploymentCondition = event.get();
            foundEmploymentCondition.setTitle(dto.getTitle());
            foundEmploymentCondition.setDescription(dto.getDescription());
            foundEmploymentCondition.setIcon(dto.getIcon());
            foundEmploymentCondition.setCategory(dto.getCategory());
            this.employmentConditionRepository.save(foundEmploymentCondition);
            return foundEmploymentCondition;
        }
        throw new RuntimeException("No employment condition was found with id " + dto.getId());
    }

    @Override
    public EmploymentCondition getById(Long id) {
        Optional<EmploymentCondition> employmenCondition = this.employmentConditionRepository.findById(id);
        if (employmenCondition.isEmpty()) {
            throw new RuntimeException("The employment condition with id " + id + " was not found.");
        }
        return employmenCondition.get();
    }

    @Override
    public List<EmploymentCondition> getAll() {
        return this.employmentConditionRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        List<Profile> profiles = this.profileService.getAll();
        if (profiles.size() == 0) {
            this.employmentConditionRepository.deleteById(id);
            return;
        }

        for (Profile profile : profiles) {
            Set<EmploymentCondition> employmentConditions = profile.getEmploymentConditions();
            
            for (EmploymentCondition employmentCondition : employmentConditions) {
                if (employmentCondition.getId() == id) {
                    profile.removeEmploymentConditions(employmentCondition);
                    break;
                }
            }
        }

        this.employmentConditionRepository.deleteById(id);
    }

}