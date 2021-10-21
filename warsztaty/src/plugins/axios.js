import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api-gw-t.testuniqa.pl'
})

export default axiosInstance