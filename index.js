var express = require("express");
const fetch = require("node-fetch")
var app = express();


var headers = {
    identity: "B4",
    token: "e908711e-8acc-4a4a-b273-9e33395b4cd2"
}

fetch("https://techtrek-api-gateway.cfapps.io/marketing/", { method: 'GET', headers: headers })
    .then((res) => {
        //console.log(res)
        return res.json()
    })
    .then((json) => {
        console.log(json)
    })