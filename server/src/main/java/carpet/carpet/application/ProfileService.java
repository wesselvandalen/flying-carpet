package carpet.carpet.application;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import carpet.carpet.data.ProfileRepository;
import carpet.carpet.domain.Profile;
import carpet.carpet.presentation.dto.ProfileDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class ProfileService implements ContentServiceInterface<Profile, ProfileDTO> {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public Profile create(ProfileDTO dto) {
        final Profile profile = new Profile(dto.getName(), dto.getLocation(), dto.getDate(), dto.getVacancies(),
                dto.getEvents(), dto.getInternNetworks(), dto.getEmploymentConditions(), dto.getCustomerCases(), dto.getEmployeeStories());
        this.profileRepository.save(profile);
        return profile;
    }

    @Override
    public Profile update(ProfileDTO dto) {
        Optional<Profile> profile = this.profileRepository.findById(dto.getId());
        if (profile.isPresent()) {
            Profile foundProfile = profile.get();
            foundProfile.setName(dto.getName());
            foundProfile.setLocation(dto.getLocation());
            foundProfile.setDate(dto.getDate());
            foundProfile.setInternNetworks(dto.getInternNetworks());
            foundProfile.setVacancies(dto.getVacancies());
            foundProfile.setCustomerCases(dto.getCustomerCases());
            foundProfile.setEmploymentConditions(dto.getEmploymentConditions());
            foundProfile.setEvents(dto.getEvents());
            this.profileRepository.save(foundProfile);
            return foundProfile;
        }
        throw new RuntimeException("No profile found with id " + dto.getId());
    }

    @Override
    public Profile getById(Long id) {
        Optional<Profile> profile = this.profileRepository.findById(id);
        if (profile.isEmpty()) {
            throw new RuntimeException("The profile with id " + id + " was not found.");
        }
        return profile.get();
    }

    @Override
    public List<Profile> getAll() {
        return this.profileRepository.findAll();
    }
    
    @Override
    public void deleteById(Long id) {
        this.profileRepository.deleteById(id);
    }
}