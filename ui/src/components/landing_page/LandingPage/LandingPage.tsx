import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import styles from './LandingPage.module.css'
import { Redirect } from 'react-router-dom';
import Logo from '../../../assets/logo.png';

interface State {
  login: Boolean;
}

export class LandingPage extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.state = {login: false}
  }

  redirectLogin() {
    this.setState({login: true})
  }

  render() {
    if (this.state.login) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Grid textAlign = "center" centered className={styles.Grid} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }} >
          <Grid.Row>
            <Segment textAlign = "center" style={{marginBottom: "5vh"}} very padded stacked >
              <img src={Logo} style={{height: "15vh"}} />
              <Header as='h1' textAlign='center'>
                Internio
              </Header>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Segment textAlign = "center" style={{marginBottom: "5vh"}} very padded stacked >
              <p>
              Find your perfect roommate match. Get suggestions. Get resources for finding housing for your internship. 
              </p>
            </Segment>
          </Grid.Row>
            <Grid.Row>
              <Segment very padded stacked >
                <Button.Group fluid>
                  <Button color="green">
                    Sign Up
                  </Button>
                  <Button onClick={this.redirectLogin}>
                    Login
                  </Button>
                </Button.Group>
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </>
    )
  }
};
