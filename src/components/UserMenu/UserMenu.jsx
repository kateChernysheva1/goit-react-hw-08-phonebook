import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/operations';
import { emailUser, tokenUser } from 'redux/selectors';
import { Div } from './UserMenu.styled';
import { Button } from '@mui/material';

export function UserMenu() {
  const email = useSelector(emailUser);
  const token = useSelector(tokenUser);
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutUser(token));
  }

  return (
    <Div>
      <p>{email}</p>
      <Button onClick={logout} variant="contained">
        Logout
      </Button>
    </Div>
  );
}
