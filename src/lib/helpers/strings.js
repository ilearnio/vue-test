/**
 * Truncate a string by a given maximum langth of chars.
 * @param   {String} str
 * @param   {Number} maxLen
 * @param   {Number} append
 * @returns {String}
 */
export const truncate = (str, maxLen = 100, append = '...') => {
  if (!str) return ''

  return String(str).split(' ').reduce((str, word) => {
    if (str.length + word.length >= maxLen) {
      if (str.slice(-append.length) !== append) {
        str = str.replace(/[^a-zA-Z0-9]+$/, '') // trim special chars
        str += append
      }
      return str
    }

    str += ' ' + word

    return str.trim()
  }, '')
}

/**
 * Convert applicable characters to HTML entities.
 * @param   {String} htmlEntitiesEncode
 * @returns {String}
 */
export const htmlEntitiesEncode = (str) => {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Replaces line breaks with html tags.
 * @param   {String} str
 * @returns {String}
 */
export const lineBreaksToHtml = (str) => {
  if (!str) return ''
  str = String(str).split('\n\n').join('</p><p>')
  str = str.split('\n').join('<br>')
  return '<p>' + str + '</p>'
}

/**
 * Prepare text content to be inserted into DOM as HTML
 * @param   {String} str
 * @returns {String}
 */
export const textToHtml = (str) => {
  return lineBreaksToHtml(htmlEntitiesEncode(str || ''))
}
