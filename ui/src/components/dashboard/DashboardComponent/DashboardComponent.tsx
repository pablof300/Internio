import React from "react";
import styles from "./DashboardComponent.module.css";
import { AuthApi } from "../../../api/index";
import { InternioApi } from "../../../api/index";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { User, Neighborhood, ObjectId, InternshipInfo } from "../../../api/index";
import { NeighborhoodComponent } from "../NeighborhoodComponent/index"
import Datetime from "react-datetime";
import * as moment from "moment";

import "../../../../node_modules/react-datetime/css/react-datetime.css";

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
  Input,
  Card
} from "semantic-ui-react";

interface Props {}

interface State {
  authenticated: Boolean;
  loading: Boolean;
  start: Boolean;
  addingNewInternship: Boolean;

  neighborhoodStage: Boolean;
  neighborhoods: Neighborhood[];

  user?: User;

  current?: InternshipInfo;

  // Create InternshipInfo
  company: string;
  city: string;
  state: string;
  startDate?: number;
  endDate?: number;
}

export class DashboardComponent extends React.Component<{}, State> {
  private authApi: AuthApi = new AuthApi();
  private internioApi: InternioApi = new InternioApi();

  constructor(props: {}) {
    super(props);
    this.state = {
      authenticated: false,
      loading: true,
      start: true,
      addingNewInternship: false,
      neighborhoodStage: false,
      neighborhoods: [],

      company: "",
      city: "",
      state: ""
    };
    this.addNewInternship = this.addNewInternship.bind(this);
    this.setCompany = this.setCompany.bind(this);
    this.setState = this.setState.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.setStateLocation = this.setStateLocation.bind(this);
    this.submitNewInternship = this.submitNewInternship.bind(this);
  }

  submitNewInternship(e: any) {
    e.preventDefault();
    console.log("GOING!!!");
    console.log(this.state.city);
    console.log(this.state.state);
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.log(this.state.user);

    if (this.state.user != null) {
      this.internioApi
        .addInternshipToUser({
          locationCity: this.state.city,
          locationState: this.state.state,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          username: this.state.user.username
        })
        .then((info) => {
          console.log("Setting current city");
          console.log(info.locationCity);
          console.log(info);
          this.setState({current: info, neighborhoodStage: true, addingNewInternship: false})

          this.internioApi
          .getNeighborhoods({locationCity: info.locationCity})
          .then((neighborhoods) => {
            this.setState({neighborhoods: neighborhoods})
          })
        });
    }
  }

  setStartDate(e: string | moment.Moment) {
    let date = e as moment.Moment;
    this.setState({ startDate: date.unix() });
  }

  setEndDate(e: string | moment.Moment) {
    let date = e as moment.Moment;
    this.setState({ endDate: date.unix() });
  }

  setCity(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ city: e.target.value });
  }

  setStateLocation(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ state: e.target.value });
  }

  setCompany(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ company: e.target.value });
  }

  addNewInternship() {
    this.setState({ addingNewInternship: true, start: false });
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
              user: user,
              addingNewInternship: user.internships.length == 0
            });
        });
      });
    } else {
      console.log("No JWT token available");
      this.setState({ authenticated: false, loading: false });
    }
  }

  render() {
    console.log("Here?")
    console.log(this.state.neighborhoods.length)
    console.log(this.state.addingNewInternship)
    console.log(this.state.neighborhoodStage)
    console.log("Done??")


    if (this.state.loading) {
      return <></>;
    }
    if (!this.state.authenticated) {
      return <Redirect to="/login" />;
    }
    if (this.state.user != null) {
      let username: string = this.state.user.nameFirst;
    }
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
            {this.state.user != null && this.state.user.nameFirst}
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
              {!this.state.neighborhoodStage && !this.state.addingNewInternship && this.state.user != null && this.state.user.internships.map((value, index) => (
                <Grid.Row>
                  <Segment fluid raised color={"purple"} className={styles.Dog}>
                  <Header as='h2' icon textAlign='center'>
                    <Icon name='bookmark' circular />
                    { console.log(value) }
                    <Header.Content>{value.company} Internship</Header.Content>
                    <Header.Subheader>
                      {value.startDate &&
                        value.startDate.toDateString()
                      }
                      -
                      {value.endDate &&
                        value.endDate.toDateString()
                      }
                    </Header.Subheader>
                  </Header>
                  </Segment>
                </Grid.Row>
              ))

              }

              {this.state.addingNewInternship && !this.state.start && (
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
                      <Input placeholder="City" onChange={this.setCity} />
                    </Form.Field>
                    <Form.Field>
                      <label>State</label>
                      <Input placeholder="State" onChange={this.setStateLocation} />
                    </Form.Field>
                    <label>
                      <strong>Start date</strong>
                    </label>
                    <Datetime onChange={this.setStartDate} />

                    <p className={styles.Spacer}></p>
                    <label>
                      <strong>End date</strong>
                    </label>
                    <Datetime onChange={this.setEndDate} />

                    <Button
                      primary
                      className={styles.Button}
                      onClick={this.submitNewInternship}
                    >
                      Submit
                    </Button>
                  </Form>
                </Segment>
              )}

              {this.state.neighborhoodStage && this.state.neighborhoods.length == 0 &&
                  <p>Loading neighborhoods</p>
              }

              {this.state.neighborhoodStage && this.state.neighborhoods.length != 0 &&

                <Card.Group fluid centered color="purple" itemsPerRow={3} className={styles.Cat}>
                  {this.state.neighborhoods.map((value, index) => (
                    <NeighborhoodComponent name={value.neighborhoodName as string} state={value.city as string} />
                  ))}
                </Card.Group>
              }

              { this.state.addingNewInternship &&
                this.state.start && (
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
