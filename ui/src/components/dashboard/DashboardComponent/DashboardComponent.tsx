import React from "react";
import styles from "./DashboardComponent.module.css";
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

interface State {}

export class DashboardComponent extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
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
