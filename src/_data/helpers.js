module.exports = {
    /**
     * Returns back some attributes based on whether the link
     * is active or a parent of an active item
     * @param {String} itemUrl the link in question
     * @param {String} pageUrl the page context
     * @returns {String} the attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl) {
        let response = '';
        if (itemUrl === pageUrl) {
            response = ' aria-current="page"';
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"';
        }
        return response;
    },
};