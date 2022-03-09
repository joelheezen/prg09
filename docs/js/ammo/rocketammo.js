import { Tank } from "../tank.js";
import { RocketWeapon } from "../weapon/rocketweapon.js";
import { Ammunition } from "./ammunition.js";
export class RocketAmmo extends Ammunition {
    constructor(position) {
        super("ammo-rocket", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.changeProjectile(new RocketWeapon);
        }
    }
}
