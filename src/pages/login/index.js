import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { githubAuthProvider } from '../../config/firebase'
import { Button, Grid } from '@material-ui/core'
import { Title } from './style'

const login = () => {
    firebase.auth.signInWithRedirect(githubAuthProvider);
}

const Login = () => (
    <Grid container direction='column' alignItems='center' spacing={2}>
        <Grid item>
            <Title>Reactzzaria</Title>
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

export default Login