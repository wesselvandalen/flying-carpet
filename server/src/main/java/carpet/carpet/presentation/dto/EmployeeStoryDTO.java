package carpet.carpet.presentation.dto;

import java.util.Date;

public class EmployeeStoryDTO {

    private Long id;
    private String quote;
    private String employeeName;
    private String jobTitle;
    private String description;
    private String image;
    private Date publishDate;

    public EmployeeStoryDTO(Long id, String quote, String employeeName, String jobTitle, String description, String image, Date publishDate) {
        this.id = id;
        this.quote = quote;
        this.employeeName = employeeName;
        this.jobTitle = jobTitle;
        this.description = description;
        this.image = image;
        this.publishDate = publishDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    @Override
    public String toString() {
        return "EmployeeStoryDTO{" +
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