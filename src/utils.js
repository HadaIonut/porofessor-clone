import axios from "axios";
import backendUrl from "./constants/backendUrl.js";

const parsePath = (path, params) => path.replaceAll(/:([a-zA-Z]+)/g, (_, key) => params[key])

export const capitalize = (string) => string?.toLowerCase?.()?.charAt?.(0)?.toUpperCase?.() + string?.toLowerCase?.()?.slice?.(1)

export const getDataFromAPI = (path, params) => axios({
  method: 'get',
  url: `${backendUrl}/${parsePath(path, params)}`,
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});