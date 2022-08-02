import Layout from './components/layout'

import { Profile } from './components/profile'
import Repositories from './components/repositories'
import { Loader } from './components/loader'

import { useGitHub } from './hooks/githubHooks'
import { NoSearch } from './components/nosearch'

function App() {
  const { githubState } = useGitHub()

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <Loader />
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}

export default App
