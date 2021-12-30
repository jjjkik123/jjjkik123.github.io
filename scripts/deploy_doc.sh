set -e
shopt -s extglob

TEMP_PATH="docs/.temp"

# build docs
npm run docs:build

# gh-pages
gh-pages -d docs-dist

# prepare deploy
mkdir $TEMP_PATH
cd $TEMP_PATH
git init
git pull git@github.com:jjjkik123/jjjkik123.github.io.git gh-pages
cp -r ../../docs-dist/* .

# commit and push changes
git add -A
git commit --am -m "build: deploy documentation"
git push -f git@github.com:jjjkik123/jjjkik123.github.io.git master:gh-pages

# clean
cd -
rm -rf $TEMP_PATH