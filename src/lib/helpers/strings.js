/**
 * Truncate a string by a given maximum langth of chars.
 * @param   {String} str
 * @param   {Number} maxLen
 * @param   {Number} append
 * @returns {String}
 */
export const truncate = (str, maxLen = 100, append = '...') => {
  return str.split(' ').reduce((str, word) => {
    if (str.length + word.length > maxLen) {
      if (!str.endsWith(append)) str += append
      return str
    }

    str += ' ' + word

    return str
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
}

/**
 * Replaces line breaks with html tags.
 * @param   {String} str
 * @returns {String}
 */
export const lineBreaksToHtml = (str) => {
  str = str.split('\n\n').join('</p><p>')
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
