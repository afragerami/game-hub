import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'e64c21b1e6ab44aab8aa3ad508a4cee4'
    }

})