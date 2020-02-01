import React from "react";
import styles from "./DashboardComponent.module.css";
import { AuthApi } from "../../../api/index";
import { InternioApi } from "../../../api/index";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { User } from "../../../api/index";
import {
  Datepicker,
  DateRangeInput,
  DateSingleInput,
  START_DATE
} from "@datepicker-react/styled";

import {
  Grid,
  Image,
  Accordion,
  Icon,
  Sidebar,
  Menu,
  Segment,
  Header,
  Button,
  Divider,
  Form,
  Checkbox,
  Input
} from "semantic-ui-react";

interface Props {}

interface State {
  authenticated: Boolean;
  loading: Boolean;
  addingNewInternship: Boolean;
  user?: User;

  // Create InternshipInfo
  company: string;
  city: string;
  state: string;
  startDate?: Date;
  endDate?: Date;
}

export class DashboardComponent extends React.Component<{}, State> {
  private authApi: AuthApi = new AuthApi();
  private internioApi: InternioApi = new InternioApi();

  constructor(props: {}) {
    super(props);
    this.state = {
      authenticated: false,
      loading: true,
      addingNewInternship: false,

      company: "",
      city: "",
      state: ""
    };
    this.addNewInternship = this.addNewInternship.bind(this);
    this.setCompany = this.setCompany.bind(this);
    this.setState = this.setState.bind(this);
    this.setCity = this.setCity.bind(this);
  }

  setCity(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ city: e.target.value });
  }

  setCompany(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ company: e.target.value });
  }

  addNewInternship() {
    this.setState({ addingNewInternship: true });
  }

  componentDidMount() {
    const token = Cookies.get("jwt");
    if (token) {
      const requestParams = { token: token };
      console.log("Found JWT token, veryfing...");
      this.authApi.verifyJWT(requestParams).then(verified => {
        this.internioApi.getUser({ username: verified }).then(user => {
          this.setState({
            authenticated: verified != "INVALID",
            loading: false,
            user: user
          });
        });
      });
    } else {
      console.log("No JWT token available");
      this.setState({ authenticated: false, loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <> </>;
    }
    if (!this.state.authenticated) {
      return <Redirect to="/login" />;
    }
    let d = new Date();
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
        <Segment textAlign="center" basic className={styles.Container}>
          <Segment padded="very" className={styles.InnerContainer} stacked>
            <Grid verticalAlign="middle" centered>
              {this.state.addingNewInternship && (
                <Segment raised className={styles.NewTwo}>
                  <Form>
                    <Form.Field
                      label="Company"
                      control={Input}
                      placeholder="Company name"
                      onChange={this.setCompany}
                    />
                    <Form.Field>
                      <label>City</label>
                      <input placeholder="City" />
                    </Form.Field>
                    <Form.Field>
                      <label>State</label>
                      <input placeholder="State" />
                    </Form.Field>
                    <label>
                      <strong>Start date</strong>
                    </label>

                    <Button className={styles.Button} type="submit">
                      Submit
                    </Button>
                  </Form>
                </Segment>
              )}

              {!this.state.addingNewInternship &&
                this.state.user != null &&
                this.state.user.internships.length == 0 && (
                  <Segment raised className={styles.New}>
                    <Header as="h2" icon>
                      <Icon name="settings" />
                      Start your first search
                      <Header.Subheader>
                        All you need is your dates and location of your
                        internship! We'll take of the rest
                      </Header.Subheader>
                    </Header>
                    <Divider />
                    <Button primary onClick={this.addNewInternship}>
                      Add
                    </Button>
                  </Segment>
                )}
            </Grid>
          </Segment>
        </Segment>
      </>
    );
  }
}
