/**
 * 
 * @param {Object} response the fetch Response Object
 * @returns {Promise.Resolve | Promise.Reject} if the response is valid or not
 */
export const isOk = response =>
    response.ok ?
        response.json() :
        Promise.reject(response.statusText)