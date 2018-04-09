import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../actions/api.actions';

@Injectable()
export class ApiMiddleware {
  constructor(private httpClient: HttpClient) {}

  public middleware = ({ dispatch, getState }) => next => action => {
    if (action.type !== API) {
      return next(action);
    }

    this.httpClient[action.payload.method](
      action.payload.url,
      action.payload.data
    ).subscribe(data => {
      if (action.payload.onSuccess) {
        action.payload.onSuccess(dispatch, data);
      }
    });

    return next(action);
  };
}
