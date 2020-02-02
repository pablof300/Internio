import React from 'react';
import Cookies from "js-cookie"
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Segment, Icon, Divider, Input } from 'semantic-ui-react';
import styles from './LoginPage.module.css'
import { AuthApi } from "../../../api/index"
import Logo from '../../../assets/logo.png';
import { MessageComponent } from "../../messages/MessageComponent/index"

interface State {
  username: string
  password: string
  redirect: boolean
  failedToLogin: boolean
}


export class NeighborhoodComponent extends React.Component<{},State> {
private authApi: AuthApi = new AuthApi()

  constructor(props: {}) {
    super(props)
    this.state = {
      username: "",
      password: "",
      redirect: false,
      failedToLogin: false
    }

    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getJWT = this.getJWT.bind(this)
  }

  setUsername(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: e.target.value })
  }

  setPassword(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.getJWT()
  }

  async getJWT() {
    const requestParams = {
      username: this.state.username,
      password: this.state.password
    }
    this.authApi
      .getJWT(requestParams)
      .then(token => {
        console.log("Authenticated user:")
        console.log(token)
        Cookies.set("jwt", token)
        this.setState({ redirect: true })
      })
      .catch(e => {
        this.setState({ failedToLogin: true })
        console.log(e)
      })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />
    }
    return (
      <>
        <Grid className={styles.Grid} verticalAlign = "middle">
          <Grid.Column width={4} />
          <Grid.Column width={8} className={styles.Margin}>
          {this.state.failedToLogin &&
            <MessageComponent type='failure' title='Uh no!' content='Could not login with that info?' />
          }
            <Segment padded="very" stacked className={styles.Container}>
              <Header
                centered
                textAlign="center"
                as="div"
                icon
                className={styles.Header}
              >
                <Icon name="lock" />
                Login
              </Header>
              <Divider hidden />
              <Segment raised color="purple">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field
                    label="Username"
                    control={Input}
                    onChange={this.setUsername}
                  />
                  <Form.Input
                    label="Password"
                    control={Input}
                    type="password"
                    onChange={this.setPassword}
                  />
                  <Button primary type="submit">
                    Login
                  </Button>
                </Form>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}
