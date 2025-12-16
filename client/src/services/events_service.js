class EventsService {

    constructor(baseUrl = "http://localhost:8080/events") {
        this.baseUrl = baseUrl;
    }

    async getAll() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch event: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching event:", error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(this.baseUrl + "/" + id);
            if (!response.ok) {
                throw new Error(`Failed to fetch event: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching event:", error);
            throw error;
        }
    }
}

export const eventsService = new EventsService();