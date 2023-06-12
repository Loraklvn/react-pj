import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (): React.ReactElement => {
  return (
    <nav className="py-2 flex gap-3">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/counter">
        Counter
      </Link>
    </nav>
  );
};
export default Navbar;
