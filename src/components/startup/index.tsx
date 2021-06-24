import React from "react";
import { BaseComponent } from "../base";
import { Grid, Header, Input, Segment } from "semantic-ui-react";
import GaugeComponent, { GaugeModel, GaugeProperty } from "../widget/flipcard";
import "./style.scss";
import WidgetPanel from "../widget/panel";

/**
 * Start Up component
 */
class StartUp extends BaseComponent<TProps, TState> {
  /**
   * default props
   */
  static defaultProps: TProps = {};

  /**
   * default state
   */
  state: TState = {
    width: "300",
    height: "600",
    width2: "1200",
    height2: "600",
    toggle: false,
    toggle2: false,
  };

  componentDidMount() {
    this.onInit();
  }

  /**
   * @description init method of component
   */
  private async onInit() {}

  /**
   * render
   */

  gaugeRender = {
    headerTitle: "Gauge Widget",
    params: [
      {
        id: "1",
        unitName: "Temperature",
        unit: "°C",
        rangeStart: 0,
        rangeEnd: 100,
        rangeVeryLowStart: 0,
        rangeVeryLowEnd: 20,
        rangeLowStart: 20,
        rangeLowEnd: 60,
        rangeHighStart: 60,
        rangeHighEnd: 80,
        rangeVeryHighStart: 80,
        rangeVeryHighEnd: 100,
      },
    ],
    footerDataProps: {
      header: {
        title: "Summary",
      },
      left: {
        title: "MIN",
      },
      middle: {
        title: "AVG",
      },
      right: {
        title: "MAX",
      },
    },
  };

  gaugeRequestData = {
    params: [1],
  };

  gaugeData = {
    1: {
      cur: 30,
      max: 50,
      min: 20,
      avg: 33,
    },
  };

  ///////////////////////////////

  gaugeRender2 = {
    headerTitle: "Gauge Widget",
    params: [
      {
        id: "1",
        unitName: "Temperature",
        unit: "°C",
        rangeStart: 0,
        rangeEnd: 100,
        rangeVeryLowStart: 0,
        rangeVeryLowEnd: 20,
        rangeLowStart: 20,
        rangeLowEnd: 60,
        rangeHighStart: 60,
        rangeHighEnd: 80,
        rangeVeryHighStart: 80,
        rangeVeryHighEnd: 100,
      },
      {
        id: "2",
        unitName: "Volume",
        unit: "L",
        rangeStart: 0,
        rangeEnd: 50,
        rangeVeryLowStart: 0,
        rangeVeryLowEnd: 15,
        rangeLowStart: 15,
        rangeLowEnd: 30,
        rangeHighStart: 30,
        rangeHighEnd: 45,
        rangeVeryHighStart: 45,
        rangeVeryHighEnd: 50,
      },
      {
        id: "3",
        unitName: "Weight",
        unit: "kg",
        rangeStart: 0,
        rangeEnd: 100,
        rangeVeryLowStart: 0,
        rangeVeryLowEnd: 20,
        rangeLowStart: 20,
        rangeLowEnd: 60,
        rangeHighStart: 60,
        rangeHighEnd: 80,
        rangeVeryHighStart: 80,
        rangeVeryHighEnd: 100,
      },
    ],
    footerDataProps: {
      header: {
        title: "Summary",
      },
      left: {
        title: "MIN",
      },
      middle: {
        title: "AVG",
      },
      right: {
        title: "MAX",
      },
    },
  };

  gaugeRequestData2 = {
    params: [1, 2, 3],
  };

  gaugeData2 = {
    1: {
      cur: 30,
      max: 50,
      min: 20,
      avg: 33,
    },
    2: {
      cur: 20,
      max: 39,
      min: 15,
      avg: 23,
    },
    3: {
      cur: 47,
      max: 67,
      min: 33,
      avg: 45,
    },
  };

  getHeight = (num: number) => {
    if (num === 1) {
      if (parseInt(this.state.height) < 420) {
        return "420";
      } else return this.state.height;
    } else {
      if (parseInt(this.state.height2) < 420) {
        return "420";
      } else return this.state.height2;
    }
  };

