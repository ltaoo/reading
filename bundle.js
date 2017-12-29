const exec = require('child_process').exec;
const {
    GITHUB_ACCESS_TOKEN,
    ZENHUB_ACCESS_TOKEN,
    ZENHUB_ACCESS_TOKEN_V4,
} = require('./token.json');

const ls = exec(`wt create index --bundle --secret GITHUB_ACCESS_TOKEN=${GITHUB_ACCESS_TOKEN} --secret ZENHUB_ACCESS_TOKEN=${ZENHUB_ACCESS_TOKEN} --secret ZENHUB_ACCESS_TOKEN_V4=${ZENHUB_ACCESS_TOKEN_V4}`, function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
    }
    console.log('Child Process STDOUT: ' + stdout);
});