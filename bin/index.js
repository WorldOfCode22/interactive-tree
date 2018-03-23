#! /usr/bin/env node

const commander = require('commander')
const fs = require('fs-extra')
const chalk = require('chalk')
const inquirer = require('inquirer')

commander
  .version('1.0.0')

commander.parse(process.argv)

let files = fs.readdirSync('.')
let question = {
  type: 'list',
  name: 'tree',
  message: 'Please Pick A File or Directory To Open',
  choices: files
}

inquirer.prompt([question]).then(
  answer => { console.log(answers)}
)

