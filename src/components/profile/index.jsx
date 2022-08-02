import { useGitHub } from '../../hooks/githubHooks'
import * as S from './styles'

export function Profile() {
  const { githubState } = useGitHub()

  let company = githubState.user.company
  let avatar = githubState.user.avatar

  return (
    <>
      <S.Wrapper>
        <S.WrapperImg src={avatar} alt="User Avatar" />

        <S.WrapperInformation>
          <h1>{githubState.user.name}</h1>

          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a href={githubState.user.html} target="_blank" rel="noreferrer">
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>

          <S.WrapperUserGeneric>
            {company ? (
              <>
                <h3>Company:</h3>
                <p>{company}</p>
              </>
            ) : (
              <p></p>
            )}
          </S.WrapperUserGeneric>

          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <p>{githubState.user.location}</p>
          </S.WrapperUserGeneric>

          <S.WrapperStatus>
            <div>
              <h4>Followers</h4>
              <span>{githubState.user.followers}</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span>{githubState.user.public_gists}</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>{githubState.user.following}</span>
            </div>
            <div>
              <h4>Repos</h4>
              <span>{githubState.user.public_repos}</span>
            </div>
          </S.WrapperStatus>
        </S.WrapperInformation>
      </S.Wrapper>
    </>
  )
}
