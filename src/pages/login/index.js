import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { githubAuthProvider } from '../../config/firebase'
import { Button, Grid } from '@material-ui/core'
import { Title } from './style'

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('User is logged in', user)
                setIsLoggedIn(true)
                setUser(user)
            } else {
                console.log('User is not logged in', user)
                setIsLoggedIn(false)
            }
        })
    }, [])

    const login = () => {
        firebase.auth.signInWithRedirect(githubAuthProvider);
    }

    const logout = () => {
        firebase.auth().signOut().then(() => {
            console.log('logout')
            setIsLoggedIn(false)
            setUser(false)
        })
    }

    return (
        <Grid container direction='column' alignItems='center' spacing={2} >
            <Grid item>
                <Title>Reactzzaria</Title>
            </Grid>
            <Grid item xs={12}>
                {isLoggedIn && (
                    <>
                        <pre>{user.displayName}</pre>
                        <Button
                            variant='contained'
                            onClick={() => logout()}>
                            Logout
                        </Button>
                    </>
                )}
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant='contained'
                    fullWidth
                    onClick={() => login()}>
                    Entrar com Github
            </Button>
            </Grid>
        </Grid>
    )
}

export default Login