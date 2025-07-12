import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserItem } from './user.model';

export class UserDataSource extends DataSource<UserItem> {
  private httpClient = inject(HttpClient);
  private dataSubject = new BehaviorSubject<UserItem[]>([]);

  constructor() {
    super();
    this.fetchData();
  }

  private fetchData(): void {
    const apiUrl = `${environment.apiUrl}/users/`;
    this.httpClient.get<UserItem[]>(apiUrl).subscribe({
      next: (data: UserItem[]) => {
        this.dataSubject.next(data);
        //console.log(data);
      },
      error: (err) => console.error('Failed to fetch data', err),
    });
  }

  connect(): Observable<UserItem[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(): void {}
}