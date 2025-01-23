// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

const statusCode = {
  200: "OK: The request has succeeded.",
  201: "Created: The request has been fulfilled and has resulted in one or more new resources being created.",
  204: "No Content: The server successfully processed the request, but is not returning any content.",
  400: "Bad Request: The server cannot process the request due to client-side errors.",
  401: "Unauthorized: The request requires user authentication.",
  403: "Forbidden: The server understood the request, but refuses to authorize it.",
  404: "Not Found: The server has not found anything matching the request URI.",
  405: "Method Not Allowed: The method specified in the request is not allowed.",
  429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
  500: "Internal Server Error: The server encountered an unexpected condition.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: The server is currently unable to handle the request.",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};

app.get('/status-info',(req,res)=>{
  const code = req.query.code;
  const message = statusCode[code];

  if (message) {
    res.json({code, message });


}});





const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
