package carpet.carpet.application;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import carpet.carpet.data.VacancyRepository;
import carpet.carpet.domain.Profile;
import carpet.carpet.domain.Vacancy;
import carpet.carpet.presentation.dto.VacancyDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class VacancyService implements ContentServiceInterface<Vacancy, VacancyDTO> {

    private final VacancyRepository vacancyRepository;
    private final ProfileService profileService;

    public VacancyService(VacancyRepository vacancyRepository, ProfileService profileService) {
        this.profileService = profileService;
        this.vacancyRepository = vacancyRepository;
    }

    @Override
    public Vacancy create(VacancyDTO dto) {
        final Vacancy vacancy = new Vacancy(dto.getTitle(), dto.getDescription(), dto.getImage(), dto.getUrl(),
                dto.getEmploymentType(), dto.getDepartment(), dto.getLocation(), dto.getSalary());
        this.vacancyRepository.save(vacancy);
        return vacancy;
    }

    @Override
    public Vacancy update(VacancyDTO dto) {
        Optional<Vacancy> vacancy = this.vacancyRepository.findById(dto.getId());
        if (vacancy.isPresent()) {
            Vacancy foundVacancy = vacancy.get();
            foundVacancy.setDepartment(dto.getDepartment());
            foundVacancy.setDescription(dto.getDescription());
            foundVacancy.setEmploymentType(dto.getEmploymentType());
            foundVacancy.setImage(dto.getImage());
            foundVacancy.setLocation(dto.getLocation());
            foundVacancy.setPostedDate(dto.getPostedDate());
            foundVacancy.setTitle(dto.getTitle());
            foundVacancy.setUrl(dto.getUrl());
            foundVacancy.setSalary(dto.getSalary());
            this.vacancyRepository.save(foundVacancy);
            return foundVacancy;
        }
        throw new RuntimeException("No vacanacy was found with id " + dto.getId());
    }

    @Override
    public Vacancy getById(Long id) {
        Optional<Vacancy> vacancy = this.vacancyRepository.findById(id);
        if (vacancy.isEmpty()) {
            throw new RuntimeException("The vacancy with id " + id + " was not found.");
        }
        return vacancy.get();
    }

    @Override
    public List<Vacancy> getAll() {
        return this.vacancyRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        List<Profile> profiles = this.profileService.getAll();

        // If there are no profiles, there is no need to loop over them.
        if (profiles.size() == 0) {
            this.vacancyRepository.deleteById(id);
            return;
        }

        for (Profile profile : profiles) {
            Set<Vacancy> vacancies = profile.getVacancies();
            
            for (Vacancy vacancy : vacancies) {
                if (vacancy.getId() == id) {
                    profile.removeVacancy(vacancy);
                    break;
                }
            }
        }

        this.vacancyRepository.deleteById(id);
    }
}