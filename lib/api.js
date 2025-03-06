import axios from 'axios';

const API_BASE_URL = `${ProcessingInstruction.env.NEXT_PUBLIC_API_URL}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

// -------------------- Login Function ------------
export const login = async (data) => {
    try {
        if (data.email) {
            const response = await api.post('login', { email, password })
            if (!response? .data? .access || !response? .data? .refresh) {
                throw new Error('Invalid token structure received from the server')
            }
            localStorage.setItem('authToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message)
            throw error;
        }
    }
};