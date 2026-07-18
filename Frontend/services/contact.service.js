import axios from 'axios';

// Assuming your backend is running on a standard port or configured via proxy
// You might want to use process.env.NEXT_PUBLIC_API_URL or similar depending on the framework
const API_URL = 'http://localhost:3000/api/contact'; 

const submitContactForm = async (contactData) => {
    try {
        const response = await axios.post(API_URL, contactData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        // Handle axios error properly
        if (error.response && error.response.data) {
            throw error.response.data; // Throw the backend validation errors
        }
        throw new Error('An unexpected error occurred. Please try again.');
    }
};

export const contactService = {
    submitContactForm
};
