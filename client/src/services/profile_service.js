export default class ProfileService {
    
    constructor(baseUrl = "http://localhost:8080/profiles") {
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

    async getById(id) {
        try {
            const response = await fetch(this.baseUrl + "/" + id);
            if (!response.ok) {
                throw new Error(`Failed to fetch profiles: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching profiles:", error);
            throw error;
        }
    }
    // Example future methods:
    // async getById(id) { ... }
    // async create(data) { ... }
    // async delete(id) { ... }
}