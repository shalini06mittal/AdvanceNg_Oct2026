import { AbstractControl } from "@angular/forms";

export function hasExclamationMark(input: AbstractControl){
    // console.log(input);
    const hasExclamation = input.value && input.value.indexOf('!') >= 0;
    // console.log(hasExclamation);
    
    return hasExclamation ? null : {needsExclamation: true};
}