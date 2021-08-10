import * as React from "react";
import { Link } from "react-router-dom";
import {
  LOGO_URL,
  LOGO_URL_2x,
  SCREEN_BREAKPOINT,
} from "../../utils/constants";
import { UserContext } from "../../context";
import { BaseComponent } from "../base";

import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import {
  Card,
  Divider,
  Dropdown,
  Header,
  Label,
  List,
  Modal,
} from "semantic-ui-react";
import AuthUtil from "../../utils/auth";
import { TClientRoute } from "../../types";
import withRouterHOC from "../../hoc/with-router";
import { compose } from "recompose";

import "./style.scss";
import Utils, { ScreenUtil } from "../../utils";

const isTabNMobile =
  ScreenUtil.getWindowDimension().width < SCREEN_BREAKPOINT.tablet;

/**
 * Header component
 */
class AppHeaderComponent extends BaseComponent<TClientRoute<TProps>, TState> {
  /**
   * user Context type
   */
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;
  notificationSubcribed: any;

  static defaultProps: Pick<TProps, "isUserLogged" | "onToggleMenuSidebar"> = {
    isUserLogged: false,
    onToggleMenuSidebar: () => {},
  };

  /**
   * declare default state value
   */
  state: Readonly<TState> = {
    notifications: [],
  };

  // static getDerivedStateFromProps(nextProps: any, prevState: any) {
  //   if (nextProps.isUserLogged !== prevState.isUserLogged) {
  //     return { isUserLogged: nextProps.isUserLogged };
  //   }
  //   return null;
  // }

  /**
   * component did mount
   */
  async componentDidMount() {}

  async componentDidUpdate(prevProps: TProps, prevState: TState) {
    // if (prevProps.isUserLogged != this.props.isUserLogged) {
    //    await this.fetchUnReadNotifications();
    // }
  }

  /**
   * signout
   */

  /**
   * menus
   */
  menus = (): Array<TMenu> => [
    {
      id: 1,
      name: "Search",
      Component: (
        <Link to="#" className="secondary">
          <Icon name="search"></Icon>
        </Link>
      ),
      isRequireUser: false,
    },
    {
      id: 2,
      name: "Notification",
      Component: (
        <Link to="#" className="secondary">
          <Icon name="bell"></Icon>
        </Link>
      ),
      isRequireUser: false,
    },
    {
      id: 3,
      name: "Deck",
      Component: (
        <Link to="/deck" className="secondary">
          <Icon
            name="th"
            style={{
              fontSize: "1.1em",
              marginTop: "-3px",
            }}
          ></Icon>
        </Link>
      ),
      isRequireUser: false,
    },
    {
      id: 4,
      name: "Home",
      Component: (
        <Link to="/dashboard" className="secondary">
          <Icon name="home"></Icon>
        </Link>
      ),
      isRequireUser: false,
    },
    {
      id: 5,
      name: "User profile",
      Component: (
        <Dropdown item icon="user circle" simple className="user-dropdown">
          <Dropdown.Menu className="user-dropdown-menu">
            <Card className="user-dropdown-card">
              <Card.Content
                textAlign="center"
                style={{ padding: 0, margin: 0 }}
              >
                <Card.Meta></Card.Meta>
                <Card.Description style={{ marginTop: 0 }}>
                  <div className="profile-image-background">
                    <Image
                      circular
                      src="/assets/images/Profile.svg"
                      bordered
                      size="tiny"
                      className="user-image"
                    />
                  </div>
                  <Header as="h5" className="m-t-10">
                    {/* {this.context.user?.fullname} */} Logged User name
                  </Header>

                  {/* <Divider /> */}

                  {/* <div id="profile-content">
                    <p>
                      <b>{this.context.user?.mobile}</b>
                    </p>
                    <p>
                      <b>{this.context.user?.email} </b>
                    </p>
                  </div> */}
                  {/* <Icon name='pencil' color='grey' size='small' id='profile-edit-icon' /> */}
                </Card.Description>
              </Card.Content>

              <Card.Content
                extra
                className="user-dropdown-button-section m-t-10"
              >
                <Button
                  size="mini"
                  className="dropdown-button"
                  onClick={this.signOut}
                >
                  Sign Out
                </Button>
              </Card.Content>
            </Card>
          </Dropdown.Menu>
        </Dropdown>
      ),
      isRequireUser: true,
    },

    // {
    //   id: 5,
    //   name: 'Sign out',
    //   Component: (
    //     <Button as={Link} onClick={this.signOut} size="tiny" primary>
    //       Sign out
    //     </Button>
    //   ),
    //   isRequireUser: true,
    // },
  ];

  private signOut() {
    // AuthUtil.logout();
  }

  /**
   * render menu
   * @param param
   * @param index
   */
  private renderMenu = ({ Component, isRequireUser }: TMenu, index: number) => {
    // if (isRequireUser && !this?.context?.user) return;
    // if (isRequireUser == false && this?.context?.user) return;
    return <Menu.Item key={index}>{Component}</Menu.Item>;
  };

  render() {
    const { pageId = "" } = this.props as any;
    return (
      <div className="app-header">
        <div className="header-bg"></div>
        <Menu
          compact
          className={`menu-section ${
            pageId == "start-page" && !isTabNMobile ? "" : ""
          }`}
          // primary="true"
          borderless
          fixed="top"
          attached={false}
        >
          <Container fluid>
            <Menu.Item fitted>
              <div className="logo-title flex-row align-flex-center">
                <Image
                  className="logo"
                  onClick={() => this.props.onToggleMenuSidebar?.()}
                  src={LOGO_URL}
                ></Image>
                <span>Anexee</span>
              </div>
            </Menu.Item>

            <Menu.Menu position="right">
              {this.menus().map(this.renderMenu)}
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

/**
 * Header Props
 */
type TProps = {
  onChangeSidebar: Function;
  onToggleMenuSidebar?: Function;
  isUserLogged?: Boolean;
  currentSidebarComponent?: string;
  currentLayout: string;
};

/**
 * header state
 */
type TState = {
  notifications: Array<any>;
};

/**menu */
type TMenu = {
  id: number;
  name: string;
  Component: any; // React.Component; TODO: need to change type
  isRequireUser?: Boolean;
};
const AppHeader = compose<TClientRoute<TProps>, TProps>(withRouterHOC)(
  AppHeaderComponent
);
AppHeader.displayName = "header";
export { AppHeader };
