const Ship = require('../src/Ship');
const Port = require('../src/Port');

describe('Ship constructor', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting point', () => {
        const port = new Port('Dublin');
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });
});

describe('setting sail method', () => {
    it('can set sail', () => {
        const port = new Port('Dublin');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });
});

describe('dock method', () => {
    it('can dock', () => {
        const port = new Port('Dublin');
        const ship = new Ship(port);

        const rosslare = new Port('Rosslare');

        ship.dock(rosslare);

        expect(ship.currentPort).toBe(rosslare);
    });
});

