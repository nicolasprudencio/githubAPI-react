import { createContext, useCallback, useState } from 'react'
import { api } from '../services/api'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: []
})

export const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    loading: false,
    hasUser: false,
    user: {
      id: undefined,
      login: '',
      avatar: undefined,
      name: '',
      html: '',
      location: '',
      starred_url: '',
      repos_url: '',
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
      company: undefined
    }
  })

  const [getRepoState, setGetRepoState] = useState([])
  const [getUserStarredState, setGetUserStarredState] = useState([])

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }))

    api
      .get(`users/${username}`)
      .catch(function (error) {
        if (error.request) {
          alert('Usuário não encontrado, pesquise por um nome válido!')
        }
      })
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html: data.html_url,
            location: data.location,
            starred_url: data.starred_url,
            repos_url: data.repos_url,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
            company: data.company
          }
        }))
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading
        }))
      })
  }

  const getUserRepos = (userLogin) => {
    api.get(`users/${userLogin}/repos`).then((response) => {
      setGetRepoState(response.data)
    })
  }

  const getUserStarred = (userLogin) => {
    api.get(`users/${userLogin}/starred`).then((response) => {
      setGetUserStarredState(response.data)
    })
  }

  const contextValue = {
    githubState,
    getRepoState,
    getUserStarredState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((userLogin) => getUserRepos(userLogin), []),
    getUserStarred: useCallback((userLogin) => getUserStarred(userLogin), [])
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}
