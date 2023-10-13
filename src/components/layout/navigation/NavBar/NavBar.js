import Logo from '../Logo/Logo'
import NavBurger from '../NavBurger/NavBurger'
import * as S from './NavMenu.styles'

export default function NavBar() {
  return (
    <S.MainNav>
      <Logo />
      <NavBurger />
    </S.MainNav>
  )
}
