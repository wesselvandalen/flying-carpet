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

import carpet.carpet.application.EmployeeStoryService;
import carpet.carpet.domain.EmployeeStory;
import carpet.carpet.presentation.dto.EmployeeStoryDTO;

@RestController
@RequestMapping("/employee-stories")
@CrossOrigin(origins = {"http://localhost:5173"})
public class EmployeeStoryController {
    
    private final EmployeeStoryService employeeStoryService;

    public EmployeeStoryController(EmployeeStoryService employeeStoryService) {
        this.employeeStoryService = employeeStoryService;
    }

    @PostMapping
    public EmployeeStory create(@RequestBody EmployeeStoryDTO dto) {
        return this.employeeStoryService.create(dto);
    }

    @PatchMapping
    public EmployeeStory update(@RequestBody EmployeeStoryDTO dto) {
        return this.employeeStoryService.update(dto);
    }

    @GetMapping("/{id}")
    public EmployeeStory getById(@PathVariable Long id) {
        return this.employeeStoryService.getById(id);
    }

    @GetMapping
    public List<EmployeeStory> getAll() {
        return this.employeeStoryService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        this.employeeStoryService.deleteById(id);
    }
}