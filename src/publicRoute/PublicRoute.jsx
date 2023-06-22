import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuth } from 'redux/selectors';

export function PublicRoute({ element }) {
  const isLogin = useSelector(isAuth);

  return <>{!isLogin ? <Navigate to="/login" /> : element}</>;
}
