import fetch from 'node-fetch';
import headers from 'fetch-headers';
import Ticket from '../objs/Ticket.js';
import dotenv from 'dotenv';
dotenv.config();

const URL = 'https://zccbathchair.zendesk.com/api/v2/tickets.json';
const TOKEN = process.env.TOKEN;

const HEADER = new headers();
HEADER.append('Authorization', 'Bearer ' + TOKEN);

export default class Fetcher {

    async fetchRequest(url) {
        return fetch(url, { headers: HEADER })
            .then(response => response.json())
    }

    jsonToList(list) {
        return list.map(obj => {
            return new Ticket(obj);
        });
    }

    async getAllTickets() {
        var url = URL;
        const jsonTickets = await this.fetchRequest(url);
        if (jsonTickets.error) {
            return this.errorHandle(jsonTickets);
        } else {
            var listTickets = this.jsonToList(jsonTickets.tickets);
            return listTickets;
        }
    }

    async getSingleTicket(id) {
        var url = `https://zccbathchair.zendesk.com/api/v2/tickets/${id}.json`;
        const jsonTicket = await this.fetchRequest(url);
        if(jsonTicket.error) {
            return this.errorHandle(jsonTicket);
        } else {
            var listTickets = [];
            listTickets.push(new Ticket(jsonTicket.ticket));
            return listTickets;
        }
    }

    errorHandle(ticket) {
        var errorText = ticket.error;
        return "\tERROR: " + errorText;
    }

}