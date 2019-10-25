import React from 'react'
import { Switch, Route } from 'react-router-dom'

const routes = [
    { path: '/route1', content: 'Route 1' },
    { path: '/route2', content: 'Route 2' },
]

const Main = () => (
    <>
        <h1>Main</h1>
        <Switch>
            {routes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    render={() => <h2>{route.content}</h2>}
                />
            ))}
        </Switch>
    </>
)

export default Main