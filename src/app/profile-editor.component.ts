import {Component, Input} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',

  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

  });
  @Input() jwe!: string | undefined;

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
