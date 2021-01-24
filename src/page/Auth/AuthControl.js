import React, { useState, } from 'react';
import SignUp from './SignUp';
import SingIn from './SignIn';
import { useAuthContext } from '../../context/AuthContext';

const AuthControl = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { user } = useAuthContext()

  return (
    <React.Fragment>
      {user
        ? null
        : isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : <SingIn setIsSignUp={setIsSignUp} />
      }

    </React.Fragment>
  );
}

export default AuthControl;