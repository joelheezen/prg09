import { Tank } from "../tank.js";
import { BulletWeapon } from "../weapon/bulletweapon.js";
import { Ammunition } from "./ammunition.js";
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.changeProjectile(new BulletWeapon);
        }
    }
}
