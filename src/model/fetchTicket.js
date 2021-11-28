import fetch from 'node-fetch';
import headers from 'fetch-headers';
import Ticket from '../objs/Ticket.js';
import dotenv from 'dotenv';

/* 
    Fetcher class which obtains API data and handles any connection errors.
    @Author: Dea Harjianto
*/

dotenv.config();
const URL = 'https://zccbathchair.zendesk.com/api/v2/tickets.json';
const TOKEN = process.env.TOKEN;

const HEADER = new headers();
HEADER.append('Authorization', 'Bearer ' + TOKEN);

export default class Fetcher {

    /*
        Fetch request
        Parameters: url pointing to JSON to be retrieved
        Returns: JSON consisting of tickets OR error
    */
    async fetchRequest(url) {
        return fetch(url, { headers: HEADER })
            .then(response => response.json())
    }

    /*
        Converts the JSON to a list
        Parameters: the list of JSON items
        Returns: a list of new Ticket items
    */
    jsonToList(list) {
        return list.map(obj => {
            return new Ticket(obj);
        });
    }

    /*
        Utilizes global URL to get all tickets.
        Parameters: none
        Returns: the list of Ticket items
    */
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

    /*
        Utilizes specified URL to get ticket.
        Parameters: ID number
        Returns: the list of Ticket item(s)
    */
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

    /*
        Converts error JSON to string
        Parameters: ticket (with error)
        Returns: string with error message
    */
    errorHandle(ticket) {
        var errorText = ticket.error;
        return "ERROR: " + errorText;
    }

}