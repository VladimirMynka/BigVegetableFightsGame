import { HeroPerk } from "./HeroPerk";
import { Hero } from "../Fighters/Hero/Hero";

export class OnHeroPerk extends HeroPerk {
    public override getOnclickType(): Function {
        return (<Hero>this.owner).getOnHeroMethod();
    }
}