import api from 'api'

api.protocol = process.env.REACT_APP_PROTOCOL
api.host = process.env.REACT_APP_HOST
//api.port = process.env.REACT_APP_PORT

export default api