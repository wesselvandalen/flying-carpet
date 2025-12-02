package carpet.carpet.application;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import carpet.carpet.data.InternNetworkRepository;
import carpet.carpet.domain.InternNetwork;
import carpet.carpet.domain.Profile;
import carpet.carpet.presentation.dto.InternNetworkDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class InternNetworkService implements ContentServiceInterface<InternNetwork, InternNetworkDTO> {

    private final InternNetworkRepository internNetworkRepository;
    private final ProfileService profileService;

    public InternNetworkService(InternNetworkRepository internNetworkRepository, ProfileService profileService) {
        this.internNetworkRepository = internNetworkRepository;
        this.profileService = profileService;
    }

    @Override
    public InternNetwork create(InternNetworkDTO dto) {
        final InternNetwork internNetwork = new InternNetwork(dto.getName(), dto.getDescription(), dto.getImage(),
                dto.getFocusArea());
        this.internNetworkRepository.save(internNetwork);
        return internNetwork;
    }

    @Override
    public InternNetwork update(InternNetworkDTO dto) {
        Optional<InternNetwork> internNetwork = this.internNetworkRepository.findById(dto.getId());
        if (internNetwork.isPresent()) {
            InternNetwork foundInternNetwork = internNetwork.get();
            foundInternNetwork.setDescription(dto.getDescription());
            foundInternNetwork.setFocusArea(dto.getFocusArea());
            foundInternNetwork.setImage(dto.getImage());
            foundInternNetwork.setName(dto.getName());
            this.internNetworkRepository.save(foundInternNetwork);
            return foundInternNetwork;
        }
        throw new RuntimeException("No intern network found with id " + dto.getId());
    }

    @Override
    public InternNetwork getById(Long id) {
        Optional<InternNetwork> internNetwork = this.internNetworkRepository.findById(id);
        if (internNetwork.isEmpty()) {
            throw new RuntimeException("The intern network with id " + id + " was not found.");
        }
        return internNetwork.get();
    }

    @Override
    public List<InternNetwork> getAll() {
        return this.internNetworkRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        List<Profile> profiles = this.profileService.getAll();
        if (profiles.size() == 0) {
            this.internNetworkRepository.deleteById(id);
            return;
        }

        for (Profile profile : profiles) {
            Set<InternNetwork> internNetworks = profile.getInternNetworks();
            
            for (InternNetwork internNetwork : internNetworks) {
                if (internNetwork.getId() == id) {
                    profile.removeInternNetwork(internNetwork);
                    break;
                }
            }
        }

        this.internNetworkRepository.deleteById(id);
    }
}