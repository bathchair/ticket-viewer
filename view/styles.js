import chalk from 'chalk';

export default class Style {

    greetings(string) {
        return chalk.blueBright(string);
    }

    getInput() {
        return chalk.bgWhite(chalk.black("Input:")) + " ";
    }

    headers(string) {
        return chalk.underline(chalk.yellowBright(string));
    }
    
    labels(string) {
        return chalk.underline(chalk.cyanBright(string));
    }

    error(string) {
        return chalk.underline(chalk.redBright(string));
    }

}