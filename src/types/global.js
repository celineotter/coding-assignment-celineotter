// @flow

import type { Location } from 'react-router-dom';

declare type RouterMatch = {
  url: string,
  path: string,
  params: { [string]: string },
  isExact: boolean
};

declare type Action<T> = {
  type: string,
  payload: T
};
