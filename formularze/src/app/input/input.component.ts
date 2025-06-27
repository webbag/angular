import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input()
  type: string = '';

  @Input()
  name: string = '';

  @Input()
  group!: FormGroup;

  isInvalid() {

    const control = this.group.get(this.name)
    if (!control) return false;

    return control.touched && control.invalid
  }

  hasError(errorCode: string) {

    const control = this.group.get(this.name)
    if (!control) return false;

    return control.touched && control.hasError(errorCode);
  }

  reset() {
    const control = this.group.get(this.name)
    if (control) {
      control.reset();
    }
  }

}
