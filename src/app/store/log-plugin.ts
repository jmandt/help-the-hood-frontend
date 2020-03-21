import { getActionTypeFromInstance } from '@ngxs/store';
import { environment } from 'src/environments/environment';

export function logPlugin(state, action, next) {
  if (environment.production) return next(state, action);

  console.log(getActionTypeFromInstance(action), action);

  return next(state, action);
}
