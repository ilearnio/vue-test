/**
 * Simple API Abstraction
 */

import Vue from 'vue'

const {
  API_URL,
  DEBUG_MODE
} = process.env

const request = (method, path) => {
  const onResolve = function (res) {
    if (DEBUG_MODE) {
      console.log('API response:', path, res)
    }
    return res
  }

  const onReject = function (e) {
    window.alert('An error has occured while fetching data. Please try to reload the page')
    console.error(String(e), e)
  }

  return Vue.http[method](API_URL + path)
    .then(onResolve, onReject)
}

const api = {
  get (path) {
    return request('get', path)
  },

  post (path) {
    return request('post', path)
  },

  put (path) {
    return request('put', path)
  },

  delete (path) {
    return request('delete', path)
  }
}

export default api
