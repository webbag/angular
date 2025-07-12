export interface User {
  id: number;
  uuid: string;
  login: string;
  name: string;
  status: 'active' | 'disabled';
}