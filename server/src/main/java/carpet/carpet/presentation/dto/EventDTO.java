package carpet.carpet.presentation.dto;

import java.util.Date;

public class EventDTO {
    
    private Long id;
    private String title;
    private String description;
    private Date date;
    private String location;
    private String image;

    public EventDTO(String title, String description, Date date, String location, String image) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.date = date;
        this.image = image;
    }

    public Date getDate() {
        return date;
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

    public String getLocation() {
        return location;
    }

    public String getTitle() {
        return title;
    }
}