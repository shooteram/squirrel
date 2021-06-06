import { Ship } from "./ship.js";
import { randomCoordinates } from "./utils.js";

(async () => {
    console.log('hello');

    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.font = '12px sans-serif';
    context.textAlign = 'center';

    (new Ship(context, true, 'hello', 0, 0)).display();

    let ships: Ship[] = [];
    for (let i = 0; i < 10; i++) {
        let coor = randomCoordinates(),
            monster: boolean = Math.random() < .6,
            ship = new Ship(context, false, `${monster ? 'npc' : 'user'}-${i}`, coor.x, coor.y, 0, !monster);

        ships.push(ship);
        ship.display();
    }

    let focused: Ship | undefined;

    canvas.onmousemove = e => {
        ships.map(ship => {
            if (
                e.x >= ship.x - ship.hitbox &&
                e.y >= ship.y - ship.hitbox &&
                e.x <= ship.x + ship.hitbox &&
                e.y <= ship.y + ship.hitbox
            ) {
                if (ship !== focused) {
                    focused = ship;
                    ship.toggleFocus();
                }
            } else if (ship === focused) {
                focused = undefined;
                ship.toggleFocus();
            }
        });
    }
})();
