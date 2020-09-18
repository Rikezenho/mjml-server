const app = require('express')();
const bodyParser = require('body-parser');
const mjml2html = require('mjml');
const shouldListen = process.env.indexOf('--listen') > -1;

const parseMjml = (body, options = {}) => mjml2html(body, options);
const handleParse = (req, res) => {
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

if (shouldListen) {
    const PORT = 9000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.post('/parse', handleParse);

    app.listen(PORT, () => {
        console.log(`MJML server listening on ${PORT}...`);
    });
} else {
    module.exports = handleParse;
}