import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuth } from 'redux/selectors';

export function PrivateRoute({ element }) {
  const isLogin = useSelector(isAuth);

  return <>{isLogin ? <Navigate to="/contacts" /> : element}</>;
}
