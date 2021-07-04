import { Route, Switch } from 'react-router'
import PostsPage from './pages/posts';
import './assets/standard-style.css'
import PostContext from './context/PostContext'
import PostService from './services/postService';
import './assets/fonts.css'


function App(props) {
  const postService = new PostService(props)

  return(<div>
    <PostContext.Provider value={postService}>
      <Switch>
          <Route path="/" component={PostsPage} />
      </Switch>
    </PostContext.Provider>
  </div>
  )
}

export default App;
