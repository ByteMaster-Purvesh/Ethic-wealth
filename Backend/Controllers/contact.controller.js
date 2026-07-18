const Contact = require('../Modules/contact.module');

exports.submitContact = async (req, res) => {
    try {
        const { name, email, mobile, subject, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            mobile,
            subject,
            message
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Your request for a call-back has been submitted successfully.',
            data: newContact
        });

    } catch (error) {
        console.error('Error submitting contact form:', error);
        
        // Handle Mongoose validation errors if they slip past Express Validator
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        
        res.status(500).json({
            success: false,
            error: 'Server Error. Please try again later.'
        });
    }
};
