# GitHub Instructions

Repository:
https://github.com/nephiliim/cb-world-foundation

## First Push Commands

Open the project folder in VS Code.

Open terminal:

Terminal > New Terminal

Run:

git init
git add .
git commit -m "Initial commit - CB World Foundation platform"
git branch -M main
git remote add origin https://github.com/nephiliim/cb-world-foundation.git
git push -u origin main

## If origin already exists

git remote set-url origin https://github.com/nephiliim/cb-world-foundation.git
git push -u origin main

## Recommended Branches

main = live/stable
develop = active work
staging = test before live
