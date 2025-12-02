package carpet.carpet.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpet.carpet.domain.InternNetwork;

@Repository
public interface InternNetworkRepository extends JpaRepository<InternNetwork, Long> {
}