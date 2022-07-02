const Itinerary = require('../src/Itinerary');

describe ('Itinerary', () => {
    it('returns an Object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const dublin = jest.fn();
        const rosslare = jest.fn();

        const itinerary = new Itinerary([dublin,rosslare]);

        expect(itinerary.ports).toEqual([dublin,rosslare]);
    });
})