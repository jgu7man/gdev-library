import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { Directive, Input } from "@angular/core";
import { Subscription } from 'rxjs';

@Directive({
    selector: '[compare]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: GdevCompareValidatorDirective,
        multi: true
    }]
})



export class GdevCompareValidatorDirective implements Validator {
    @Input('compare') equalValidator: string = '';

    validate(control: AbstractControl): ValidationErrors | null {
        const toCompare = control.root.get(this.equalValidator);
        if (toCompare) {
            const subscription: Subscription = toCompare.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return toCompare && toCompare.value !== control.value ? {'compare': true} : null;
    }
}
