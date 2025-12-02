package carpet.carpet.presentation.dto;

public class InternNetworkDTO {

    private Long id;
    private String name;
    private String description;
    private String image;
    private String focusArea;

    public InternNetworkDTO(Long id, String name, String description, String image, String focusArea) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.focusArea = focusArea;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getFocusArea() {
        return focusArea;
    }

    public String getImage() {
        return image;
    }

    public String getName() {
        return name;
    }

}