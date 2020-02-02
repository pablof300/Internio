import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import styles from './LandingPage.module.css'
import { Redirect } from 'react-router-dom';
import Logo from '../../../assets/logo2.png';

interface State {
  login: Boolean;
  signup: Boolean
}

export class LandingPage extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.state = {login: false, signup: false}
  }

  redirectLogin() {
    this.setState({login: true})
  }
 //
 //  getBase64(e: any) {
 //    let file: File = e.target.files[0];
 //    console.log(file)
 //   let reader = new FileReader();
 //   reader.readAsDataURL(file);
 //   reader.onload = function () {
 //     console.log(reader.result);
 //   };
 // }

 // <input type="file" onChange={ (e) => { this.getBase64(e) }} />

  render() {
    if (this.state.login) {
      return <Redirect to="/login" />
    }
    if (this.state.signup) {
      return <Redirect to="/signup" />
    }
    return (
      <>
        <Grid textAlign = "center" centered className={styles.Grid} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }} >
          <Grid.Row>
            <Segment textAlign = "center" style={{marginBottom: "5vh"}} very padded stacked >
              <img src={Logo} style={{height: "15vh"}} />
              <p className={styles.Padding}>
              Find your perfect roommate match. Get suggestions. Get resources for finding housing for your internship.
              </p>
            </Segment>
          </Grid.Row>

            <Grid.Row>
              <Segment very padded stacked >
                <Button.Group fluid>
                  <Button color="green" onClick={(e: any) => {
                    this.setState({ signup: true });
                  }}>
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
