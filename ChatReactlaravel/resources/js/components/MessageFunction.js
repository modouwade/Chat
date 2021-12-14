export const addMessage = message => {
    return axios
    .post('/messages',message,{
        header: {'Content-type': 'application/json'}
    })
    .then(response => {
       console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })
}
