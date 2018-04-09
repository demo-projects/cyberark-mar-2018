import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATE } from '../actions/router.actions';

@Injectable()
export class RouterMiddleware {
  constructor(private router: Router) {}

  public middleware = ({ dispatch, getState }) => next => action => {
    if (action.type === NAVIGATE) {
      this.router.navigate(action.payload);
    }

    return next(action);
  };
}
