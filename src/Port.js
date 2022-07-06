(function exportPort() {

class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    };

    addShip(ship) {
        this.ships.push(ship);
    };

    removeShip(ship) {
        const ships = this.ships;
        const removeShipIndex = ships.indexOf(ship);

        this.ships.splice(removeShipIndex,1);
    };
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
} else {
    window.Port = Port;
}

}());

