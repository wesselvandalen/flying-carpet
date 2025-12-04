package carpet.carpet.domain;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class Profile {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String location;
    private Date date; // Date when the profile takes place.

    // All different kind of items each profile can have.
    @ManyToMany
    @JoinTable(name = "profile_vacancies", joinColumns = @JoinColumn(name = "profile_id"), inverseJoinColumns = @JoinColumn(name = "vacancy_id"))
    private Set<Vacancy> vacancies;
    @ManyToMany
    @JoinTable(name = "profile_events", joinColumns = @JoinColumn(name = "profile_id"), inverseJoinColumns = @JoinColumn(name = "event_id"))
    private Set<Event> events;
    @ManyToMany
    @JoinTable(name = "profile_intern_networks", joinColumns = @JoinColumn(name = "profile_id"), inverseJoinColumns = @JoinColumn(name = "intern_network_id"))
    private Set<InternNetwork> internNetworks;
    @ManyToMany
    @JoinTable(name = "profile_employment_conditions", joinColumns = @JoinColumn(name = "profile_id"), inverseJoinColumns = @JoinColumn(name = "employment_condition_id"))
    private Set<EmploymentCondition> employmentConditions;
    @ManyToMany
    @JoinTable(name = "profile_customer_cases", joinColumns = @JoinColumn(name = "profile_id"), inverseJoinColumns = @JoinColumn(name = "customer_case_id"))
    private Set<CustomerCase> customerCases;
    @ManyToMany
    @JoinTable(name = "profile_employee_stories", joinColumns = @JoinColumn(name = "profile_id"), inverseJoinColumns = @JoinColumn(name = "employee_story_id"))
    private Set<EmployeeStory> employeeStories;

    // Default empty constructur for Spring.
    protected Profile() { }

    public Profile(String name, String location, Date date, Set<Vacancy> vacancies, Set<Event> events,
            Set<InternNetwork> internNetworks, Set<EmploymentCondition> employmentConditions,
            Set<CustomerCase> customerCases, Set<EmployeeStory> employeeStories) {
        this.name = name;
        this.location = location;
        this.date = date;
        this.vacancies = vacancies;
        this.events = events;
        this.internNetworks = internNetworks;
        this.employmentConditions = employmentConditions;
        this.customerCases = customerCases;
        this.employeeStories = employeeStories;
    }

    public Profile(String name, String location, Date date) {
        this.name = name;
        this.location = location;
        this.date = date;
        this.vacancies = new HashSet<Vacancy>();
        this.events = new HashSet<Event>();;
        this.internNetworks = new HashSet<InternNetwork>();;
        this.employmentConditions = new HashSet<EmploymentCondition>();;
        this.customerCases = new HashSet<CustomerCase>();;
        this.employeeStories = new HashSet<EmployeeStory>();
    }

    public void removeVacancy(Vacancy vacancy) {
        this.vacancies.remove(vacancy);
    }

    public void removeInternNetwork(InternNetwork internNetwork) {
        this.internNetworks.remove(internNetwork);
    }

    public void removeEmployeeStory(EmployeeStory employeeStory) {
        this.employeeStories.remove(employeeStory);
    }

    public void removeCustomerCase(CustomerCase customerCase) {
        this.customerCases.remove(customerCase);
    }

    public Set<EmployeeStory> getEmployeeStories() {
        return employeeStories;
    }

    public void setEmployeeStories(Set<EmployeeStory> employeeStories) {
        this.employeeStories = employeeStories;
    }

    public void removeEmploymentConditions(EmploymentCondition employmentCondition) {
        this.employmentConditions.remove(employmentCondition);
    }

    public void removeEvent(Event event) {
        this.events.remove(event);
    }

    public Set<CustomerCase> getCustomerCases() {
        return customerCases;
    }

    public Date getDate() {
        return date;
    }

    public Set<EmploymentCondition> getEmploymentConditions() {
        return employmentConditions;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public Long getId() {
        return id;
    }

    public void setCustomerCases(Set<CustomerCase> customerCases) {
        this.customerCases = customerCases;
    }

    public void setEmploymentConditions(Set<EmploymentCondition> employmentConditions) {
        this.employmentConditions = employmentConditions;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setInternNetworks(Set<InternNetwork> internNetworks) {
        this.internNetworks = internNetworks;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setVacancies(Set<Vacancy> vacancies) {
        this.vacancies = vacancies;
    }

    public Set<InternNetwork> getInternNetworks() {
        return internNetworks;
    }

    public String getLocation() {
        return location;
    }

    public String getName() {
        return name;
    }

    public Set<Vacancy> getVacancies() {
        return vacancies;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Profile {" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                ", date=" + date +
                ", vacancies=" + vacancies +
                ", events=" + events +
                ", internNetworks=" + internNetworks +
                ", employmentConditions=" + employmentConditions +
                ", customerCases=" + customerCases +
                ", employeeStories=" + employeeStories +
                '}';
    }
}