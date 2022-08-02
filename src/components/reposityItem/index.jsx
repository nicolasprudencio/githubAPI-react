import * as S from './styles'

export default function RepositoryItem({ name, fullName, linkToRepo }) {
  return (
    <S.Wrapper>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </S.Wrapper>
  )
}
