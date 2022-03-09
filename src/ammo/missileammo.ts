import { GameObject }       from "../gameobject.js";
import { Tank } from "../tank.js";
import { Vector }           from "../vector.js";
import { MissileWeapon } from "../weapon/missileweapon.js";
import { Ammunition }       from "./ammunition.js";

export class MissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-missile", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.changeProjectile(new MissileWeapon)
        }
    }
}