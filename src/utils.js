import axios from "axios";

const serverPath = 'http://localhost:4000'

const parsePath = (path, params) => path.replaceAll(/:([a-zA-Z]+)/g, (_, key) => params[key])

export const getDataFromAPI = (path, params) => axios({
  method: 'get',
  url: `${serverPath}/${parsePath(path, params)}`,
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})