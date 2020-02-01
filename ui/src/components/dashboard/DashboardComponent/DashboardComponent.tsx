import React from "react";
import styles from "./DashboardComponent.module.css";
import { AuthApi } from "../../../api/index"
import { InternioApi } from "../../../api/index"
import Cookies from "js-cookie"
import { Redirect } from "react-router-dom"
import { User } from "../../../api/index"
import {
  Grid,
  Image,
  Accordion,
  Icon,
  Sidebar,
  Menu,
  Segment,
  Header
} from "semantic-ui-react";

interface Props {}

interface State {
  authenticated: Boolean,
  loading: Boolean
  // user: User
}

export class DashboardComponent extends React.Component<{}, State> {
  private authApi: AuthApi = new AuthApi()
  private internioApi: InternioApi = new InternioApi()

  constructor(props: {}) {
    super(props);
    this.state = {
      authenticated: false,
      loading: true,
      // user: new User()
    }
  }

  componentDidMount() {
  const token = Cookies.get("jwt")
  if (token) {
    const requestParams = { token: token }
    console.log("Found JWT token, veryfing...")
    this.authApi.verifyJWT(requestParams).then(verified => {
      this.internioApi.getUser({username: verified}).then(user => {
        console.log(user)
        this.setState({ authenticated: verified != "INVALID", loading: false})
      })
    })
  } else {
    console.log("No JWT token available")
    this.setState({ authenticated: false, loading: false })
  }
}

  render() {
    // if (this.state.loading) {
    //   return <> </>
    // }
    // if (!this.state.authenticated) {
    //   return <Redirect to="/login" />
    // }
    return (
      <>
        <Menu
          as={Menu}
          borderless
          visible={true}
          vertical
          inverted
          className={styles.Sidebar}
        >
          <Menu.Item name="home" onClick={() => {}}>
            <Icon name="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item name="users" onClick={() => {}}>
            <Icon name="users" />
            <span>Roommates</span>
          </Menu.Item>
          <Menu.Item name="repos" onClick={() => {}}>
            <Icon name="fork" />
            <span>Account</span>
          </Menu.Item>
          <Menu.Item name="repos" onClick={() => {}}>
            <Icon name="fork" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
        <Segment
          textAlign="center"
          basic
          className={styles.Container}
          >
          <Segment className={styles.InnerContainer} stacked>

          </Segment>
        </Segment>
      </>
    );
  }
}
