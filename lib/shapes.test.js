const { Triangle, Circle, Square } = require('./shapes');

const testTriangle = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">TRI</text>
</svg>
`;

const testCircle = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">CIR</text>
</svg>
`;

const testSquare = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="40" width="160" height="160" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SQU</text>
</svg>
`;


describe('Shape', () => {
    describe('Triangle', () => {
        it('should be equal to testTriangle', () => {
            expect(new Triangle ('svg', 'white', 'blue').render()).toEqual(testTriangle);
        });
    });
    
    describe('Circle', () => {
        it('should be equal to testCircle', () => {
            expect(new Circle ('svg', 'white', 'blue').render()).toEqual(testCircle);
        });
    });
    
    describe('Square', () => {
        it('should be equal to testSquare', () => {
            expect(new Square ('svg', 'white', 'blue').render()).toEqual(testSquare);
        });
    });
});
