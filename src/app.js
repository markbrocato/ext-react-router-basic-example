import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, browserHistory, Link } from 'react-router-dom';
import { Container, Panel } from '@extjs/ext-react';

Ext.require('layout.fit')

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container fullscreen layout="fit">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/foo/address' component={Address} />
                        <Route component={NotFound} />
                    </Switch>
                </Container>
            </BrowserRouter>

        )
    }
}

const Home = () => (
    <Panel title="Home" bodyPadding={20}>
        The home view.
        <Link to="/foo/address">Address View</Link>
    </Panel>
);

const Address = () => (
    <Panel title="Address" bodyPadding={20}>
        The address view.
        <Link to="/">Home View</Link>
    </Panel>
);

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

export default App;