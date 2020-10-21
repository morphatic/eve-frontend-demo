import axios from 'axios'

export const getPeople = () => axios.get('http://localhost:5000/people').then(res => res.data)