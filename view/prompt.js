import console from 'console';
import readline from 'readline-sync';
import Style from './styles.js';

const style = new Style();

export default class Prompter {

    printIntro() {
        console.log(style.greetings('Welcome to the Zendesk Ticket Viewer CLI!'));
    }

    printGoodbye() {
        console.log(style.greetings("\nGoodbye!\n"));
    }

    style(string) {
        return chalk.blueBright(string);
    }

    menuChoice() {
        console.log(style.headers("\n\tMENU"));
        console.log("\t- 1 to view all tickets\n\t- 2 to view a ticket\n\t- 3 to quit\n");
        return readline.question(style.getInput());
    }

    getTicketID() {
        console.log(style.greetings("\nWhat ticket ID would you like to view?"));
        return readline.question(style.getInput());
    }

    printTickets(listTickets) {
        if (listTickets.length > 1) {
            this.pageThroughTickets(listTickets);
        } else {
            let ticket = listTickets[0];
            this.printSummary(ticket);
        }
    }

    printSummary(ticket) {
        console.log(style.labels("\n\tID:") + " " + ticket.getID());
        console.log(style.labels("\tCreated Date:") + " " + ticket.getCreatedAt());
        console.log(style.labels("\tSubject:") + " " + ticket.getSubject());
        console.log(style.labels("\tDescription:\n") + ticket.getDescription());
        console.log(style.labels("\tPriority:") + " " + ticket.getPriority());
        console.log(style.labels("\tStatus:") + " " + ticket.getStatus());
    }

    pageThroughTickets(listTickets) {
        let i = 0;
        console.log(style.headers("\n\tID\tCreated Date\t\tSubject\t\t\t\tStatus"));
        for (var ticket of listTickets) {
            console.log("\t" + ticket.getLine());
            i++;
            if (i % 20 == 0 && i < listTickets.length) {
                console.log(style.greetings("\nWould you like to continue? Press 1 for yes, 2 for no."));
                var con = readline.question(style.getInput());
                if (con == 1) {
                    console.log(style.headers("\n\tID\tCreated Date\t\tSubject\t\t\t\tStatus"));
                    continue;
                } else {
                    break;
                }
            }
        }
    }

}