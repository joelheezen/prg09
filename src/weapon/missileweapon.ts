import { Missile } from "../projectiles/missile.js";
import { Projectile } from "../projectiles/projectile"
import { Tank } from "../tank"

export class MissileWeapon {

    public coolDown : number = 7500;

    public shoot(tank : Tank): Projectile {
       return new Missile(tank)
    }

    public getCoolDown(): number {
        return this.coolDown
    }

}