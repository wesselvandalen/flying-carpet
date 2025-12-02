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

import carpet.carpet.application.InternNetworkService;
import carpet.carpet.domain.InternNetwork;
import carpet.carpet.presentation.dto.InternNetworkDTO;

@RestController
@RequestMapping("/intern-networks")
@CrossOrigin(origins = { "http://localhost:5173" })
public class InternNetworkController {

    private final InternNetworkService internNetworkService;

    public InternNetworkController(InternNetworkService internNetworkService) {
        this.internNetworkService = internNetworkService;
    }

    @PostMapping
    public InternNetwork createInternNetwork(@RequestBody InternNetworkDTO dto) {
        return this.internNetworkService.create(dto);
    }

    @PatchMapping
    public InternNetwork updateInternNetwork(@RequestBody InternNetworkDTO dto) {
        return this.internNetworkService.update(dto);
    }

    @GetMapping("/{id}")
    public InternNetwork getInternNetworkById(@PathVariable Long id) {
        return this.internNetworkService.getById(id);
    }

    @GetMapping
    public List<InternNetwork> getALlInternNetworks() {
        return this.internNetworkService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteInternNetworkById(@PathVariable Long id) {
        this.internNetworkService.deleteById(id);
    }
}