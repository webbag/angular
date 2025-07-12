import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.html',
  styleUrl: './user-add.scss',
  imports: [ReactiveFormsModule]
})
export class UserAdd {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      uuid: [''],
      login: [''],
      name: [''],
      status: ['active']
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value as User).subscribe(() => {
        this.router.navigate(['/user']);
      });
    }
  }
}