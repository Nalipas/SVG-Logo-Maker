const fs = require('fs');

class Shape {

    constructor(text, textColor, shapeColor) {
        this.text = text.toUpperCase();
        this.textColor = textColor; 
        this.shapeSelection = 'polygon';
        this.shapeColor = shapeColor;
    }

    generateShape() {

    }

    generateText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }   

    render() {
        if (this.text.length > 3 || !this.text) {
            throw new Error('Text must be up to 3 characters, and cannot be empty!');
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.generateShape()}${this.generateText()}</svg>`;
    }

    writeToFile(fileName, data) {
        fs.writeFile(`./examples/${this.text}logo.svg`, this.render(), (err) => err ? console.log(err) : console.log('File created!'));
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeSelection = 'Triangle';
    }
    generateShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeSelection = 'Square';
    }
    generateShape() {
        return `<rect x="70" y="40" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeSelection = 'Circle';
    }
    generateShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }   
}

module.exports = { Triangle, Square, Circle };