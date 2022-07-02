const Port = require('../src/Port');

describe('Port contructor', () => {
    describe('with common port set up', () => {

        let port;
        let ship;

        beforeEach(() => {
            port = new Port('Rosslare');
            ship = {};
        });

        it('returns an Object', () => {
            expect(port).toBeInstanceOf(Object);
        });
    
        it('has a name', () => {
            expect(port.name).toBe('Rosslare');
        });
    
        it('can add a ship', () => {
                
            port.addShip(ship);
    
            expect(port.ships).toContain(ship);
        });

    });

    it('can remove a ship', () => {
        const port = new Port('Rosslare');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic])
    });

});