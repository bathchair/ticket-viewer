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
            this.pageThroughTickets(listTickets);
        } else {
            let ticket = listTickets[0];
            console.log(ticket.getSummary());
        }
    }

    pageThroughTickets(listTickets) {
        let i = 0;
        for (var ticket of listTickets) {
            console.log(ticket.getLine());
            i++;
            if (i % 20 == 0) {
                var con = readline.question("Would you like to continue? Press 1 for yes, 2 for no.\n");
                if (con == 1) {
                    continue;
                } else {
                    break;
                }
            }
        }
    }

}