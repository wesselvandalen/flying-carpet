package carpet.carpet.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpet.carpet.domain.Vacancy;

@Repository
public interface VacancyRepository extends JpaRepository<Vacancy, Long> {
} 