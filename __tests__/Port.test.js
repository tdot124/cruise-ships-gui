const Port = require('../src/Port');

describe('Port contructor', () => {
    it('returns an Object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        const port = new Port('Rosslare');
        expect(port.name).toBe('Rosslare');
    });

})