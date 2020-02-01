import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import styles from './LoginPage.module.css'
import Logo from '../../../assets/logo.png';
export class LoginPage extends React.Component<{},{}> {
  render() {
    return (
      <>
        <Grid textAlign = "center" className={styles.Grid} verticalAlign = "middle">
          <Grid.Column style={{ maxWidth: 450}}>
            <Segment very padded stacked>
              <img src={Logo} style={{height: "15vh"}} />
              <Header as='h1' textAlign='center'>
                Internio
              </Header>

              <Header.Subheader>
                placeholder text about what Internio is
              </Header.Subheader>
              <br/>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
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
                Login
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}
