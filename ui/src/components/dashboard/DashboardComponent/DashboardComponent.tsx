import React from 'react';
import styles from './DashboardComponent.module.css'
import { Grid, Image } from 'semantic-ui-react'

interface Props {
}

interface State {
}

export class DashboardComponent extends React.Component<{}, {}> {

  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </>
    )
  }
}
