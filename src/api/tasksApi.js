import axios from "axios";

const taskApi = axios.create({
    baseURL : 'https://tasks-list-c0d34-default-rtdb.firebaseio.com/'
})

export default taskApi