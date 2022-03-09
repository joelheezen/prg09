import { Missile } from "../projectiles/missile.js";
export class MissileWeapon {
    constructor() {
        this.coolDown = 7500;
    }
    shoot(tank) {
        return new Missile(tank);
    }
    getCoolDown() {
        return this.coolDown;
    }
}
