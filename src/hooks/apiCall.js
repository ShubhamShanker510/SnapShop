import axios from "axios";
export const apiCall = (cart) => {
    return axios.post('http://localhost:3000/cart', cart);
};

