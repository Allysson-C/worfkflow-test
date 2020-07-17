const { exec } = require('child_process');

let command;

switch (process.env.ENVIRONMENT) {
  case 'develop':
    console.log(process.env.ENVIRONMENT);
    command = exec('ng build --aot --output-path dist');
    break;
  case 'deploy':
<<<<<<< HEAD
    console.log('entrou')
=======
>>>>>>> deploy
    console.log(process.env.ENVIRONMENT);
    command = exec('ng build --aot --configuration=deploy --output-path dist');
    break;
  case 'production':
    console.log(process.env.ENVIRONMENT);
    command = exec('ng build --aot --configuration=production --output-path dist');
    break;

  default:
    console.log(process.env.ENVIRONMENT);
<<<<<<< HEAD
    command = exec('ng build --aot  --output-path dist');
=======
    command = exec('ng build --aot --configuration=develop --output-path dist');
>>>>>>> deploy
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
