import { baseURL } from "../config/config";
const token = sessionStorage.getItem("token");

export async function createProfile(object) {
    const url = baseURL + "/profiles";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(object),
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error.message);
    }
}

export async function updateProfile(object) {
    const url = baseURL + "/profiles";
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(object),
    };

    try {
        const response = await fetch(url, options);
        console.log(response);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

    } catch (error) {
        console.error(error.message);
    }
}

export async function getProfiles() {
    const url = baseURL + "/profiles";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error.message);
    }
}

export async function deleteProfileById(id) {
    const url = baseURL + "/profiles/" + id;
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

    } catch (error) {
        console.error(error.message);
    }
}