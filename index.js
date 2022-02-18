$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log("Your IP is: " + data.ip);
        postDataToWebhook(data.ip);
    });
});

function postDataToWebhook(data) {

var ip = data;
var storedip = localStorage.getItem("UserIP")

var webHookUrl = "https://discord.com/api/webhooks/943441839447498803/RQ1-4e6Tlfs1CDhu7WDMMboSHdnseNIZUtQqfxDdjt-PJNUmTrthYlwVoC8Yw73THqPb";


var oReq = new XMLHttpRequest();
var myJSONStr = { "content": "New User IP Address: " + ip, "username": "New IP" };


if (ip == storedip) {
    console.log("Same User")
} else {
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", webHookUrl, true);
    oReq.setRequestHeader('Content-Type', 'application/json');
    oReq.send(JSON.stringify(myJSONStr));
    localStorage.setItem("UserIP",ip);
}


}

function reqListener() {
console.log(this.responseText);
}