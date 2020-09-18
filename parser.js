const mjml2html = require('mjml');

const parse = (body, options = {}) => mjml2html(body, options);

module.exports = parse;