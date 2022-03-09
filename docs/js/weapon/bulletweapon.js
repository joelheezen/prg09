import { Bullet } from "../projectiles/bullet.js";
export class BulletWeapon {
    constructor() {
        this.coolDown = 500;
    }
    shoot(tank) {
        return new Bullet(tank);
    }
    getCoolDown() {
        return this.coolDown;
    }
}
