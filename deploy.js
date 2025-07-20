// deploy.js
const ghpages = require('gh-pages');

// deploy the dist folder to the gh-pages branch
ghpages.publish('dist', function (err) {
  if (err) {
    console.error('❌ Deployment failed:', err);
  } else {
    console.log('✅ Deployed to GitHub Pages!');
  }
});
