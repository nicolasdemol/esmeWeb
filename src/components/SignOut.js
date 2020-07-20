import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button className="transition ease-in-out duration-300 bg-red-400 hover:bg-red-500 text-red-900 p-2 rounded" type="button" onClick={firebase.doSignOut}>
    Se déconnecter
  </button>
);
 
export default withFirebase(SignOutButton);