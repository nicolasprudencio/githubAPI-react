import { Header } from '../header'
import * as S from './styles'

export default function Layout({ children }) {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  )
}
