import fetch from 'node-fetch';
import headers from 'fetch-headers';
import readline from 'readline-sync';

const URL = 'https://zccbathchair.zendesk.com/api/v2/tickets.json';
const TOKEN = "ZGVhQHVkZWwuZWR1OjZQYXJrV29vamluIQ==";

const HEADER = new headers();
HEADER.append('Authorization', 'Basic ' + TOKEN);

//var ans = readline.question("Press 1 to print tickets.\n");

export default class Fetcher {

    printAllTickets() {
        fetch(URL, {
            headers: HEADER
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }

}