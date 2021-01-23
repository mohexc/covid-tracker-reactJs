import React, { useState, } from 'react';
import SignUp from './SignUp';
import SingIn from './SignIn';
import UserInfo from './UserInfo';
import { useAuthContext } from '../../context/AuthContext';

const AuthControl = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const { user } = useAuthContext()

  return (
    <React.Fragment>
      {user
        ? <UserInfo user={user} />
        : isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : <SingIn setIsSignUp={setIsSignUp} />
      }

    </React.Fragment>
  );
}

export default AuthControl;