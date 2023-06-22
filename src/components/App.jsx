import { Layout } from 'layout/Layout';
import { PrivateRoute } from 'privateRoute/PrivateRoute';
import { PublicRoute } from 'publicRoute/PublicRoute';
import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { currentUser } from 'redux/operations';
import { tokenUser } from 'redux/selectors';

const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

export function App() {
  const token = useSelector(tokenUser);
  const { isFirstLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(currentUser(token));
    }
  }, [dispatch, token]);

  return (
    <>
      {!isFirstLoading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute element={<Contacts />} />} />
            <Route
              path="contacts"
              element={<PublicRoute element={<Contacts />} />}
            />
            <Route
              path="login"
              element={<PrivateRoute element={<Login />} />}
            />
            <Route
              path="register"
              element={<PrivateRoute element={<Register />} />}
            />
          </Route>
        </Routes>
      )}
    </>
  );
}
