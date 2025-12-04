package carpet.carpet.domain;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EmployeeStory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String quote;
    private String employeeName;
    private String jobTitle;
    private String description;
    private String image;
    private Date publishDate;

    protected EmployeeStory() { }

    public EmployeeStory(String quote, String employeeName, String jobTitle, String description, String image, Date publishDate) {
        this.quote = quote;
        this.employeeName = employeeName;
        this.jobTitle = jobTitle;
        this.description = description;
        this.image = image;
        this.publishDate = publishDate;
    }

    public String getDescription() {
        return description;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public String getQuote() {
        return quote;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    @Override
    public String toString() {
        return "EmployeeStory{" +
                "id=" + id +
                ", quote='" + quote + '\'' +
                ", employeeName='" + employeeName + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", publishDate=" + publishDate +
                '}';
    }
}