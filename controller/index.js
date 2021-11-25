import Fetcher from '../model/fetchTicket.js';
import Prompter from '../view/prompt.js';

const fetch = new Fetcher();
const prompt = new Prompter();

prompt.printIntro();

let RUNNING = 1;

while(RUNNING) {
    var ans = prompt.menuChoice();
    if (ans == 1) {
        const listTickets = await fetch.getAllTickets();
        if (Array.isArray(listTickets)) {
            prompt.printTickets(listTickets);
        } else {
            prompt.printError(listTickets);
        }
    } else if (ans == 2) {
        var id = prompt.getTicketID();
        const listTickets = await fetch.getSingleTicket(id);
        if (Array.isArray(listTickets)) {
            prompt.printTickets(listTickets);
        } else {
            prompt.printError(listTickets);
        }
    } else if (ans == 3) {
        RUNNING = 0;
        prompt.printGoodbye();
    }
}
