# Catwalk

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [git-workflow](#git-workflow)
1. [Development](#development)
1. [Installing-Dependencies](#Installing-Dependencies)

## Usage

> Some usage instructions

To create a production build:
```sh
npm build-prod
```

To run hot module reloading mode:
```sh
npm start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## git-workflow

1. In your terminal, navigate to the root directory of your project
1. Switch to the master branch:
```sh
git checkout master
```
1. Pull most recent commits:
```sh
git fetch origin
```
1. Reset the repo’s local copy of master to match the latest version:
```sh
git reset --hard origin/master
```
1. Create a new branch with a name that is descriptive of the task/ticket you are completing:
```sh
git checkout -b new-feature
```
1. Use the usual commands to check, stage, and make commits:
```sh
git status git add git commit
```
1. Push your commits to a remote tracking branch to have a backup:
```sh
git push -u origin new-feature
```
1. Push the feature to the central repository when finished:
```sh
git push --set-upstream origin new-feature
```
1. Submit a pull request for this feature branch
1. A teammate will review your PR. If changes need to be made, repeat steps 6, 7, & 8
1. Teammate will then approve your PR and merge the changes to master
1. SUCCESS!

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

