import React from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Label,
  Input,
  Select,
  Table,
  Checkbox,
  Divider,
  TextArea
} from "semantic-ui-react";
import styles from "./SignupPage.module.css";
import Logo from "../../../assets/logo.png";
import Cookies from "js-cookie"
import { InternioApi } from "../../../api/index"
import { AuthApi } from "../../../api/index"

interface State {
  stage1: Boolean;
  stage2: Boolean;
  stage3: Boolean;
  stage4: Boolean;

  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;

  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;
  q9: number;
  q10: number;

  facebook: string;
  linkedin: string;
  instagram: string;

  bio: string;
}

export class SignupPage extends React.Component<{}, State> {
  private api: InternioApi = new InternioApi()
  private authApi: AuthApi = new AuthApi()

  constructor(props: {}) {
    super(props);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.MoveToStageTwo = this.MoveToStageTwo.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      stage1: true,
      stage2: false,
      stage3: false,
      stage4: false,

      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      bio: "",
      age: 0,

      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 0,
      q8: 0,
      q9: 0,
      q10: 0,

      facebook: "",
      instagram: "",
      linkedin: ""
    };
  }

  setFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ firstName: e.target.value });
  }

  setLastName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ lastName: e.target.value });
  }

  setEmail(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: e.target.value });
  }

  setPassword(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: e.target.value });
  }

  setUsername(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: e.target.value });
  }

  submit(e: any) {
    this.api
      .createFullUser(

        {
            username: this.state.username,
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            q1: this.state.q1,
            q2: this.state.q2,
            q3: this.state.q3,
            q4: this.state.q4,
            q5: this.state.q5,
            q6: this.state.q6,
            q7: this.state.q7,
            q8: this.state.q8,
            q9: this.state.q9,
            q10: this.state.q10,
            linkedin: this.state.linkedin,
            instagram: this.state.instagram,
            facebook: this.state.facebook,
            bio: this.state.bio
        }

      )
      .then(() => {
        this.getJWT()
      })
      .catch(e => {
        alert("Failed to create new user")
        console.log("FAILED!!!")
      })
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
        this.setState({ stage1: true, stage2: true, stage3: true, stage4: true })
      })
      .catch(e => {
        console.log(e)
      })
  }

  MoveToStageTwo() {
    console.log("Cat");
    this.setState({ stage2: true, stage1: false });
  }

  render() {
    const ages = [
      { key: "16", value: 16, text: "16" },
      { key: "17", value: 17, text: "17" },
      { key: "18", value: 18, text: "18" },
      { key: "19", value: 19, text: "19" },
      { key: "20", value: 20, text: "20" },
      { key: "21", value: 21, text: "21" },
      { key: "22", value: 22, text: "22" },
      { key: "23", value: 23, text: "23" },
      { key: "24", value: 24, text: "24" },
      { key: "25", value: 25, text: "25" },
      { key: "26", value: 26, text: "26" },
      { key: "27", value: 27, text: "27" },
      { key: "28", value: 28, text: "28" },
      { key: "29", value: 29, text: "29" },
      { key: "30", value: 30, text: "30" },
      { key: "31", value: 31, text: "31" },
      { key: "32", value: 32, text: "32" },
      { key: "33", value: 33, text: "33" },
      { key: "34", value: 33, text: "34" },
      { key: "35", value: 34, text: "35" }
    ];

    const q1 = [
      { text: "Let's share everything - no need to ask", value: 1, key: "1" },
      {
        text: "You can probably borrow my stuff - just ask first",
        value: 2,
        key: "2"
      },
      {
        text: "I won't say no in an emergency - I prefer to not share",
        value: 2,
        key: "3"
      },
      {
        text: "Sorry, I don't ever lend my stuff to others",
        value: 4,
        key: "4"
      }
    ];

    const q2 = [
      { text: "Take turns buying", value: 1, key: "1" },
      { text: "Split costs evenly", value: 2, key: "2" },
      { text: "Buy our own items separately", value: 3, key: "3" }
    ];

    const q3 = [
      { text: "Could eat off the floor", value: 1, key: "1" },
      { text: "Everything is put away", value: 2, key: "2" },
      { text: "A little messy", value: 3, key: "3" },
      { text: "Where's the floor?", value: 4, key: "4" }
    ];

    const q4 = [
      { text: "Yes", value: 1, key: "1" },
      { text: "Yes, but not in the house", value: 2, key: "2" },
      { text: "No", value: 3, key: "3" }
    ];

    const q5 = [
      { text: "Yes", value: 1, key: "1" },
      { text: "No, but not in the house", value: 2, key: "2" },
      { text: "No", value: 3, key: "3" }
    ];

    const q6 = [
      { text: "Any time of day or night", value: 1, key: "1" },
      {
        text: "During the day and evening, but not at night",
        value: 2,
        key: "2"
      },
      { text: "During the daytime only please", value: 3, key: "3" },
      { text: "I need the silence of a library", value: 4, key: "4" }
    ];

    const q7 = [
      { text: "The more the merrier! Guests all the time", value: 1, key: "1" },
      { text: "Not a problem, just ask for a heads up", value: 2, key: "2" },
      { text: "One or two guests are okay occasionally", value: 3, key: "3" },
      { text: "On a rare occasion guests are fine", value: 4, key: "4" },
      { text: "I prefer no guests coming over", value: 5, key: "5" }
    ];

    const q8 = [
      { text: "I'm game for drinks during the week", value: 1, key: "1" },
      { text: "I save it for the weekends", value: 2, key: "2" },
      { text: "I drink a few times a month", value: 3, key: "3" },
      { text: "I don't drink, but I don't mind if you do", value: 4, key: "4" },
      {
        text: "I don't drink, and I'd like an alcohol-free home",
        value: 5,
        key: "5"
      }
    ];

    const q9 = [
      { text: "Always!", value: 1, key: "1" },
      { text: "Often", value: 2, key: "2" },
      { text: "Rarely", value: 3, key: "3" },
      { text: "Never", value: 4, key: "4" }
    ];

    const q10 = [
      { text: "Early: between 8pm - 11pm", value: 1, key: "1" },
      { text: "Moderate: between 11pm - 1am", value: 2, key: "2" },
      { text: "Late: between 1am - 4am", value: 3, key: "3" },
      { text: "During daylight hours", value: 4, key: "4" }
    ];

    return (
      <>
        <Grid textAlign="center" className={styles.Grid} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment very padded stacked>
              <img src={Logo} style={{ height: "15vh" }} />
              {this.state.stage1 && (
                <>
                  <Header as="h1" textAlign="center">
                    Join Interio!
                  </Header>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    onChange={this.setUsername}
                  />
                  <br />
                  <Form.Input
                    fluid
                    icon="write"
                    iconPosition="left"
                    placeholder="First name"
                    onChange={this.setFirstName}
                  />
                  <br />
                  <Form.Input
                    fluid
                    icon="write"
                    iconPosition="left"
                    placeholder="Last name"
                    onChange={this.setLastName}
                  />
                  <br />
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="Email"
                    onChange={this.setEmail}
                  />
                  <br />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    onChange={this.setPassword}
                  />
                  <br />
                  <Select
                    fluid
                    placeholder="Select your age"
                    options={ages}
                    className={styles.Spacer}
                    onChange={(e: any, data: any) => {
                      this.setState({ age: data.value });
                    }}
                  />
                  <Button onClick={this.MoveToStageTwo} color="blue">
                    Continue
                  </Button>
                </>
              )}
              {this.state.stage2 && (
                <>
                  <Header as="h1" textAlign="center">
                    What are your preferences?
                  </Header>
                  <Grid centered>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #1
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          What are your thoughts on sharing and borrowing?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q1}
                            onChange={(e: any, data: any) => {
                              this.setState({ q1: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #2
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          How should we share common-use items?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q2}
                            onChange={(e: any, data: any) => {
                              this.setState({ q2: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #3
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          How tidy are you?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q3}
                            onChange={(e: any, data: any) => {
                              this.setState({ q3: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #4
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          Do you smoke? (Cigarettes, shisha, etc.)
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q4}
                            onChange={(e: any, data: any) => {
                              this.setState({ q4: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #5
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          Does smoking bother you?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q5}
                            onChange={(e: any, data: any) => {
                              this.setState({ q5: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #6
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          When is noise acceptable?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q6}
                            onChange={(e: any, data: any) => {
                              this.setState({ q6: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #7
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          What's your guest policy?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q7}
                            onChange={(e: any, data: any) => {
                              this.setState({ q7: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #8
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          How do you feel about alcohol?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q8}
                            onChange={(e: any, data: any) => {
                              this.setState({ q8: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #9
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          How often do you have music on?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q9}
                            onChange={(e: any, data: any) => {
                              this.setState({ q9: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Label color="red" horizontal>
                        Question #10
                      </Label>
                      <Grid.Column centered width={16}>
                        <Segment textAlign="center">
                          When do you go to bed during the week?
                          <Select
                            centered
                            fluid
                            placeholder="Select your answer"
                            options={q10}
                            onChange={(e: any, data: any) => {
                              this.setState({ q10: data.value });
                            }}
                          />
                        </Segment>
                      </Grid.Column>
                      <Grid.Row>
                        <Divider hidden />
                        <Button
                          primary
                          onClick={(e: any) => {
                            this.setState({
                              stage3: true,
                              stage2: false,
                              stage1: false
                            });
                          }}
                        >
                          Next!
                        </Button>
                      </Grid.Row>
                    </Grid.Row>
                  </Grid>
                </>
              )}
              {this.state.stage3 && (
                <>
                  <Header as="h1" textAlign="center">
                    Help your roomates find you! (optional)
                  </Header>
                  <Form.Input
                    fluid
                    icon="facebook"
                    iconPosition="left"
                    placeholder="Facebook"
                    onChange={(e: any) => {
                      this.setState({ facebook: e.target.value });
                    }}
                  />
                  <br />
                  <Form.Input
                    fluid
                    icon="instagram"
                    iconPosition="left"
                    placeholder="Instagram"
                    onChange={(e: any) => {
                      this.setState({ instagram: e.target.value });
                    }}
                  />
                  <br />
                  <Form.Input
                    fluid
                    icon="linkedin"
                    iconPosition="left"
                    placeholder="Linkedin"
                    onChange={(e: any) => {
                      this.setState({ linkedin: e.target.value });
                    }}
                  />
                  <br />
                  <Button
                    onClick={(e: any) => {
                      this.setState({
                        stage4: true,
                        stage3: false,
                        stage2: false,
                        stage1: false
                      });
                    }}
                    color="blue"
                  >
                    Continue
                  </Button>
                </>
              )}
              {this.state.stage4 && (
                <>
                  <Header as="h1" textAlign="center">
                    Give your roomates a little description
                  </Header>
                  <Form>
                    <TextArea
                      onChange={(e: any) => {
                        this.setState({ bio: e.target.value });
                      }}
                      placeholder="Share a brief bio"
                    />
                  </Form>
                  <Divider hidden />
                  <Button
                    onClick={this.submit}
                    color="blue"
                  >
                    Finish!
                  </Button>
                </>
              )}
              {this.state.stage1 &&
                this.state.stage2 &&
                this.state.stage3 &&
                this.state.stage4 && <Redirect to="/dashboard" />}
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
