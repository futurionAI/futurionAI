import emailjs from '@emailjs/browser';

// This file will handle the EmailJS integration
// You'll need to sign up at https://www.emailjs.com/ to get your IDs

// Get values from environment variables
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || '';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  response?: any;
  error?: any;
}

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
      USER_ID
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 