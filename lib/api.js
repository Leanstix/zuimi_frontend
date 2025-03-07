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

// -------------------- Logout Function ------------
export const logout = async () => {
    try {
        const response = await api.post('logout', {
            refresh: localStorage.getItem('refreshToken'),
        });

        if (response.status === 204) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('refreshToken');
            return true;
        }

        throw new Error('Invalid response from the server');
    } catch (error) {
        console.error('Logout error:', error.response?.data || error.message);
        throw error;
    }
};

// -------------------- SignUp Function ------------
export const signUp = async (data) => {
    try {
        const response = await api.post('signup', data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Signup error:', error.response?.data || error.message);
        throw error;
    }
};
