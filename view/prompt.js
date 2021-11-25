import console from 'console';
import readline from 'readline-sync';

export default class Prompter {

    printIntro() {
        console.log("Welcome to the Zendesk Ticket Viewer CLI!\n");
    }

    menuChoice() {
        return readline.question("Press 1 to view all tickets. Press 2 to view a ticket.\n");
    }

    getTicketID() {
        return readline.question("What ticket ID would you like to view?\n");
    }

    printTickets(listTickets) {
        if (listTickets.length > 1) {
            console.log("ID\tCreated Date\tSubject\tStatus")
            for (var ticket in listTickets) {
                console.log(ticket.getLine()); 
            }
        } else {
            let ticket = listTickets[0];
            console.log(ticket.getSummary());
        }
    }

}