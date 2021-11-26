const SUBJLENGTH = 30;
const TABSPACING = 6;

/* 
    Ticket class.
    @Author: Dea Harjianto
*/

export default class Ticket {

    constructor(ticket) {
        this.id = ticket.id;
        this.created_at = ticket.created_at;
        this.subject = ticket.subject;
        this.description = ticket.description;
        this.priority = ticket.priority;
        this.status = ticket.status;
    }

    /*
        Truncates the subject line to fit a specified with
        Parameters: subject string to be truncated
        Returns: truncated (or ignored) string
    */
    truncateSubj(subj) {
        if (subj.length > SUBJLENGTH) {
            return subj.substring(0, SUBJLENGTH - 3) + "...";
        } else if (subj.length < SUBJLENGTH - TABSPACING) {
            return subj + "\t";
        } else {
            return subj;
        }
    }

    /*
        One line summary of ticket.
        Parameters: none.
        Returns: string representing one line summary
    */
    getLine() {
        return this.id + "\t" + this.created_at + "\t" + this.truncateSubj(this.subject) + "\t" + this.status
    }
    
    getID() {
        return this.id;
    }

    getCreatedAt() {
        return this,this.created_at;
    }

    getSubject() {
        return this.subject;
    }

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getStatus() {
        return this.status;
    }

}