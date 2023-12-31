import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default Logout;