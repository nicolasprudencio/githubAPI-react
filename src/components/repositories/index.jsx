import * as S from './styles'
import RepositoryItem from '../reposityItem'
import { useGitHub } from '../../hooks/githubHooks'
import { useEffect } from 'react'

export default function Repositories() {
  const {
    githubState,
    getUserRepos,
    getRepoState,
    getUserStarredState,
    getUserStarred
  } = useGitHub()

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login)
      getUserStarred(githubState.user.login)
    }
  }, [githubState, getUserRepos, getUserStarred])

  return (
    <>
      {getRepoState.length && (
        <S.ContainerTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.ContainerTabList>
            <S.ContainerTab>Repositories</S.ContainerTab>
            <S.ContainerTab>Starred</S.ContainerTab>
          </S.ContainerTabList>
          <S.ContainerTabPanel>
            {getRepoState.map(item => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                fullName={item.full_name}
                linkToRepo={item.html_url}
              />
            ))}
          </S.ContainerTabPanel>
          <S.ContainerTabPanel>
            {getUserStarredState.map(item => (
              <RepositoryItem
                key={item.id}
                name={item.name}
                fullName={item.full_name}
                linkToRepo={item.html_url}
              />
            ))}
          </S.ContainerTabPanel>
        </S.ContainerTabs>
      )}
    </>
  )
}
