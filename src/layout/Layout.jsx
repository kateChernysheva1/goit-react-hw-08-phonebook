import { Loading } from 'components/Loading/Loading';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { isAuth } from 'redux/selectors';
import { Header } from './Layout.styled';

export function Layout() {
  const isLogin = useSelector(isAuth);
  return (
    <>
      <Header>
        <nav>
          {!isLogin && <NavLink to="/register">Регистрация</NavLink>}
          {!isLogin && <NavLink to="/login">Логин</NavLink>}
          {isLogin && <NavLink to="/contacts">Контакты</NavLink>}
        </nav>
        {isLogin && <UserMenu />}
      </Header>
      <Suspense fallback={<Loading text="Loading..." />}>
        <Outlet />
      </Suspense>
    </>
  );
}
