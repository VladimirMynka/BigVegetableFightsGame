import { ActivationFunction, HeroPerk } from "./HeroPerk";

export class OnEnemyPerk extends HeroPerk {
    protected override getActivator(): ActivationFunction {
        return this.getOnEnemyMethod();
    }
}