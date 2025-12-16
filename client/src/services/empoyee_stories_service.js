class EmployeeStoriesService {

    constructor(baseUrl = "http://localhost:8080/employee-stories") {
        this.baseUrl = baseUrl;
    }

    async getAll() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch customer case: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching customer case:", error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(this.baseUrl + "/" + id);
            if (!response.ok) {
                throw new Error(`Failed to fetch customer case: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching customer case:", error);
            throw error;
        }
    }
}

export const employeeStoriesService = new EmployeeStoriesService();