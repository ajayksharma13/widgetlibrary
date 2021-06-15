import React from 'react';

/**
 * Default Theme instance value
 */
const DEFAULT_VALUE: any = {
  name: 'Default Theme',
  color: {
    primaryColor: '#97c5c3',
    secondaryColor: '#00d6cc',
  },
};

// Theme Context
const ThemeContext = React.createContext({});

/**
 * Theme Provider
 */
class ThemeProvider extends React.Component<TProps, TState> {
  /**
   * Theme Default props
   */
  static defaultProps: TProps = {
    children: <></>,
    value: DEFAULT_VALUE,
  };

  state: Readonly<TState> | TState = {
    value: DEFAULT_VALUE,
  };

  /**
   * Update State from props
   */
  componentDidMount() {
    this.setState(() => ({
      value: this.props.value,
    }));
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
  }
}

/**
 * Theme Data Type
 */
export type TTheme = {
  name: string;
  color: {
    primaryColor: string;
    secondaryColor: string;
  };
};

/**
 * Theme Context Props
 */
type TProps = {
  children: React.ReactNode; // render children,
  value: any;
};

type TState = {
  value: any;
};

export { ThemeContext, ThemeProvider };
