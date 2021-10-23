How release works here?

Code and build assets are stored in Github Public repo. Js Deliver is being used to provide assets url to the page. As soon as new changes are pushed to the master branch, Github Actions would run and deploys contents of html directory to Firebase free plan. (Firebase free plan providing 10gb/month bandwidth).

Step 1:
Make changes in the desired files and test everything locally first.

Step 2:
Once changes are done, upgrade the version in package.json.

Step3:
run `npm run build` -- this will create new assets files in dist folder. Build assets are part of the repo
as well and need to be committed and pushed to the repo.

Step 3:
run `node release.js` from the root of directory. -- this will push the code in Github repo.

Step 4:
Once code is pushed and Github's deploy action finishes, js deliver will propagate the new assets in the CDN and updated code is now available in neevindore.in