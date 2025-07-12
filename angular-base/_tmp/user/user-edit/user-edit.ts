import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.scss',
  imports: [ReactiveFormsModule]
})
export class UserEdit implements OnInit {
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [{value: '', disabled: true}],
      uuid: [''],
      login: [''],
      name: [''],
      status: ['']
    });

    this.route.paramMap.pipe(
      switchMap(params => this.userService.getUser(+params.get('id')!))
    ).subscribe(user => this.userForm.patchValue(user));
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userForm.getRawValue()).subscribe(() => {
        this.router.navigate(['/user']);
      });
    }
  }
}