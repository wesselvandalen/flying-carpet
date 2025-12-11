package carpet.carpet.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class InternNetwork {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(length = 2000)
    private String description;
    private String image;
    @Column(length = 500)
    private String focusArea;

    // Default empty constructur for Spring.
    protected InternNetwork() { }

    public InternNetwork(String name, String description, String image, String focusArea) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.focusArea = focusArea;
    }

    public String getDescription() {
        return description;
    }

    public String getFocusArea() {
        return focusArea;
    }

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getName() {
        return name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setFocusArea(String focusArea) {
        this.focusArea = focusArea;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setName(String name) {
        this.name = name;
    }

}