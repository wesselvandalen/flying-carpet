package carpet.carpet.presentation.dto;

public class EmploymentConditionDTO {
    
    private Long id;
    private String title;
    private String description;
    private String icon;
    private String category;

    public EmploymentConditionDTO(String title, String description, String icon, String category) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public String getDescription() {
        return description;
    }

    public String getIcon() {
        return icon;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

}