import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import TalentTreePage from './modules/TalentTree/TalentTreePage';

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