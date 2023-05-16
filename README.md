# Image API

## Usage

### Install

https:

```git
git clone https://github.com/PatricCaviezel/ImageAPI.git
```

ssh:

```git
git clone git@github.com:PatricCaviezel/ImageAPI.git
```

### Dependencies

To use this program R, Ruby Node.JS and npm (usually comes preinstalled with Node.JS) must be installed.

Next steps:

```powershell
npm install
bundle install
```

After installing all modules and gems with the previous commands use this command to start the app (Make sure to be in the root folder /ImageAPI). For production:

```powershell
node .
```

and for development (recommended):

```powershell
nodemon .
```

## Description

This is a project I'm working on during work. It's purpose is to improve my R and node.js skills aswell as getting more into reporting. The project is a webpage that takes data inserted by the user via form or csv file and sends it to a R script with a node.js API. The r script makes a diagram out of the data provided by the user and sends it back to the user.

## To Do

- Take input from csv
- send back the image after creation
- make a better webpage
- validation for data sent by user
