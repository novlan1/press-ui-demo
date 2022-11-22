#!/bin/sh

set -x

# npm run build:h5
cd dist/build/h5 
git init

repoName=press-ui-demo
userName=novlan1
token=$1

git remote remove origin
git remote add origin https://${token}@github.com/${userName}/${repoName}

git add .
git commit -m"docs: 文档构建"
git push -u origin master --force