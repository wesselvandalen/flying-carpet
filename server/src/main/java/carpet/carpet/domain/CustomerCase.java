package carpet.carpet.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomerCase {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String image;
    private String sector;
    private String clientName;

    // Default empty constructur for Spring.
    protected CustomerCase() { }

    public CustomerCase(String title, String description, String image, String sector, String clientName) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.sector = sector;
        this.clientName = clientName;
    }

    public String getClientName() {
        return clientName;
    }

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getSector() {
        return sector;
    }

    public String getTitle() {
        return title;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "CustomerCase{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", sector='" + sector + '\'' +
                ", clientName='" + clientName + '\'' +
                '}';
    }

}