const SUBJLENGTH = 30;
const TABSPACING = 6;

export default class Ticket {

    constructor(ticket) {
        this.id = ticket.id;
        this.created_at = ticket.created_at;
        this.subject = ticket.subject;
        this.description = ticket.description;
        this.priority = ticket.priority;
        this.status = ticket.status;
    }

    truncateSubj(subj) {
        if (subj.length > SUBJLENGTH) {
            return subj.substring(0, SUBJLENGTH - 3) + "...";
        } else if (subj.length < SUBJLENGTH - TABSPACING) {
            return subj + "\t";
        } else {
            return subj;
        }
    }

    getLine() {
        return this.id + "\t" + this.created_at + "\t" + this.truncateSubj(this.subject) + "\t" + this.status
    }

    getSummary() {
        const idLine = "ID: " + this.id;
        const dateLine = "Created Date: " + this.created_at;
        const subjectLine = "Subject: " + this.subject;
        const descriptionLine = "Description:\n" + this.description;
        const priorityLine = "Priority: " + this.priority;
        const statusLine = "Status: " + this.status;
        return idLine + "\n" + dateLine + "\n" + subjectLine + "\n" + descriptionLine + "\n" + priorityLine + "\n" + statusLine;
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