import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAdmin = localStorage.getItem('isAdmin');

  if (isAdmin === 'true') {
    return true;
  }

  router.navigate(['/login']);
  return false;
};