import { useMutation } from '@tanstack/react-query';

export interface ContactFormData {
  email: string;
  message?: string;
  name?: string;
}

export const useSubmitContact = () => {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate API network request latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate form submission validation logic
      if (!data.email.includes('@')) {
        throw new Error('Please enter a valid email address.');
      }
      
      return { success: true, message: 'Form submitted successfully!' };
    },
  });
};
