import { ActivationFunction, HeroPerk } from "./HeroPerk";

export class OnHeroPerk extends HeroPerk {
    public override getActivator(): ActivationFunction {
        return this.getOnHeroMethod();
    }
}