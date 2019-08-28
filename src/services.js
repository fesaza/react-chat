import axios from 'axios';

const token = 'quril5nBhGT2';
const url = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/';

const services = {
    getMessages: () => axios.get(`${url}?token=${token}`).then(result => result.data),
    sendMessage: (message, author) => axios.post(url, {
        message, author
    }, {
        headers: {
            token
        }
    }),
};

export default services;