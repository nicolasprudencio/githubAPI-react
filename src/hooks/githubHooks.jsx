import { useContext } from 'react'
import { GithubContext } from '../providers/githubProvider'

export const useGitHub = () => {
  const {
    githubState,
    getUser,
    getUserRepos,
    getRepoState,
    getUserStarredState,
    getUserStarred
  } = useContext(GithubContext)

  return {
    githubState,
    getUser,
    getUserRepos,
    getRepoState,
    getUserStarredState,
    getUserStarred
  }
}
