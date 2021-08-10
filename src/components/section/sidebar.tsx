import * as React from "react";
import { Link } from "react-router-dom";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";

import * as _ from "lodash";
import "./style.scss";
import { TClientRoute, TRouteProps } from "../../types";
import { BaseComponent } from "../base";
import { compose } from "recompose";
import withToastHOC from "../../hoc/with-toast";
import withRouterHOC from "../../hoc/with-router";
import Utils from "../../utils";
import { UserContext } from "../../context";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";

const DefaultMenus: Array<TMenu> = [
  // {
  //   id: "Dashboard",
  //   icon: "th large",
  //   name: "Dashboard",
  //   href: "/dashboard",
  // },
];

const Menus: Array<TMenu> = [
  // {
  //   id: 'Dashboard',
  //   icon: 'th large',
  //   name: 'Dashboard',
  //   href: '/dashboard',
  // },
  {
    id: "form",
    icon: "steam square",
    name: "Sample Form",
    href: "/sample",
  },

  {
    id: "Menu",
    icon: "th large",
    name: "Menu",
    children: [
      {
        id: "SubMenu1",
        icon: "th large",
        name: "Sub Menu 1",
        href: "/business",
      },
      {
        id: "SubMenu2",
        icon: "th large",
        name: "Sub Menu 2",
      },
    ],
  },
];

/**
 * Sidebar
 */
class AppSidebarComponent extends BaseComponent<
  TClientRoute<TProps> & TRouteProps,
  TState
> {
  /**
   * user Context type
   */
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;
  /**
   * default state
   */
  state = {
    //activeMenus: [Menus.filter(menu => !Utils.checkPreference(this.context.preferences, menu.preference as string))[0]],
    activeMenus: [Menus[0]],
    menus: [...DefaultMenus, ...Menus],
  };

  /**
   * component did mount
   */
  componentDidMount() {
    this.initMenu();
  }

  async componentDidUpdate(prevProps: TProps, prevState: TState) {
    if (prevProps.isUserLogged != this.props.isUserLogged) {
      this.initMenu();
    }
  }

  private initMenu() {
    const { getCurrentRoute } = this.props;
    const { pathname } = getCurrentRoute() as any;
    const preferenceMenus = [
      ...DefaultMenus,
      ...Menus,
      // ...Menus.filter((menu) =>
      //   Utils.checkPreference(
      //     this.context.preferences,
      //     menu.preference as string
      //   )
      // ),
    ];
    const activeMenu =
      preferenceMenus.find((m) => m.href == pathname) ?? DefaultMenus[0];
    this.setState({
      activeMenus: [activeMenu],
      menus: preferenceMenus,
    });
  }

  /**
   * toggle sidebar
   */
  private onClickMenu = async (menu: TMenu, parentMenu: TMenu | undefined) => {
    const { activeMenus } = this.state;
    let menus = [...activeMenus];
    if (!parentMenu) {
      menus = [menu];
    } else {
      const currMenuLevelExist = activeMenus.findIndex(
        ({ level }) => level === menu.level
      );
      if (currMenuLevelExist > -1) menus.splice(currMenuLevelExist, 1, menu);
      else menus = [...activeMenus, menu];
    }

    // update menu
    this.setState({
      activeMenus: menus,
    });
  };

  /**
   * render menu
   * @param menu
   * @param index
   * @returns
   */
  private renderMenu = (
    menu: TMenu,
    index: number,
    parentMenu: TMenu | undefined
  ): React.ReactNode => {
    const { activeMenus } = this.state as TState;
    const isActive = _.some(activeMenus, ({ id }) => id === menu.id);
    const currentLevel = menu.level ?? 1;
    return (
      <React.Fragment key={index}>
        <Menu.Item
          key={menu.id + index}
          name={menu.name}
          active={isActive}
          className={`${menu.className ? menu.className : ""}`}
          as={Link}
          to={menu.href}
          style={{
            paddingLeft: 1.14285714 * currentLevel + "em",
          }}
          onClick={() =>
            this.onClickMenu({ ...menu, level: currentLevel }, parentMenu)
          }
        >
          <div className="semi-circle"></div>
          {/* <Image src={`/assets/images/${menu.icon}`} className="logo-image" /> */}
          {/* {menu.iconComponent ? (
            menu.iconComponent(isActive ? "#FFF" : undefined)
          ) : (
            <i className={`${menu.icon}`} />
          )} */}
          <span>{menu.name}</span>
          {menu.children && (
            <Icon
              size="small"
              name={isActive ? "chevron down" : "chevron right"}
            />
          )}
        </Menu.Item>
        {isActive &&
          menu.children?.map((childMenu, index) =>
            this.renderMenu(
              {
                ...childMenu,
                className: "child-menu",
                level: currentLevel + 1,
              },
              index,
              menu
            )
          )}
      </React.Fragment>
    );
  };

  render() {
    return (
      <>
        {this.state.menus.map((menu, index) =>
          this.renderMenu(menu, index, undefined)
        )}
      </>
    );
  }
}

/**
 * State
 */
type TState = {
  activeMenus: Array<TMenu> | [];
  menus: Array<TMenu>;
};

/**
 * Props
 */
type TProps = {
  isUserLogged?: Boolean;
};

/**
 * Menu
 */
type TMenu = {
  id: string;
  icon: string;
  iconComponent?: any;
  name: string;
  children?: Array<TMenu>;
  className?: string;
  level?: number;
  href?: string;
  preference?: string;
};
const AppSidebar = compose<TClientRoute<TProps> & TRouteProps, TProps>(
  withToastHOC,
  withRouterHOC
)(AppSidebarComponent);
export { AppSidebar };
