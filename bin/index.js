#! /usr/bin/env node

const commander = require('commander')
const fs = require('fs-extra')
const chalk = require('chalk')
const inquirer = require('inquirer')

commander
  .version('1.0.0')

commander.parse(process.argv)

let fileStr = '.'

function getQuestion () {
  console.log('fileStr is: ' + fileStr)
  let files = fs.readdirSync(fileStr)
  let questions = {
     type: 'list',
     name: 'tree',
     message: 'Please Pick A File or Directory To Open',
     choices: files
   }
  return questions
}

function res () {
  inquirer.prompt([getQuestion()]).then(
    (answer) => {
      let stat =  fs.statSync(fileStr + `/${answer.tree}`)
       if(stat.isDirectory()){
         fileStr += `/${answer.tree}`
	 res()
     }
   },
    err => { throw new Error(err) }
  )
  .catch(
    err => { console.log(chalk.red(`An Error Occured ${err}`)) }
  )
}

res()
