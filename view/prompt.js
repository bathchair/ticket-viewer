import console from 'console';
import readline from 'readline-sync';

export default class Prompt {

    printIntro() {
        console.log("Welcome to the Zendesk Ticket Viewer CLI!\n");
    }

    menuChoice() {
        return readline.question("Press 1 to view all tickets.\n");
    }

}