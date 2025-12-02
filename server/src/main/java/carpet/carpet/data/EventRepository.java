package carpet.carpet.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpet.carpet.domain.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long>  {   
}