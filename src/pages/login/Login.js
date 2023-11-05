import { Link } from 'react-router-dom'
import * as S from './Login.styles'

const Login = ({ onAuthButtonClick }) => {
  return (
    <S.Login>
      <h1>Страница входа</h1>
      <Link to="/">
        <button onClick={onAuthButtonClick} to="/">
          Войти
        </button>
      </Link>
      <Link to="/register">Зарегистрироваться</Link>
    </S.Login>
  )
}

export default Login
