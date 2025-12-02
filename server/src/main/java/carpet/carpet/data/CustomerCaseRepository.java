package carpet.carpet.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpet.carpet.domain.CustomerCase;

@Repository
public interface CustomerCaseRepository extends JpaRepository<CustomerCase, Long> {
}