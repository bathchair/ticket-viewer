import Fetcher from '../model/fetchTicket.js';
import Prompter from '../view/prompt.js';

const fetcher = new Fetcher();
const prompt = new Prompter();

prompt.printIntro();
var ans = prompt.menuChoice();
if (ans == 1) {
    fetcher.printAllTickets();
}
