package carpet.carpet.application;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import carpet.carpet.data.EventRepository;
import carpet.carpet.domain.Event;
import carpet.carpet.domain.Profile;
import carpet.carpet.presentation.dto.EventDTO;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class EventService implements ContentServiceInterface<Event, EventDTO> {

    private final EventRepository eventRepository;
    private final ProfileService profileService;

    public EventService(EventRepository eventRepository, ProfileService profileService) {
        this.eventRepository = eventRepository;
        this.profileService = profileService;
    }

    @Override
    public Event create(EventDTO dto) {
        final Event event = new Event(dto.getTitle(), dto.getDescription(), dto.getDate(), dto.getLocation(),
                dto.getImage());
        this.eventRepository.save(event);
        return event;
    }

    @Override
    public Event update(EventDTO dto) {
        Optional<Event> event = this.eventRepository.findById(dto.getId());
        if (event.isPresent()) {
            Event foundEvent = event.get();
            foundEvent.setDate(dto.getDate());
            foundEvent.setDescription(dto.getDescription());
            foundEvent.setImage(dto.getImage());
            foundEvent.setLocation(dto.getLocation());
            foundEvent.setTitle(dto.getTitle());
            this.eventRepository.save(foundEvent);
            return foundEvent;
        }
        throw new RuntimeException("No event was found with id " + dto.getId());
    }

    @Override
    public Event getById(Long id) {
        Optional<Event> event = this.eventRepository.findById(id);
        if (event.isEmpty()) {
            throw new RuntimeException("The event with id " + id + " was not found.");
        }
        return event.get();
    }

    @Override
    public List<Event> getAll() {
        return this.eventRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        List<Profile> profiles = this.profileService.getAll();
        if (profiles.size() == 0) {
            this.eventRepository.deleteById(id);
            return;
        }

        for (Profile profile : profiles) {
            Set<Event> events = profile.getEvents();
            
            for (Event event : events) {
                if (event.getId() == id) {
                    profile.removeEvent(event);
                    break;
                }
            }
        }

        this.eventRepository.deleteById(id);
    }
}