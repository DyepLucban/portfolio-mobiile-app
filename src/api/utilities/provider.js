import axios from 'axios'; 
import { handleResponse, handleError } from './response'; 
import { API_URL_LOCAL } from '../../constants/index'

/** @param {string} resource */ 
const browse = (resource) => { 
  return axios 
    .get(`${API_URL_LOCAL}/${resource}`) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} resource */ 
/** @param {string} id */ 
const browseSpecific = (resource, id) => { 
  return axios 
    .get(`${API_URL_LOCAL}/${resource}/${id}`) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} resource */ 
/** @param {object} model */ 
const post = (resource, model) => { 
  return axios 
    .post(`${API_URL_LOCAL}/${resource}/create`, model) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} resource */ 
/** @param {object} model */ 
const put = (resource, model) => { 
  return axios 
    .put(`${API_URL_LOCAL}/${resource}`, model) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} resource */ 
/** @param {object} model */ 
const patch = (resource, model) => { 
  return axios 
    .patch(`${API_URL_LOCAL}/${resource}`, model) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} resource */ 
/** @param {string} id */ 
const remove = (resource, id) => { 
  return axios 
    .delete(`${API_URL_LOCAL}/${resource}`, id) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

export const apiProvider = { 
	browse, 
  browseSpecific, 
  post, 
  put, 
  patch, 
  remove, 
};