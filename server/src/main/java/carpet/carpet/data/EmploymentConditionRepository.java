package carpet.carpet.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpet.carpet.domain.EmploymentCondition;

@Repository
public interface EmploymentConditionRepository extends JpaRepository<EmploymentCondition, Long> {
}