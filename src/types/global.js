// @flow

import type { Location } from 'react-router-dom';

declare type RouterLocation = Location;

declare type RouterHistory = {
  push: string => void,
  goBack: () => void
};

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
