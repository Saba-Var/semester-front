import { axiosConfig } from 'config'
import axios from 'axios'

const axiosPrivate = axios.create(axiosConfig)

export default axiosPrivate
