class EmploymentConditions {
    
    constructor(baseUrl = "http://localhost:8080/employment-conditions") {
        this.baseUrl = baseUrl;
    }

    async getAll() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch profiles: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching profiles:", error);
            throw error;
        }
    }
}

export const employmentConditionsService = new EmploymentConditions();