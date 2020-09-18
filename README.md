# MJML Server

A simple server for parsing MJML templates.

## Remote usage

You can do a POST request to `https://mjml-server.vercel.app/api/parse` using the same instructions as below.

## Local usage

- Install Node.js modules
- Run `npm start`
- With Postman, Insomnia or any other REST client, do a POST request to `http://localhost:9000/parse` using the following schema (example):

```json
{
    "options": {
        "minify": true
    },
    "body": "<mjml><mj-body><mj-section><mj-column><mj-image width=\"100px\" src=\"/assets/img/logo-small.png\"></mj-image><mj-divider border-color=\"#F45E43\"></mj-divider><mj-text font-size=\"20px\" color=\"#F45E43\" font-family=\"helvetica\">Hello World</mj-text></mj-column></mj-section></mj-body></mjml>"
}
```

> You can see other possible options in [MJML Node.js documentation](https://mjml.io/documentation/#inside-node-js).

- The server will return a JSON like this:

```json
{
    "success": true,
    "result": {
        "html": "<!doctype html><html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\"><head><title></title><!--[if !mso]><!-- --><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><!--<![endif]--><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style type=\"text/css\">#outlook a { padding:0; }\n          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }\n          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }\n          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }\n          p { display:block;margin:13px 0; }</style><!--[if mso]>\n        <xml>\n        <o:OfficeDocumentSettings>\n          <o:AllowPNG/>\n          <o:PixelsPerInch>96</o:PixelsPerInch>\n        </o:OfficeDocumentSettings>\n        </xml>\n        <![endif]--><!--[if lte mso 11]>\n        <style type=\"text/css\">\n          .mj-outlook-group-fix { width:100% !important; }\n        </style>\n        <![endif]--><style type=\"text/css\">@media only screen and (min-width:480px) {\n        .mj-column-per-100 { width:100% !important; max-width: 100%; }\n      }</style><style type=\"text/css\">@media only screen and (max-width:480px) {\n      table.mj-full-width-mobile { width: 100% !important; }\n      td.mj-full-width-mobile { width: auto !important; }\n    }</style></head><body><div><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\" ><tr><td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\"><![endif]--><div style=\"margin:0px auto;max-width:600px;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"><tbody><tr><td style=\"direction:ltr;font-size:0px;padding:20px 0;text-align:center;\"><!--[if mso | IE]><table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td class=\"\" style=\"vertical-align:top;width:600px;\" ><![endif]--><div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"vertical-align:top;\" width=\"100%\"><tr><td align=\"center\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;border-spacing:0px;\"><tbody><tr><td style=\"width:100px;\"><img height=\"auto\" src=\"/assets/img/logo-small.png\" style=\"border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;\" width=\"100\"></td></tr></tbody></table></td></tr><tr><td style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><p style=\"border-top:solid 4px #F45E43;font-size:1px;margin:0px auto;width:100%;\"></p><!--[if mso | IE]><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-top:solid 4px #F45E43;font-size:1px;margin:0px auto;width:550px;\" role=\"presentation\" width=\"550px\" ><tr><td style=\"height:0;line-height:0;\"> &nbsp;\n</td></tr></table><![endif]--></td></tr><tr><td align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"><div style=\"font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#F45E43;\">Hello World</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>",
        "errors": []
    }
}
```

Happy parsing! :)