import { BehaviorSubject } from 'rxjs';

export class UserService {
private _users = new BehaviorSubject<User[]>([]);

users$ = this._users.asObservable();

addUser(user: User) {
  const currentUsers = this._users.getValue();
    this._users.next([...currentUsers, user]);
  }
}
