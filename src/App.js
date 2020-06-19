import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import TalentTreePage from './modules/TalentTree/TalentTreePage';

// Router established as we would normally need it for additional pages.
const App = () => {
    return (
        <Router basename="/tsl-talent-calc/">
            <Switch>
                <Route exact path="/" component={TalentTreePage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;