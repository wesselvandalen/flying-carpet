package carpet.carpet.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpet.carpet.domain.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
} 