import Ticket from "../src/objs/Ticket";

const temp = {
    id: 1,
    created_at: '112300',
    subject: 'lorem ipsum',
    description: 'abc123',
    priority: 'high',
    status: 'open'
}
var tempTicket = new Ticket(temp);

const temp2 = {
    id: 1,
    created_at: '112300',
    subject: 'abcdefghijklmnopqrstuvwxyzabcde',
    description: 'abc123',
    priority: 'high',
    status: 'open'
}
var tempTicket2 = new Ticket(temp2);

const temp3 = {
    id: 1,
    created_at: '112300',
    subject: 'abcdefghijklmnopqrstuvwxyzab',
    description: 'abc123',
    priority: 'high',
    status: 'open'
}
var tempTicket3 = new Ticket(temp3);

describe("Ticket.js", () => {
    it('Keep the same values for the constructor as in the JSON', () => {

        expect(tempTicket).toEqual({
            id: 1,
            created_at: '112300',
            subject: 'lorem ipsum',
            description: 'abc123',
            priority: 'high',
            status: 'open'
        })
    })

    it('Keep formatting for the line (also 2nd condition of truncateSubj)', () => {
        expect(tempTicket.getLine()).toEqual("1\t112300\tlorem ipsum\t\topen");
    })

    it('Checks getID', () => {
        expect(tempTicket.getID()).toEqual(1);
    })
    
    it('Checks getCreatedAt', () => {
        expect(tempTicket.getCreatedAt()).toEqual('112300');
    })

    it('Checks getSubject', () => {
        expect(tempTicket.getSubject()).toEqual('lorem ipsum');
    })

    it('Checks getDescription', () => {
        expect(tempTicket.getDescription()).toEqual('abc123');
    })

    it('Checks getPriority', () => {
        expect(tempTicket.getPriority()).toEqual('high');
    })

    it('Checks getStatus', () => {
        expect(tempTicket.getStatus()).toEqual('open');
    })

    it('1st condition of truncateSubj', () => {
        expect(tempTicket2.truncateSubj(tempTicket2.getSubject())).toEqual('abcdefghijklmnopqrstuvwxyza...')
    })

    it('3rd condition of truncateSubj', () => {
        expect(tempTicket3.truncateSubj(tempTicket3.getSubject())).toEqual('abcdefghijklmnopqrstuvwxyzab')
    })
})