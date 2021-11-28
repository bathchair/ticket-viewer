import console from 'console';
import readline from 'readline-sync';
import Style from './styles.js';

/* 
    Prompter class which prints out to CLI.
    @Author: Dea Harjianto
*/

const style = new Style();

export default class Prompter {

    // Basic print statements (for style)
    printIntro() {
        console.log(style.greetings('Welcome to the Zendesk Ticket Viewer CLI!'));
    }

    printGoodbye() {
        console.log(style.greetings("\nGoodbye!\n"));
    }

    printError(text) {
        console.log(style.error(text));
    }

    /*
        Outlines the menu choices for the user.
        Parameters: none
        Returns: user choice (1, 2, 3, etc.)
    */
    menuChoice() {
        console.log("\n\t" + style.headers("MENU"));
        console.log("\t- 1 to view all tickets\n\t- 2 to view a ticket\n\t- 3 to quit\n");
        return readline.question(style.getInput());
    }

    /*
        Asks the user for the ticket ID to be retrieved.
        Parameters: none
        Returns: ticket ID inputted by the user
    */
    getTicketID() {
        console.log(style.greetings("\nWhat ticket ID would you like to view?"));
        return readline.question(style.getInput());
    }

    /*
        Determines of single or multiple tickets need to be printed.
        Parameters: list of Ticket objects
        Returns: none
    */
    printTickets(listTickets) {
        if (listTickets.length > 1) {
            this.pageThroughTickets(listTickets);
        } else {
            let ticket = listTickets[0];
            this.printSummary(ticket);
        }
    }

    /*
        Printing a single ticket's information
        Parameters: Ticket to be printed
        Returns: none
    */
    printSummary(ticket) {
        console.log("\n\t" + style.labels("ID:") + " " + ticket.getID());
        console.log("\t" + style.labels("Created Date:") + " " + ticket.getCreatedAt());
        console.log("\t" + style.labels("Subject:") + " " + ticket.getSubject());
        console.log("\t" + style.labels("Description:\n") + ticket.getDescription());
        console.log("\t" + style.labels("Priority:") + " " + ticket.getPriority());
        console.log("\t" + style.labels("Status:") + " " + ticket.getStatus());
    }

    /*
        Prints multiple ticket's information
        Parameters: list of Ticket objects
        Returns: none
    */
    pageThroughTickets(listTickets) {
        let i = 0;
        console.log("\n\t" + style.headers("ID\tCreated Date\t\tSubject\t\t\t\tStatus"));
        for (var ticket of listTickets) {
            console.log("\t" + ticket.getLine());
            i++;
            if (i % 20 == 0 && i < listTickets.length) {
                console.log(style.greetings("\nWould you like to continue? Press 1 for yes, 2 for no."));
                var con = readline.question(style.getInput());
                if (con == 1) {
                    console.log("\n\t" + style.headers("ID\tCreated Date\t\tSubject\t\t\t\tStatus"));
                    continue;
                } else {
                    break;
                }
            }
        }
    }

}