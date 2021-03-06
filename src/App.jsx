import React from 'react';
import './App.css';

import SessionExpiredModal from './components/SessionExpiredModal/SessionExpiredModal';
import AuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp/UnauthenticatedApp';
import useAuth from './hooks/useAuth';

function App() {
  const {
    authenticatedUser,
    showExpiredSessionMessage,
    setShowExpiredSessionMessage,
    logout,
  } = useAuth();

  const logoutHandler = () => {
    logout();
    setShowExpiredSessionMessage(false);
  };

  return (
    <>
      <SessionExpiredModal
        handleClose={logoutHandler}
        open={showExpiredSessionMessage}
      />
      {authenticatedUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
}

export default App;
