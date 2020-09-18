const mjml2html = require('mjml');

const parseMjml = (body, options = {}) => mjml2html(body, options);

module.exports = async (req, res) => {
    const {
        options = {},
        body
    } = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Required parameter "body" is empty.',
        });
    }

    try {
        const result = parseMjml(body, options);
        return res.json({
            success: true,
            result,
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            success: false,
            error: e.message,
        });
    }
};