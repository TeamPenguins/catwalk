# Catwalk

> Project description


## Table of Contents

1. [Usage](#Usage)
1. [Module-Diagrams](#Module-Diagrams)
1. [Requirements](#requirements)
1. [git-workflow](#git-workflow)
1. [Development](#development)
1. [Installing-Dependencies](#Installing-Dependencies)

## Usage

> Clone down the pre-production branch, open that branch in code and do the following:

To create a development build:
```sh
npm run build-prod
```

To run in your browser:
```sh
npm start
```

## Module Diagrams

> High-level diagrams that breakdown each module



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## git-workflow

1. In your terminal, navigate to the root directory of your project
2. Switch to the master branch:
```sh
git checkout master
```
3. Pull most recent commits:
```sh
git fetch origin
```
4. Reset the repo’s local copy of master to match the latest version:
```sh
git reset --hard origin/master
```
5. Create a new branch with a name that is descriptive of the task/ticket you are completing:
```sh
git checkout -b new-feature
```
6. Use the usual commands to check, stage, and make commits:
```sh
git status git add git commit
```
7. Push your commits to a remote tracking branch to have a backup:
```sh
git push -u origin new-feature
```
8. Push the feature to the central repository when finished:
```sh
git push --set-upstream origin new-feature
```
9. Submit a pull request for this feature branch
10. A teammate will review your PR. If changes need to be made, repeat steps 6, 7, & 8
11. Teammate will then approve your PR and merge the changes to master
12. SUCCESS!

## Development

From within the root directory:

To create a development build:
```sh
npm build-prod
```

To run test scripts
```sh
npm start:test
```


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

