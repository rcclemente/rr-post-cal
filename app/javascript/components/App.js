import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Posts from './Posts'
import NewPost from './NewPost'

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/new_post" component={NewPost} />
        </Switch>
      </div>
    )
  }
}

export default App
