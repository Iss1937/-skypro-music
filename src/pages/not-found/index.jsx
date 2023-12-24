/* eslint-disable consistent-return */
import { useState, useEffect } from 'react'
import Bar from '../../components/Bar/Bar'
import Search from '../../components/Search/Search'
import Nav from '../../components/Nav/Nav'
import NotFoundContent from '../../components/NotFoundContent/NotFound'
import Footer from '../../components/Footer/Footer'
import * as S from './styles'

export default function NotFound() {
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setisLoading(true)
      }, 10000)

      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <Nav />
          <Search />
          <NotFoundContent />
        </S.Content>
        <Bar isLoading={isLoading} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
