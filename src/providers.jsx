import { GithubProvider } from "./providers/githubProvider"
import { GlobalStyle } from "./components/globalStyles/GlobalStyles"
import App from "./App"


export default function Providers() {
  
  return(
    <main>
    <GithubProvider>
      <GlobalStyle />
      <App />
    </GithubProvider>
    </main>
  )
}