import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserItem } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<UserItem> {
    return this.http.get<UserItem>(`${this.apiUrl}/${id}`);
  }

  updateUser(user: UserItem): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${user.id}`, user);
  }
}