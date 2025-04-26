#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:YiTsenHo/my-portfolio.git main:gh-pages

cd -
