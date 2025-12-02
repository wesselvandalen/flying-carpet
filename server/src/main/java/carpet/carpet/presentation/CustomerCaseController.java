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

import carpet.carpet.application.CustomerCaseService;
import carpet.carpet.domain.CustomerCase;
import carpet.carpet.presentation.dto.CustomerCaseDTO;

@RestController
@RequestMapping("/customer-cases")
@CrossOrigin(origins = {"http://localhost:5173"})
public class CustomerCaseController {
    
    private final CustomerCaseService customerCaseService;

    public CustomerCaseController(CustomerCaseService customerCaseService) {
        this.customerCaseService = customerCaseService;
    }

    @PostMapping
    public CustomerCase createCustomerCase(@RequestBody CustomerCaseDTO dto) {
        return this.customerCaseService.create(dto);
    }

    @PatchMapping
    public CustomerCase updateCustomerCase(@RequestBody CustomerCaseDTO dto) {
        return this.customerCaseService.update(dto);
    }

    @GetMapping("/{id}")
    public CustomerCase getCustomerCaseById(@PathVariable Long id) {
        return this.customerCaseService.getById(id);
    }

    @GetMapping
    public List<CustomerCase> getAllCustomerCases() {
        return this.customerCaseService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteCustomerCaseById(@PathVariable Long id) {
        this.customerCaseService.deleteById(id);
    }

}