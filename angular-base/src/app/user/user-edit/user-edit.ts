import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { UserItem } from '../user.model';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.scss'
})
export class UserEdit implements OnInit {
  editForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.editForm = this.fb.group({
      id: [''],
      uuid: [''],
      login: [''],
      name: [''],
      status: ['']
    });

    this.userService.getUserById(this.userId).subscribe((user: UserItem) => {
      this.editForm.patchValue(user);
    });
  }

  onSave(): void {
    this.userService.updateUser(this.editForm.value).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}