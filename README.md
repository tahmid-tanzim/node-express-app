# Node.js & Express.js App
Building a Website with Node.js and Express.js
### 1. Installing Node.js via [nvm (Node Version Manager)](https://github.com/creationix/nvm) on Ubuntu Linux.
##### 1.1. Installing NVM
```
sudo apt-get install git curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
or Wget:
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
##### 1.2. Append the NVM path in ~/.bashrc
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```
##### 1.3. Load ~/.bashrc and Check if NVM successfully installed.
```
source ~/.bashrc
nvm
```
##### 1.4. Installing Node.js and Set default version
```
nvm install 0.12.7
nvm alias default 0.12.7
node --version
nvm list
```
### 2. Initializing Node.js projects to generate **package.json**
```
mkdir node-express-app
cd node-express-app
npm help
npm init
```
### 3. Installing [Express.js](http://expressjs.com)
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
```
npm install -g express
express --version
npm install express --save
```
- More Express [APi reference](http://expressjs.com/en/4x/api.html)
