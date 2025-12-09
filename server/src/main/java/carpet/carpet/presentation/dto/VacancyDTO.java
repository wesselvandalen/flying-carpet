package carpet.carpet.presentation.dto;

import java.util.Date;

public class VacancyDTO {

    private Long id;
    private String title;
    private String description;
    private String image;
    private String url;
    private Date postedDate;
    private String employmentType;
    private String department;
    private String location;
    private String salary;

    public VacancyDTO(Long id, String title, String description, String image, String url, String employmentType,
            String department,
            String location, String salary) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.url = url;
        this.employmentType = employmentType;
        this.location = location;
        this.postedDate = new Date();
        this.department = department;
        this.salary = salary;
    }

    public String getSalary() {
        return salary;
    }

    public Long getId() {
        return id;
    }

    public String getDepartment() {
        return department;
    }

    public String getDescription() {
        return description;
    }

    public String getEmploymentType() {
        return employmentType;
    }

    public String getImage() {
        return image;
    }

    public String getLocation() {
        return location;
    }

    public Date getPostedDate() {
        return postedDate;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    @Override
    public String toString() {
        return "VacancyDTO {" +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", url='" + url + '\'' +
                ", postedDate=" + postedDate +
                ", employmentType='" + employmentType + '\'' +
                ", department='" + department + '\'' +
                ", location='" + location + '\'' +
                ", salary='" + salary + '\'' +
                '}';
    }
}