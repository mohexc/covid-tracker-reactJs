import React, { useState } from 'react';
import SignUp from './SignUp';
import SingIn from './SignIn';

const AuthControl = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <React.Fragment>
      {
        isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : <SingIn setIsSignUp={setIsSignUp} />
      }
    </React.Fragment>
  );
}

export default AuthControl;