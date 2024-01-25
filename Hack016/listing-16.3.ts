import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UserService } from './user.service';
import { loadUsers, loadUsersSuccess } from './user.actions';
import { switchMap, map } from 'rxjs/operators';

export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => this.userService.getUsers()),
     map(users => loadUsersSuccess({ users }))
    )
  );

  constructor(
     private actions$: Actions,
     private userService: UserService
   ) {}
}
