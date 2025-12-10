class VacancyService {

    constructor(baseUrl = "http://localhost:8080/vacancies") {
        this.baseUrl = baseUrl;
    }

    async getAll() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch vacancies: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching vacancies:", error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(this.baseUrl + "/" + id);
            if (!response.ok) {
                throw new Error(`Failed to fetch vacancies: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching vacancies:", error);
            throw error;
        }
    }
}

export const vacancyService = new VacancyService();