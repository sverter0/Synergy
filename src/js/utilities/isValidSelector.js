/**
 * Test the validity (not existance) of a CSS selector
 * 
 * @function isValidSelector
 * 
 * @param {String} selector - the selector to test for validity
 * @returns {Bool}
 * 
 * @example isValidSelector('[data-foo-bar]') // returns true
 * @example isValidSelector(4) // returns false
 */
export function isValidSelector(selector) {
    var stub = document.createElement('br');
    
    try { 
        stub.querySelector(selector); 
    } catch(e) { 
        return false; 
    }

    return true;
}