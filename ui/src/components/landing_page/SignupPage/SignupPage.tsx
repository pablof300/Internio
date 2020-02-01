import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import styles from './SignupPage.module.css'
import Logo from '../../../assets/logo.png';

export class SignupPage extends React.Component<{},{}> {
  render() {
    return (
      <>
        <Grid textAlign = "center" className={styles.Grid} verticalAlign = "middle">
          <Grid.Column style={{ maxWidth: 450}}>
            <Segment very padded stacked>
              <img src={Logo} style={{height: "15vh"}} />
              <Header as='h1' textAlign='center'>
                Signup
              </Header>
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' />
              <br/>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
              <br/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <br/>
              <Button color='blue'>
                Signup
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}
