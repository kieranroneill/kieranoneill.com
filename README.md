<h1 align="center">
  Kieran O'Neill (the website)
</h1>

<p align="center">
  A website about me (Kieran O'Neill).
</p>

<p align="center">
  <a href="https://github.com/kieranroneill/kieranroneill.com/releases/latest">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/kieranroneill/kieranroneill.com?&logo=github">
  </a>
  <a href="https://github.com/kieranroneill/kieranroneill.com/releases/latest">
    <img alt="GitHub Release Date - Published_At" src="https://img.shields.io/github/release-date/kieranroneill/kieranroneill.com?logo=github">
  </a>
</p>

<p align="center">
  <a href="https://github.com/kieranroneill/kieranroneill.com/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/kieranroneill/kieranroneill.com">
  </a>
</p>

#### Table of contents

* [Development](#-development)
    * [Prerequisites](#prerequisites)
    * [Setting up the dev environment](#setting-up-the-dev-environment)
    * [Running locally](#2-running-locally)

## 🛠️ Development

### Prerequisites

* Install [Nodejs v16.15.0+][nodejs]
* Install [Yarn v1.22.5+][yarn]

<sup>[Back to top ^][table-of-contents]</sup>

### Setting up the dev environment

1. Before we install the dependencies, we need to get a Personal Access Token (PAT) on GitHub. See [here][create-pat-on-github] on instructions on how to create one.

2. Create a new file at the root of this project, replacing `GITHUB_PAT` with the PAT you created in the previous step:
```shell
cat > .npmrc << EOF
//npm.pkg.github.com/:_authToken=GITHUB_PAT
@kieranroneill:registry=https://npm.pkg.github.com
EOF
```

3. Install dependencies:
```shell script
yarn install
```

### 2. Running locally

1. Start the web server:
```shell script
yarn start
```

2. Navigate to [http://localhost:1337](http://localhost:1337).

<!-- Links -->
[create-pat-on-github]:https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
[nodejs]: https://nodejs.org/en/
[table-of-contents]: #table-of-contents
[yarn]: https://yarnpkg.com/
