import process from 'process';
import os from 'os';
import fs from 'node:fs';
import path from 'path';

const currentDir = path.dirname(new URL(import.meta.url).pathname);

process.stdin.setEncoding('utf8');
process.stdout.write(`Welcome ${os.userInfo().username} \n`);

process.stdin.on('data',(data) => {
    const input = data.trim();
    const fileName = input.slice(4).trim();

    const parts = input.split(' ');
    const firstOp = parts[1];
    const secondOp = parts[2];

    if (input.startsWith('add') && fileName.length > 0) {
        fs.writeFile(fileName, '', (err) => {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    }
    if (input.startsWith('rn') && firstOp.length > 0 && secondOp.length > 0) {
        fs.rename(firstOp, secondOp, function(err) {
            if (err) throw err;
            console.log('File Renamed.');
        });
    }

    if (input.startsWith('cp') && firstOp.length > 0 && secondOp.length > 0) {
        const destinationPath = `${secondOp}/${firstOp}`;

        fs.copyFile(firstOp, destinationPath, (err) => {
            if (err) throw err;
            console.log(`${firstOp} was copied to ${destinationPath}`);
        });
    }

    
    // if (input.startsWith('mv') && firstOp.length > 0 && secondOp.length > 0) {
    //     const currentPath = path.join(currentDir, firstOp);
    //     const newPath = path.join(currentDir,firstOp, secondOp);

    //     if (!fs.existsSync(currentPath)) {
    //         console.error("Error: Source file does not exist.");
    //         return;
    //     }

    //     const destinationDir = path.dirname(newPath);
    //     if (!fs.existsSync(destinationDir)) {
    //         try {
    //             fs.mkdirSync(destinationDir, { recursive: true });
    //         } catch (err) {
    //             console.error("Error occurred while creating the destination directory:", err);
    //             return;
    //         }
    //     }

    //     fs.rename(currentPath, newPath, (err) => {
    //         if (err) {
    //             console.error("Error occurred while moving the file:", err);
    //         } else {
    //             console.log("Successfully moved the file!");
    //         }
    //     });
    // }
    

    if(input.startsWith('rm') && firstOp.length > 0) {
        fs.unlink(firstOp, (err) => {
            if (err) {
              console.error("Error occurred while deleting the file:", err);
            } else {
              console.log("File deleted successfully");
            }
        });
    }

    
    
    switch (input) {
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




