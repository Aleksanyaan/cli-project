import process from 'process';
import os from 'os';

process.stdin.setEncoding('utf8');
process.stdout.write(`Welcome ${os.userInfo().username} \n`);

process.stdin.on('readable',() => {
    let input = process.stdin.read();
    let data = input.trim();
    
    switch (data) {
        case '.exit':
            process.stdout.write(`Thank you ${os.userInfo().username}, goodbye!`);
            process.exit();
        case 'os --cpus':
            console.log(os.cpus());
            process.stdin.read();
            break;
        case 'os --homedir':
            console.log(os.homedir());
            process.stdin.read();
            break;
        case 'os --username':
            console.log(os.userInfo().username);
            process.stdin.read();
            break;
        case 'os --architecture':
            console.log(os.arch());
            process.stdin.read();
            break;
        case 'os --hostname':
            console.log(os.hostname());
            process.stdin.read();
            break;
        case 'os --platform':
            console.log(os.platform());
            process.stdin.read();
            break;
        case 'os --memory':
            console.log(os.totalmem());
            process.stdin.read();
            break;
        default:
            process.stdout.write('Invalid input \n');
            process.stdin.read();
            break;
    }    
});