  getWidth = (num: number) => {
    if (num === 1) {
      if (parseInt(this.state.width) < 280) {
        return "280";
      } else return this.state.width;
    } else {
      if (parseInt(this.state.width2) < 840) {
        return "840";
      } else return this.state.width2;
    }
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
    console.log(this.state.toggle);
  };

  handleToggle2 = () => {
    this.setState({ toggle2: !this.state.toggle2 });
    console.log(this.state.toggle2);
  };

  render() {
    const gaugeModel = GaugeModel.instance();
    const gaugeModel2 = GaugeModel.instance();
    const multiWidgetHeight = this.getHeight(2);
    const multiWidgetWidth = Math.floor(
      parseInt(this.getWidth(2)) / 3
    ).toString();
    const headerTitle = this.gaugeRender.headerTitle;
    const headerTitle2 = this.gaugeRender2.headerTitle;
    return (
      <Grid columns="2">
        <Grid.Column>
          <Segment basic>
            <Header>Gauge Widget Template</Header>
            <Input
              label="Width"
              value={this.state.width}
              onChange={(e) => this.setState({ width: e.target.value })}
            ></Input>
            <Input
              label="Height"
              value={this.state.height}
              onChange={(e) => this.setState({ height: e.target.value })}
            ></Input>
          </Segment>
          <button
            class="ui inverted primary button"
            style={{ margin: 10, alignSelf: "flex-start" }}
            onClick={this.handleToggle}
          >
            {this.state.toggle ? "Stop" : "Start"}
          </button>
          <Segment
            className="p-0"
            style={{
              width: `${this.getWidth(1)}px`,
              height: `${this.getHeight(1)}px`,
              margin: "20px",
            }}
          >
            <WidgetPanel
              title={headerTitle}
              Property={GaugeProperty}
              model={gaugeModel}
            >
              {() => (
                <GaugeComponent
                  renderData={this.gaugeRender}
                  data={this.gaugeData}
                  model={gaugeModel}
                  toggle={this.state.toggle}
                  height={this.getHeight(1)}
                  width={this.getWidth(1)}
                ></GaugeComponent>
              )}
            </WidgetPanel>
          </Segment>
          <Segment basic>
            <Header>Multi Gauge Widget Template</Header>
            <Input
              label="Width"
              value={this.state.width2}
              onChange={(e) => this.setState({ width2: e.target.value })}
            ></Input>
            <Input
              label="Height"
              value={this.state.height2}
              onChange={(e) => this.setState({ height2: e.target.value })}
            ></Input>
          </Segment>
          <button
            class="ui inverted primary button"
            style={{ margin: 10, alignSelf: "flex-start" }}
            onClick={this.handleToggle2}
          >
            {this.state.toggle2 ? "Stop" : "Start"}
          </button>
          <Segment
            className="p-0"
            style={{
              width: `${this.getWidth(2)}px`,
              height: `${this.getHeight(2)}px`,
              margin: "20px",
            }}
          >
            <WidgetPanel
              title={headerTitle2}
              Property={GaugeProperty}
              model={gaugeModel2}
            >
              {() => (
                <GaugeComponent
                  renderData={this.gaugeRender2}
                  data={this.gaugeData2}
                  model={gaugeModel2}
                  toggle={this.state.toggle2}
                  height={multiWidgetHeight}
                  width={multiWidgetWidth}
                ></GaugeComponent>
              )}
            </WidgetPanel>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <div
            style={{
              fontSize: "1.2em",
              margin: "10px",
            }}
          >
            <div>
              <strong>Circular Gauge Render UI JSON</strong>
              <pre>{JSON.stringify(this.gaugeRender, null, 4)}</pre>
            </div>

            <div>
              <strong>Circular Gauge Data Request JSON</strong>
              <pre> {JSON.stringify(this.gaugeRequestData, null, 4)}</pre>
            </div>

            <div>
              <strong>Circular Gauge DATA Response JSON</strong>
              <pre>{JSON.stringify(this.gaugeData, null, 4)}</pre>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

/**
 * State
 */
type TState = {
  width: string;
  height: string;
  width2: string;
  height2: string;
  toggle: boolean;
  toggle2: boolean;
};

/**
 * State
 */
type TProps = {};

export { StartUp as default };
