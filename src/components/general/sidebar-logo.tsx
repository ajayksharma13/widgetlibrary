import React, { Component } from 'react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import './style.scss';


class SidebarLogo extends Component<TProps> {
  render() {
    const { width = "10%", margin = " 4% 8%" } = this.props;
    return (
      <Grid.Row columns={1}>
        <Image src="/assets/images/unstock_only_logo.svg" size="mini"
          style={{
            width,
            margin,
          }}
        ></Image>
      </Grid.Row>
    )
  }
}


type TProps = {
  width?: string;
  margin?: string;
}
export default SidebarLogo;
