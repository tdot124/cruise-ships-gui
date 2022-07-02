const Port = require('../src/Port');

describe('Port contructor', () => {
    it('returns an Object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        const port = new Port('Rosslare');
        expect(port.name).toBe('Rosslare');
    });

    it('can add a ship', () => {
        const port = new Port('Rosslare');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const port = new Port('Rosslare');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic])
    })

})