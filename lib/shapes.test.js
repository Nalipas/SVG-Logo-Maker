const { Triangle, Circle, Square } = require('./shapes');

describe('Test Triangle', () => {
    test('should render a triangle with a blue fill color', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Test Circle', () => {
    test('should render a circle with a blue fill color', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Test Square', () => {
    test('should render a square with a blue fill color', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="70" y="40" width="160" height="160" fill="blue" />');
    });
});
