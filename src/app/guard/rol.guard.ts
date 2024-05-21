import { CanActivateFn } from '@angular/router';

export const rolGuardAd: CanActivateFn = (route, state) => {
  if (localStorage.getItem('rol') == 'admin') {
    return true;
  } else
    return false;
};

export const rolGuarUs: CanActivateFn = (route, state) => {
  if (localStorage.getItem('rol') == 'usuario') {
    return true;
  } else
    return true;
};

