class InternNetworkService {

    constructor(baseUrl = "http://localhost:8080/intern-networks") {
        this.baseUrl = baseUrl;
    }

    async getAll() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch intern network: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching intern network:", error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(this.baseUrl + "/" + id);
            if (!response.ok) {
                throw new Error(`Failed to fetch intern network: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching intern network:", error);
            throw error;
        }
    }
}

export const internNetworkService = new InternNetworkService();