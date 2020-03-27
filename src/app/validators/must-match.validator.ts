import { AbstractControl, FormGroup } from '@angular/forms';
// ------------------------------------------------
// Validators
// ------------------------------------------------
export function machinesSerialNumberValidator(control: AbstractControl) {

  // Check DEAL code 3 digs
  if (control.value && control.value.indexOf('/') > -1 ) {
    const slashIndex = control.value.indexOf('/');

    // Check slash index
    if (slashIndex > 3) {
      return {
        machineSerialNumber: {
          message: 'Dial country code cannot be more 3 digs',
          actualValue: control.value
        }
      };
    }

    // Check deal number
    if (slashIndex < 1) {
      return {
        machineSerialNumber: {
          message: 'Incorrect dial number code',
          actualValue: control.value
        }
      };
    }

    // Check contain '-'
    if (control.value.length >= (control.value.indexOf('/') + 6)) {
      const machineNumberSymbol = control.value.substring(control.value.indexOf('/') + 5, control.value.indexOf('/') + 6);
      if (machineNumberSymbol === '-') {
        // return null;
      } else {
        return {
          machineSerialNumber: {
            message: 'You missed symbol "-" on field',
            actualValue: control.value
          }
        };
      }
    }

    // Check month
    if (control.value.length >= (control.value.indexOf('/') + 5)) {
      const serialNumberDate = control.value.substring(control.value.indexOf('/') + 3, control.value.indexOf('/') + 5);

      if (+serialNumberDate > 0 && +serialNumberDate <= 12) {
        // return null;
      } else {
        return {
          machineSerialNumber: {
            message: 'Incorrect month (MM) indicated',
            actualValue: control.value
          }
        };
      }
    }

    // Check minLength
    if (control.value.length < (control.value.indexOf('/') + 7)) {
      return {
        machineSerialNumber: {
          message: 'Minimum length - 8',
          actualValue: control.value
        }
      };
    }
  } else if (control.value.length) {
    return {
      machineSerialNumber: {
        message: 'Incorrect pattern : <DEALCODE> / <YYMM> - <NUMBER>',
        actualValue: control.value
      }
    };
  }
}


// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
