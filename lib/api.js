import axios from 'axios';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const api = axios.create({
    baseURL: API_BASE_URL,
});

// -------------------- Login Function ------------
export const login = async (data) => {
    try {
        const { email, phone_number, password } = data;
        let response;

        if (email) {
            response = await api.post('login', { email, password });
        } else if (phone_number) {
            response = await api.post('login', { phone_number, password });
        } else {
            throw new Error('Either email or phone number is required');
        }

        if (!response?.data?.access || !response?.data?.refresh) {
            throw new Error('Invalid token structure received from the server');
        }

        localStorage.setItem('authToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);

        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        throw error;
    }
};
