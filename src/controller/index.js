import Fetcher from '../model/fetchTicket.js';
import Prompter from '../view/prompt.js';

/* 
    Starting point - continuously loops through prompt until exited.
    @Author: Dea Harjianto
*/

const fetch = new Fetcher();
const prompt = new Prompter();

prompt.printIntro();

let RUNNING = 1;

while(RUNNING) {
    var ans = prompt.menuChoice();
    var listTickets;
    switch(ans) {
        case '1':
            listTickets = await fetch.getAllTickets();
            if (Array.isArray(listTickets)) {
                prompt.printTickets(listTickets);
            } else {
                prompt.printError(listTickets);
            }
            break;
        case '2':
            var id = prompt.getTicketID();
            listTickets = await fetch.getSingleTicket(id);
            if (Array.isArray(listTickets)) {
                prompt.printTickets(listTickets);
            } else {
                prompt.printError(listTickets);
            }
            break;
        case '3':
            RUNNING = 0;
            prompt.printGoodbye();
            break;
        default:
            prompt.printError("Invalid command. Please try again.");
    }
}
