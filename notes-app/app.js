const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')
yargs.version('1.1.0')
//Create add command
yargs.command({
    command : 'add',
    describe :'Add a new note',
    builder:{
        title:{
            descirbe : 'Note title',
            demandOption : true,
            type: 'String'
        },
        body:{
            descirbe : 'Note body',
            demandOption : true,
            type: 'String' 
        }
    },
    handler : function (argv){
      notes.addNote(argv.title,argv.body)
    }
}).argv
//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            descirbe : 'Remove title',
            demandOption : true,
            type: 'String'
        }
    },
    handler : function (argv){
        notes.removeNote(argv.title)
    }
}).argv
//Create list command
yargs.command({
    command: 'list',
    describe:'Listing all notes',
    handler : function (){
        notes.listNotes()
    }
}).argv
//Create read command
yargs.command({
    command:'read',
    describe:'Reading a new note',
    builder:{
        title:{
            descirbe : 'Remove title',
            demandOption : true,
            type: 'String'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
}).argv
