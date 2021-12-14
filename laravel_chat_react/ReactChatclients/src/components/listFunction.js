import axios from 'axios'

export const fetchMessages = () => {
    return axios
    .get('/api/messages',{
        header: {'Content-type': 'application/json'}
    })
    .then(res => {
        return res.data
    })
}
export const addMessage = (message) => {
    return axios
    .post('/api/messages', 
    {
        message: message,
    },
    ).then(res => {
        console.log(res)
    })
}