import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button className="bg-red-400 hover:bg-red-500 text-white p-2 rounded-full m-10" type="button" onClick={firebase.doSignOut}>
    Se déconnecter
  </button>
);
 
export default withFirebase(SignOutButton);