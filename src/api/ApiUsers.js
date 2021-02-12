import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://services.odata.org/V4/(S(w1mzm3f22b0ivnydrywt1lgx))/TripPinServiceRW'
})

export const usersApi = {
    getUsers() {
        return instance.get('People').then(response => {
            return response.data
        });
    },
    getCurrentUser(username) {
        return instance.get(`People('${username}')`).then(response => {
            return response.data
        });
    }
}
