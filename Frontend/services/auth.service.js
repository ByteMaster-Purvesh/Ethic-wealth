// Final end point of UI which interact with API (backend )
import axios from "axios";
import cookies from "js-cookie";

// ---------------------------------------
// API ENDPOINTS (Corrected)
// ---------------------------------------
const API = {
    base: (import.meta.env.VITE_BASE_URL) || "http://localhost:3000",
    auth: "/api/auth",
    contact: "/api/contact"
};

// ---------------------------------------
// REQUEST CONFIGURATION
// ---------------------------------------
const createConfig = (includeToken = true) => {
    const config = { withCredentials: true };

    if (includeToken) {
        const token = cookies.get("token") || localStorage.getItem("token");
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`
            };
        }
    }

    return config;
};

// ---------------------------------------
// AUTHENTICATION SERVICE
// ---------------------------------------
export const authService = {

    // Register
    async register(userData) {
        const response = await axios.post(`${API.base}${API.auth}/register`, userData);
        return response.data;
    },

    // Login
    async login(userData) {
        const response = await axios.post(`${API.base}${API.auth}/login`, userData);
        return response.data;
    },

    // Logout
    async logout() {
        const response = await axios.post(`${API.base}${API.auth}/logout`, {}, createConfig(false));
        return response.data;
    },

    // Get current user
    async getMe() {
        const response = await axios.get(`${API.base}${API.auth}/me`, createConfig());
        return response.data;
    },

    // Check authentication
    isAuthenticated() {
        return !!(cookies.get("token") || localStorage.getItem("token"));
    }
};

// ---------------------------------------
// CONTACT SERVICE
// ---------------------------------------
export const contactService = {

    // Submit contact form
    async submitContact(contactData) {
        const response = await axios.post(`${API.base}${API.contact}`, contactData, createConfig(false));
        return response.data;
    }
};


// Export
export default {
    authService,
    contactService
};
