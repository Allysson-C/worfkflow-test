const { exec } = require('child_process');

let command;

switch (process.env.ENVIRONMENT) {
  case 'develop':
    command = exec('ng build --aot');
    break;
  case 'deploy':
    command = exec('ng build --aot --configuration=deploy --output-path dist');
    break;
  case 'production':
    command = exec('ng build --aot --configuration=production --output-path dist');
    break;

  default:
    command = exec('ng build --aot --configuration=develop');
    break;
}

if (command !== undefined) {
    command.stdout.on('data', (data) => {
        console.log(data);
    });

    command.stderr.on('data', (data) => {
        console.error(data);
    });

    command.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
} else {
    console.error('process.env.ENV: ' + process.env.ENV);
}
