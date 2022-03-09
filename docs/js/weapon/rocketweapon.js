import { Rocket } from "../projectiles/rocket.js";
export class RocketWeapon {
    constructor() {
        this.coolDown = 1000;
    }
    shoot(tank) {
        return new Rocket(tank);
    }
    getCoolDown() {
        return this.coolDown;
    }
}
