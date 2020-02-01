import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import styles from './LandingPage.module.css'
import { Redirect } from 'react-router-dom';

export class LandingPage extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Grid textAlign = "center" centered className={styles.Grid} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }} >
            <Segment very padded stacked >
              <Button.Group fluid>
                <Button color="green">
                  Sign Up
                </Button>
                <Button>
                  Login
                </Button>
              </Button.Group>
            </Segment>
          </Grid.Column>
        </Grid>


      </>
    )
  }
};
