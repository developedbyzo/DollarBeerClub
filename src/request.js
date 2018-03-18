import axios from 'axios'
import { DBC_URL } from './constant'

export default axios
.get(`${DBC_URL}`).catch((error) => {
  console.log(error)
})
