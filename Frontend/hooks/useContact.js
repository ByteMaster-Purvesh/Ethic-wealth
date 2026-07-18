import { useState } from 'react';
import { contactService } from '../services/contact.service';

export const useContact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const submitContact = async (formData) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);
        
        try {
            const data = await contactService.submitContactForm(formData);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000); // Disappear after 5s
            return data;
        } catch (err) {
            // Check for express-validator array of errors or standard string error
            if (err.errors && Array.isArray(err.errors)) {
                setError(err.errors.map(e => Object.values(e)[0]).join(', '));
            } else if (err.error) {
                setError(Array.isArray(err.error) ? err.error.join(', ') : err.error);
            } else {
                setError(err.message || 'Submission failed');
            }
            setTimeout(() => setError(null), 5000); // Disappear after 5s
        } finally {
            setIsLoading(false);
        }
    };

    const resetStatus = () => {
        setError(null);
        setSuccess(false);
    };

    return { submitContact, isLoading, error, success, resetStatus };
};
