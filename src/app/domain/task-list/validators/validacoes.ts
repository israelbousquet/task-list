import { FormControl } from '@angular/forms';

export class Validacoes {
  static validateInputLength(control: FormControl) {
    const inputLength = control.value ? control.value.length : 0;
    if (inputLength > 75) {
      return { inputLengthInvalid: true };
    }
    return null;
  }
}
