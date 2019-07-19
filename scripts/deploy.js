'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const awsProfile = process.env.AWS_PROFILE || 'default';

if (!process.env.AWS_BUCKET_NAME) {
    console.log('AWS_BUCKET_NAME environment variable not set. This is a requirement.');
    process.exit(1);
}

async function run() {
    const cmd = `aws s3 sync build/ s3://${process.env.AWS_BUCKET_NAME} --profile ${awsProfile}`;
    const { stdout, stderr } = await exec(cmd);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
}
run();
