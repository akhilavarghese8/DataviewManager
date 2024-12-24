import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);


  const role = sessionStorage.getItem('role');


  if (role === 'admin' || role === 'super admin') {
    return true; // Allow access
  }


  router.navigate(['/login']);
  return false; 
};
