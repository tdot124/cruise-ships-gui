const Ship = require('../src/ship');

describe('Ship constructor', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it('has a starting point', () => {
        const ship = new Ship('Dublin');
        expect(ship.startingPort).toBe('Dublin');
    })
})