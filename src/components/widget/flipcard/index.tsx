import * as React from "react";
import { Grid, Header, Table } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import "./style.scss";

/**
 * Flipcard
 */
class Flipcard extends BaseComponent<TProps> {
  /**
   * default state
   */
  state: TState = {
    currentParamIndex: -1,
  };

  /**
   * interbal parameter reference
   */
  intervalParameter: any;

  /**
   * mount component
   */
  componentDidMount() {
    const { refreshTime, params } = this.props;
    this.intervalParameter = setInterval(() => {
      this.setState((prevState: TState) => ({
        currentParamIndex:
          prevState.currentParamIndex == params.length - 1
            ? 0
            : ++prevState.currentParamIndex,
      }));
    }, refreshTime * 1000);
  }

  /**
   * unmount
   * clear data
   */
  componentWillUnmount() {
    if (this.intervalParameter) this.intervalParameter.clearInterval();
  }

  render() {
    const { header, footer, footerDataProps, params, data } = this.props;
    const { currentParamIndex } = this.state;
    const { id, name = "NA", unit = "" } =
      params[this.state.currentParamIndex] ?? {};
    const { cur = "NA", max = "NA", min = "NA", avg = "NA" } = data?.[id] ?? {};

    return (
      <div className="flipcard-card">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Header>{header.title}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header>
                <Header.Subheader>
                  {name} <small>{unit}</small>
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p className="param-value">
                <span>{cur}</span>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <label>{footer.title}</label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="p-0">
            <Grid.Column className="p-0">
              {/* Footer  Grid */}
              <Table className="m-0" textAlign="center">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>
                      {footerDataProps.left.title}
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      {footerDataProps.middle.title}
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      {footerDataProps.right.title}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <span>{avg}</span>
                    </Table.Cell>
                    <Table.Cell>
                      <span>{max}</span>
                    </Table.Cell>
                    <Table.Cell>
                      <span>{min}</span>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

type TProps = {
  data: any;
  header: any;
  refreshTime: number;
  footer: any;
  params: Array<any>;
  footerDataProps: any;
};

type TState = {
  currentParamIndex: number;
};

export { Flipcard };
