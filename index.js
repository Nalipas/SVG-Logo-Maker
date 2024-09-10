const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

function writeToFile(fileName, answers) {
    let svgString = '';
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += `${answers.shapeSelection}`;

    let shapeSelection;
    if (answers.shapeSelection === 'Triangle') {
        shapeSelection = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
    } else if (answers.shapeSelection === 'Circle') {
        shapeSelection = new Circle();
        svgString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`;
    } else if (answers.shapeSelection === 'Square') {
        shapeSelection = new Square();
        svgString += `<rect x="70" y="40" width="160" height="160" fill="${answers.shapeColor}" />`;
    }

    svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(`./examples/${answers.text}logo.svg`, svgString, (err) => err ? console.log(err) : console.log('File created!'));
}

function appStart() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters:',
            validate: (textInput) => {
                if (textInput.length > 3 || !textInput) {
                    console.log('Text must be up to 3 characters, and cannot be empty!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color:',
            default: 'white'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color:',
            default: 'blue'
        },
        {
            type: 'list',
            name: 'shapeSelection',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Circle', 'Square']    
        }
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            throw new Error('Text must be up to 3 characters, and cannot be empty!');
        }
        else {
            writeToFile("./examples/${answers.text}logo.svg", answers);
        }
    });
}

appStart();