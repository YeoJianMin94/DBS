var express = require("express");
const fetch = require("node-fetch")
var app = express();


var headers = {
    identity: "B4",
    token: "e908711e-8acc-4a4a-b273-9e33395b4cd2"
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Customer
//Customer ID
app.get("/customers/id/:userName", (req, res, next) => {
    var userName = req.params.userName;
    fetch("https://techtrek-api-gateway.cfapps.io/customers/" + userName, {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Customer Details
app.get("/customers/detail/:customerId", (req, res, next) => {
    var customerId = req.params.customerId;
    fetch("https://techtrek-api-gateway.cfapps.io/customers/" + customerId + "/details", {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Transactions
//Transactions Details
app.get("/customers/transactions/:accountId", (req, res, next) => {
    var accountId = req.params.accountId;
    fetch("https://techtrek-api-gateway.cfapps.io/transactions/" + accountId + "?from=01-01-2018&to=02-01-2019", {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Calculate Credit and Debit Total
app.get("/customers/transactionsbalance/:accountId", (req, res, next) => {
    var accountId = req.params.accountId;
    var debitTotal = 0.0;
    var creditTotal = 0.0;
    var total = {};
    fetch("https://techtrek-api-gateway.cfapps.io/transactions/" + accountId + "?from=01-01-2018&to=02-01-2019", {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            json.forEach(v => {
                if (v['type'] == "DEBIT") {
                    debitTotal += parseFloat(v['amount'])
                }
                if (v['type'] == "CREDIT") {
                    creditTotal += parseFloat(v['amount'])
                }
            });
            total = {
                'debit': debitTotal.toFixed(2),
                'credit': creditTotal.toFixed(2)
            }
            console.log("Total Debit: " + debitTotal.toFixed(2))
            console.log("Total Credit: " + creditTotal.toFixed(2))
            console.log(total)
            // console.log(json)
            res.json(total);
        })
});

//Calculate Tag Total
app.get("/customers/transactionsbalance/:accountId", (req, res, next) => {
    var accountId = req.params.accountId;
    var ATM = 0.0;
    var TRANSPORT = 0.0;
    var TRANSFER = 0.0;
    var FB = 0.0
    var total = {};
    fetch("https://techtrek-api-gateway.cfapps.io/transactions/" + accountId + "?from=01-01-2018&to=02-01-2019", {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            json.forEach(v => {
                if (v['tag'] == "ATM") {
                    ATM += parseFloat(v['amount'])
                }
                if (v['tag'] == "TRANSPORT") {
                    TRANSPORT += parseFloat(v['amount'])
                }
                if (v['tag'] == "TRANSFER") {
                    TRANSFER += parseFloat(v['amount'])
                }
                if (v['tag'] == "F&B") {
                    FB += parseFloat(v['amount'])
                }
            });
            total = {
                'ATM': ATM.toFixed(2),
                'TRANSPORT': TRANSPORT.toFixed(2),
                'TRANSFER': TRANSFER.toFixed(2),
                'FB': FB.toFixed(2)
            }
            // console.log("Total Debit: " + debitTotal.toFixed(2))
            // console.log("Total Credit: " + creditTotal.toFixed(2))
            console.log(total)
            // console.log(json)
            res.json(total);
        })
});


//Accounts
//List Of Deposit Accounts
app.get("/customers/deposit/:customerId", (req, res, next) => {
    var customerId = req.params.customerId;
    fetch("https://techtrek-api-gateway.cfapps.io/accounts/deposit/" + customerId, {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Balance of a Deposit Account
app.get("/customers/dbalance/:accountId", (req, res, next) => {
    var accountId = req.params.accountId;
    fetch("https://techtrek-api-gateway.cfapps.io/accounts/deposit/" + accountId + "/balance?month=1&year=2018", {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//List Of Credit Accounts
app.get("/customers/credit/:customerId", (req, res, next) => {
    var customerId = req.params.customerId;
    fetch("https://techtrek-api-gateway.cfapps.io/accounts/credit/" + customerId, {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Balance of a Credit Account
app.get("/customers/cbalance/:accountId", (req, res, next) => {
    var accountId = req.params.accountId;
    fetch("https://techtrek-api-gateway.cfapps.io/accounts/credit/" + accountId + "/balance", {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Marketing
//List of Marketing Message
app.get("/marketing", (req, res, next) => {
    fetch("https://techtrek-api-gateway.cfapps.io/marketing/", {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Details of a Marketing Message
app.get("/marketing/:messageId", (req, res, next) => {
    var messageId = req.params.messageId;
    fetch("https://techtrek-api-gateway.cfapps.io/marketing/" + messageId, {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});

//Message
//Personal Messages
app.get("/message/:customerId", (req, res, next) => {
    var customerId = req.params.customerId;
    fetch("https://techtrek-api-gateway.cfapps.io/message/" + customerId, {
            method: 'GET',
            headers: headers
        })
        .then((res) => {
            //console.log(res)
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
});