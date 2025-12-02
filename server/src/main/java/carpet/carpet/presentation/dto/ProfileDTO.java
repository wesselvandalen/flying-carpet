package carpet.carpet.presentation.dto;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import carpet.carpet.domain.CustomerCase;
import carpet.carpet.domain.EmploymentCondition;
import carpet.carpet.domain.Event;
import carpet.carpet.domain.InternNetwork;
import carpet.carpet.domain.Vacancy;

public class ProfileDTO {
    
    private Long id;
    private String name;
    private String location;
    private Date date;
    private Set<Vacancy> vacancies = new HashSet<Vacancy>();
    private Set<Event> events = new HashSet<Event>();
    private Set<InternNetwork> internNetworks = new HashSet<InternNetwork>();
    private Set<EmploymentCondition> employmentConditions = new HashSet<EmploymentCondition>();
    private Set<CustomerCase> customerCases = new HashSet<CustomerCase>();
        
    public ProfileDTO(Long id, String name, String location, Date date, Set<Vacancy> vacancies, Set<Event> events, Set<InternNetwork> internNetworks, Set<EmploymentCondition> employmentConditions, Set<CustomerCase> customerCases) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.vacancies = vacancies;
        this.events = events;
        this.internNetworks = internNetworks;
        this.employmentConditions = employmentConditions;
        this.customerCases = customerCases;
    }

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public String getLocation() {
        return location;
    }

    public String getName() {
        return name;
    }

    public Set<CustomerCase> getCustomerCases() {
        return customerCases;
    }

    public Set<EmploymentCondition> getEmploymentConditions() {
        return employmentConditions;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public Set<InternNetwork> getInternNetworks() {
        return internNetworks;
    }

    public Set<Vacancy> getVacancies() {
        return vacancies;
    }
}