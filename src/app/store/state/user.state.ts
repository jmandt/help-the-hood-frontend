import { State, Action, StateContext } from '@ngxs/store';

import { User } from 'src/app/models';
import { UserAction } from '../actions';

@State<User>({
  name: 'user',
  defaults: undefined
})
export class UserState {

  @Action(UserAction.Set)
  set(ctx: StateContext<User>, action: UserAction.Set) {
    ctx.setState(action.user);
  }

}
