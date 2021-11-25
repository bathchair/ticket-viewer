import Fetcher from '../model/fetchTicket.js';
import Prompter from '../view/prompt.js';

const fetch = new Fetcher();
const prompt = new Prompter();

prompt.printIntro();
var ans = prompt.menuChoice();
if (ans == 1) {
    const listTickets = await fetch.getAllTickets();
    prompt.printTickets(listTickets);
} else if (ans == 2) {
    var id = prompt.getTicketID();
    const listTickets = await fetch.getSingleTicket(id);
    prompt.printTickets(listTickets);
}
