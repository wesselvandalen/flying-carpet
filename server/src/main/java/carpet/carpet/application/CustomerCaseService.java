package carpet.carpet.application;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import carpet.carpet.data.CustomerCaseRepository;
import carpet.carpet.domain.CustomerCase;
import carpet.carpet.domain.EmploymentCondition;
import carpet.carpet.domain.Profile;
import carpet.carpet.presentation.dto.CustomerCaseDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class CustomerCaseService implements ContentServiceInterface<CustomerCase, CustomerCaseDTO> {
    
    private final CustomerCaseRepository customerCaseRepository;
    private final ProfileService profileService;

    public CustomerCaseService(CustomerCaseRepository customerCaseRepository, ProfileService profileService) {
        this.customerCaseRepository = customerCaseRepository;
        this.profileService = profileService;
    }

    @Override
    public CustomerCase create(CustomerCaseDTO dto) {
        final CustomerCase customerCase = new CustomerCase(dto.getTitle(), dto.getDescription(), dto.getImage(), dto.getSector(), dto.getClientName());
        this.customerCaseRepository.save(customerCase);
        return customerCase;
    }

    @Override
    public CustomerCase update(CustomerCaseDTO dto) {
        Optional<CustomerCase> customerCase = this.customerCaseRepository.findById(dto.getId());
        if (customerCase.isPresent()) {
            CustomerCase foundCustomerCase = customerCase.get();
            foundCustomerCase.setTitle(dto.getTitle());
            foundCustomerCase.setDescription(dto.getDescription());
            foundCustomerCase.setImage(dto.getImage());
            foundCustomerCase.setSector(dto.getSector());
            foundCustomerCase.setClientName(dto.getClientName());
            this.customerCaseRepository.save(foundCustomerCase);
            return foundCustomerCase;
        }
        throw new RuntimeException("No customer case was found with id " + dto.getId());
    }

    @Override
    public CustomerCase getById(Long id) {
        Optional<CustomerCase> customerCase = this.customerCaseRepository.findById(id);
        if (customerCase.isEmpty()) {
            throw new RuntimeException("The customer case with id " + id + " was not found.");
        }
        return customerCase.get();
    }

    @Override
    public List<CustomerCase> getAll() {
        return this.customerCaseRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        List<Profile> profiles = this.profileService.getAll();
        if (profiles.size() == 0) {
            this.customerCaseRepository.deleteById(id);
            return;
        }

        for (Profile profile : profiles) {
            Set<CustomerCase> customerCases = profile.getCustomerCases();
            
            for (CustomerCase customerCase : customerCases) {
                if (customerCase.getId() == id) {
                    profile.removeCustomerCase(customerCase);
                    break;
                }
            }
        }

        this.customerCaseRepository.deleteById(id);
    }
}