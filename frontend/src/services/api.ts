import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with actual API base URL

// Calculate IPSA
export const calculateIPSA = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/calculate-ipsa`, data);
        return response.data;
    } catch (error) {
        throw new Error('Error calculating IPSA: ' + error.message);
    }
};

// Run Monte Carlo simulation
export const runMonteCarlo = async (params) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/monte-carlo`, params);
        return response.data;
    } catch (error) {
        throw new Error('Error running Monte Carlo simulation: ' + error.message);
    }
};

// Get dashboard data
export const getDashboardData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dashboard-data`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching dashboard data: ' + error.message);
    }
};

// Get sensitivity heatmap
export const getSensitivityHeatmap = async (params) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/sensitivity-heatmap`, params);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching sensitivity heatmap: ' + error.message);
    }
};