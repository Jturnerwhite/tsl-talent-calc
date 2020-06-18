import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import DashboardPage from './modules/Dashboard/DashboardPage';
import CharactersPage from './modules/Character/CharactersPage';
import TalentTreePage from './modules/TalentTree/TalentTreePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={TalentTreePage} />
                <Route exact path="/characters" component={CharactersPage} />
                <Route exact path="/talents" component={TalentTreePage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;