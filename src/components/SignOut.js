import React from 'react';
import { authService } from '../services';

const SignOutButton = () => (
  <button
    className="transition ease-in-out duration-300 bg-red-400 hover:bg-red-500 text-red-900 p-2 font-bold rounded"
    type="button"
    onClick={authService.doSignOut}
  >
    Se déconnecter
  </button>
);

export default SignOutButton;
