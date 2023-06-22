import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSingUp } from 'redux/operations';
import { Button } from '@mui/material';
import { Form } from './Register.styled';

export default function RegisterForm() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);

  function registerForm(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const obj = {
      email,
      password,
      name,
    };
    setError(false);
    dispatch(userSingUp(obj))
      .unwrap()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(true);
      });
  }
  return (
    <Form onSubmit={registerForm}>
      <input type="text" name="name" placeholder="Введите имя" />
      <input type="email" name="email" placeholder="Введите email" />
      <input type="password" name="password" placeholder="Введите password" />
      <Button type="submit" variant="contained">
        Зарегистрироваться
      </Button>
      {isLoading && <div>Ждите, идет загрузка!</div>}
      {error && <div>Ошибка регистрации</div>}
    </Form>
  );
}
