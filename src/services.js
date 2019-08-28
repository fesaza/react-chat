import axios from 'axios';

const token = 'quril5nBhGT2';
const url = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/';

const services = {
    getMessages: () => axios.get(`${url}?token=${token}`),
    sendMessage: () => {},
};

export default services;