import * as React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Input,
  StrictSidebarProps,
  Sidebar,
  Segment,
  Grid,
  Header,
  MenuItemProps,
} from "semantic-ui-react";
import "./layout.scss";

class DashboardLayout extends React.Component<TProps, TState> {
  state = {
    activeMenu: "home",
    sidebar: {
      visible: false,
    },
  };

  private onChangeMenu = (event: any, menuProps: MenuItemProps) => {
    const { sidebar } = this.state;
    this.setState({
      activeMenu: menuProps.name,
      sidebar: {
        visible: !sidebar.visible,
      },
    });
  };

  public render() {
    const { children } = this.props;
    const { activeMenu, sidebar } = this.state;
    return (
      <div>
        <Sidebar.Pushable as="div">
          <Sidebar
            as={Segment}
            animation="push"
            direction="left"
            visible={sidebar.visible}
          ></Sidebar>

          <Sidebar.Pusher>
            <Menu attached inverted>
              <Menu.Item
                name="home"
                active={activeMenu === "home"}
                onClick={this.onChangeMenu}
              />
              <Menu.Item
                name="messages"
                active={activeMenu === "messages"}
                onClick={this.onChangeMenu}
              />
              <Menu.Item
                name="friends"
                active={activeMenu === "friends"}
                onClick={this.onChangeMenu}
              />
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
                <Menu.Item name="logout" as={Link} to="/" />
              </Menu.Menu>
            </Menu>
            {children(this.state)}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

/**
 * props
 */
type TProps = {
  children(data: object): React.ReactNode;
};

/**
 * state
 */
type TState = {
  activeMenu?: string;
  sidebar: StrictSidebarProps;
};

const style = {
  h1: {
    marginTop: "3em",
  },

  sidebar: {
    overflow: "hidden",
  },
};

export { DashboardLayout as default };
