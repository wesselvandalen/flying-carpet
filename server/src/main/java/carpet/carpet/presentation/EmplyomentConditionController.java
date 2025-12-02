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

import carpet.carpet.application.EmploymentConditionService;
import carpet.carpet.domain.EmploymentCondition;
import carpet.carpet.presentation.dto.EmploymentConditionDTO;

@RestController
@RequestMapping("/employment-conditions")
@CrossOrigin(origins = {"http://localhost:5173"})
public class EmplyomentConditionController {

    private final EmploymentConditionService employmentConditionService;

    public EmplyomentConditionController(EmploymentConditionService employmentConditionService) {
        this.employmentConditionService = employmentConditionService;
    }

    @PostMapping
    public EmploymentCondition createEmploymentCondition(@RequestBody EmploymentConditionDTO dto) {
        return this.employmentConditionService.create(dto);
    }

    @PatchMapping
    public EmploymentCondition updateEmploymentCondition(@RequestBody EmploymentConditionDTO dto) {
        return this.employmentConditionService.update(dto);
    }

    @GetMapping("/{id}")
    public EmploymentCondition getEmploymentConditionById(@PathVariable Long id) {
        return this.employmentConditionService.getById(id);
    }

    @GetMapping
    public List<EmploymentCondition> getAllEmploymentConditions() {
        return this.employmentConditionService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteEmploymentConditionById(@PathVariable Long id) {
        this.employmentConditionService.deleteById(id);
    }
}