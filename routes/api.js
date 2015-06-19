var express = require('express');
var wkhtmltopdf = require('wkhtmltopdf');

var router = express.Router();

router.post('/pdf', function(req, res, next) {
  var html = req.body.html;

  if (html) {
    res.set({
      'status': 201,
      'Content-Type': 'application/pdf',
      'Access-Control-Allow-Origin': '*',
      'Content-Disposition': 'attachment; filename=document.pdf'
    });
    wkhtmltopdf(html).pipe(res);
  }
  else {
    res.sendStatus(400);
  }
});

module.exports = router;
