package carpet.carpet.presentation.dto;

public class CustomerCaseDTO {
    
    private Long id;
    private String title;
    private String description;
    private String image;
    private String sector;
    private String clientName;

    public CustomerCaseDTO(String title, String description, String image, String sector, String clientName) {
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
}