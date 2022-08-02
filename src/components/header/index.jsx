import { useState } from 'react'
import { useGitHub } from '../../hooks/githubHooks'
import * as S from './styles'

export function Header() {
  const { getUser } = useGitHub()
  const [getSearchForUserState, setSearchForUserState] = useState('')

  const submitGetUser = () => {
    if (!getSearchForUserState);

    getUser(getSearchForUserState)
  }

  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder="Digite o nome do usúario para pesquisar..."
        onChange={(e) => setSearchForUserState(e.target.value)}
      />
      {console.log()}
      <button type="submit" onClick={submitGetUser}>
        {' '}
        Buscar
      </button>
    </S.Wrapper>
  )
}
