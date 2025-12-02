package carpet.carpet;

import java.util.Date;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import carpet.carpet.data.ProfileRepository;
import carpet.carpet.data.VacancyRepository;
import carpet.carpet.domain.Profile;
import carpet.carpet.domain.Vacancy;

@Configuration
public class DataSeeder {

    /**
     * A class that automatically fills the H2 database with dummy data.
     */
    @Bean
    CommandLineRunner initDatabase(VacancyRepository vacancyRepository, ProfileRepository profileRepository) {
        return args -> {
            Vacancy vacancy = vacancyRepository.save(new Vacancy("Front end developer", "", "", "", "", "", ""));
            Profile p1 = profileRepository.save(new Profile("P1", "", new Date()));
            p1.setVacancies(Set.of(vacancy));
            profileRepository.save(p1);
        };
    }
}