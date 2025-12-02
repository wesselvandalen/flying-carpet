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

import carpet.carpet.application.EventService;
import carpet.carpet.domain.Event;
import carpet.carpet.presentation.dto.EventDTO;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = {"http://localhost:5173"})
public class EventController {
    
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public Event createEvent(@RequestBody EventDTO dto) {
        return this.eventService.create(dto);
    }

    @PatchMapping
    public Event updateEvent(@RequestBody EventDTO dto) {
        return this.eventService.update(dto);
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return this.eventService.getById(id);
    }

    @GetMapping
    public List<Event> getAllEvents() {
        return this.eventService.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteEventById(@PathVariable Long id) {
        this.eventService.deleteById(id);
    }
}