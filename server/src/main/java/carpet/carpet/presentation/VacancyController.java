package carpet.carpet.presentation;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carpet.carpet.application.VacancyService;
import carpet.carpet.domain.Vacancy;
import carpet.carpet.presentation.dto.VacancyDTO;

@RestController
@RequestMapping("/vacancies")
@CrossOrigin(origins = {"http://localhost:5173"})
public class VacancyController {
    
    private final VacancyService vacancyService;

    public VacancyController(VacancyService vacancyService) {
        this.vacancyService = vacancyService;
    }

    @PostMapping
    public Vacancy createVacancy(@RequestBody VacancyDTO dto) {
        return this.vacancyService.create(dto);
    }

    @PatchMapping
    public Vacancy updateVacancy(@RequestBody VacancyDTO dto) {
        return this.vacancyService.update(dto);
    }

    @GetMapping("/{id}")
    public Vacancy getVacancyById(@PathVariable Long id) {
        return this.vacancyService.getById(id);
    }

    @GetMapping
    public List<Vacancy> getAllVacancies() {
        return this.vacancyService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteProfileById(@PathVariable Long id) {
        this.vacancyService.deleteById(id);
    }
}