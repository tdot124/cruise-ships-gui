const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship constructor', () => {
    describe('with ports and itinerary setup', () => {
        let dublin;
        let rosslare;
        let itinerary;
        let ship;

        beforeEach(() => {
            dublin = new Port('Dublin');
            rosslare = new Port('Rosslare')
            itinerary = new Itinerary([dublin,rosslare]);
            ship = new Ship(itinerary);
        });

        it('returns an object', () => {
            expect(ship).toBeInstanceOf(Object);
        });
    
        it('has a starting port + null previous port', () => {
            expect(ship.currentPort).toBe(dublin);
            expect(ship.previousPort).toBe(null);
        });
    
        it('gets added to port on instantiation', () => {
            expect(dublin.ships).toContain(ship);
        });        
        
        it('can set sail + sets previous port', () => {
             
            ship.setSail();
            
            expect(ship.currentPort).toBeFalsy();
            expect(dublin.ships).not.toContain(ship);
            expect(ship.previousPort).toBe(dublin);
        });
        
        it('can\'t sail further than it\'s itnerary', () => {
                        
            ship.setSail();
            ship.dock();
            
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
            
        });  
        
        it('can dock at different ports', () => {
                        
            ship.setSail();
            ship.dock();
            
            expect(ship.currentPort).toBe(rosslare);
            expect(rosslare.ships).toContain(ship);
        });
    });  
});
    
    
    