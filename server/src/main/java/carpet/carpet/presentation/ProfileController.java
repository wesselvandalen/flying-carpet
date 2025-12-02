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

import carpet.carpet.application.ProfileService;
import carpet.carpet.domain.Profile;
import carpet.carpet.presentation.dto.ProfileDTO;

@RestController
@RequestMapping("/profiles")
@CrossOrigin(origins = {"http://localhost:5173"})
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }
    
    @PostMapping
    public Profile createProfile(@RequestBody ProfileDTO dto) {
        return this.profileService.create(dto);
    }

    @PatchMapping
    public Profile updatProfile(@RequestBody ProfileDTO dto) {
        return this.profileService.update(dto);
    }

    @GetMapping("/{id}")
    public Profile getProfileById(@PathVariable Long id) {
        return this.profileService.getById(id);
    }

    @GetMapping
    public List<Profile> getAllProfiles() {
        return this.profileService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteProfileById(@PathVariable Long id) {
        this.profileService.deleteById(id);
    }
}