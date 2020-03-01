import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import RepoPage from './pages/RepoPage';

class App extends React.Component {
    render() {
        // <div>/learn react/i</div>
        return (
            <Router>
                <Route exact path="/" component={SearchPage} />
                <Route path="/repository/:name/:repo" component={RepoPage} />
            </Router>
        );
    }
}

export default App;
