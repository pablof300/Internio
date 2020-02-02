import React from 'react';
import Cookies from "js-cookie"
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment, Icon, Divider, Input, Card, Image } from 'semantic-ui-react';
import styles from './NeighborhoodComponent.module.css'
import { InternioApi } from "../../../api/index"
import Logo from '../../../assets/images.jpg';
import { MessageComponent } from "../../messages/MessageComponent/index"

interface State {
  hidden: boolean;
}

interface Props {
  name: string;
  state: string;
}

export class NeighborhoodComponent extends React.Component<Props,State> {

  private api: InternioApi = new InternioApi();

  constructor(props: Props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      hidden: false,
    }
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  render() {
    if (this.state.hidden) {
      return <></>
    }
    return (
      <>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={Logo}
          />
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>{this.props.state}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic fluid   color='green'>
              Interested
            </Button>
          </div>
        </Card.Content>
      </Card>
      </>
    )
  }
}
