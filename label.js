require('dotenv').config();  // 환경 변수 로드

const githubLabelSync = require('github-label-sync');

githubLabelSync({
  accessToken: process.env.GITHUB_TOKEN,
  repo: 'seonyoungg/learn-tailwind-cli',
  labels: [],
  dryRun: true,
}).then(diff => {
  console.log(diff);
});