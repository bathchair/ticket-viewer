import fetch from "node-fetch";
import headers from "fetch-headers";

const url = 'https://zccbathchair.zendesk.com/api/v2/tickets.json';
var token = "ZGVhQHVkZWwuZWR1OjZQYXJrV29vamluIQ==";
let header = new headers();
header.append('Authorization', 'Basic ' + token);

var fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener('click', function() {
    fetch(url, {
        headers: header
    })
        .then(response => response.json())
        .then(json => console.log(json));
});