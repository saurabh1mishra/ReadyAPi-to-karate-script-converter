const path = require('path');
const parseProject = require('./karate_converter.js');

const [, , ...args] = process.argv;

if (args.length > 0 && args[0] == 'help') {
    console.log(`Usage:  ./cli.js <path to project> <test suite name>
where, <path to project> is the path to the composite project (flex-event-snapshot-service in your example) and
<test suite name> is the name of the SoapUI service (this must be a folder under <path to project>) / `);
    return;
}

if (args.length == 2) {
    const projectPath = args[0];
    const suiteName = args[1];
    const fullPath = path.join('../api-scripts/scripts', projectPath);
    parseProject(fullPath, suiteName);
}
