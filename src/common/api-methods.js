/**
 * Direct calls to API.
 * This is primarily for abstracting urls, to keep things DRY and clean
 */

import api from '@/lib/api'

export const fetchItem = (userId, itemId, callback) => {
  return api.get(`/users/${userId}/items/${itemId}.json`, callback)
}

export const fetchItemComments = (userId, itemId, page, callback) => {
  return api.get(`/users/${userId}/items/${itemId}/comments.json?page=${page}`, callback)
}
