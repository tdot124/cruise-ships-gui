const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe ('Itinerary', () => {
    it('returns an Object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const dublin = new Port('Dublin');
        const rosslare = new Port('Rosslare');

        const itinerary = new Itinerary([dublin,rosslare]);

        expect(itinerary.ports).toEqual([dublin,rosslare]);
    });
})