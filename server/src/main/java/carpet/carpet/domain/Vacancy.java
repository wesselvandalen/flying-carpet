package carpet.carpet.domain;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vacancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length = 2000)
    private String description;
    private String image;
    private String url;
    private Date postedDate;
    private String employmentType;
    private String department;
    private String location;

    // Default empty constructur for Spring.
    protected Vacancy() { }

    public Vacancy(String title, String description, String image, String url, String employmentType, String department,
            String location) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.url = url;
        this.employmentType = employmentType;
        this.location = location;
        this.postedDate = new Date();
        this.department = department;
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

    public Long getId() {
        return id;
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

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setEmploymentType(String employmentType) {
        this.employmentType = employmentType;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setPostedDate(Date postedDate) {
        this.postedDate = postedDate;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Vacancy {" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", url='" + url + '\'' +
                ", postedDate=" + postedDate +
                ", employmentType='" + employmentType + '\'' +
                ", department='" + department + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}