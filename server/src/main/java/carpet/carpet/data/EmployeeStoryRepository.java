package carpet.carpet.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpet.carpet.domain.EmployeeStory;

@Repository
public interface EmployeeStoryRepository extends JpaRepository<EmployeeStory, Long>  {   
}