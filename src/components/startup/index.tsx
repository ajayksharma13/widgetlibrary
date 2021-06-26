import React from "react";
import { BaseComponent } from "../base";
import { Grid, Header, Input, Segment } from "semantic-ui-react";
import GaugeComponent, {
  GaugeModel,
  GaugeProperty,
} from "../widget/circulargauge";
import "./style.scss";
import WidgetPanel from "../widget/panel";

/**
 * Start Up component
 */
class StartUp extends BaseComponent<TProps, TState> {
  childToggle: any = React.createRef();
  /**
   * default props
   */
  static defaultProps: TProps = {};

  /**
   * default state
   */
  state: TState = {
    width: "400",
    height: "500",
    gaugeChoice: 1,
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
      {
        id: "4",
        unitName: "Energy",
        unit: "kJ",
        rangeStart: 0,
        rangeEnd: 1000,
        rangeVeryLowStart: 0,
        rangeVeryLowEnd: 200,
        rangeLowStart: 200,
        rangeLowEnd: 500,
        rangeHighStart: 500,
        rangeHighEnd: 800,
        rangeVeryHighStart: 800,
        rangeVeryHighEnd: 1000,
      },
    ],
    footerDataProps: {
      header: {
        title: "Summary",
      },
      min: {
        title: "MIN",
      },
      avg: {
        title: "AVG",
      },
      max: {
        title: "MAX",
      },
      tot: {
        title: "TOTAL",
      },
    },
  };

  gaugeRequestData = {
    params: [1, 2, 3, 4],
  };

  gaugeData = {
    1: {
      cur: 30,
      max: 50,
      min: 20,
      avg: 33,
      tot: 400,
    },
    2: {
      cur: 20,
      max: 39,
      min: 15,
      avg: 23,
      tot: 220,
    },
    3: {
      cur: 47,
      max: 67,
      min: 33,
      avg: 45,
      tot: 550,
    },
    4: {
      cur: 500,
      max: 680,
      min: 330,
      avg: 480,
      tot: 693,
    },
  };

  getHeight = (num: number): string => {
    if (num === 1) {
      if (parseInt(this.state.height) < 420) {
        return "420";
      } else return this.state.height;
    } else {
      if (parseInt(this.state.height) < 420) {
        return "420";
      } else return this.state.height;
    }
  };

  getWidth = (num: number): string => {
    if (num === 1) {
      if (parseInt(this.state.width) < 280) {
        return "280";
      } else return this.state.width;
    } else {
      if (parseInt(this.state.width) < 840) {
        return "840";
      } else return this.state.width;
    }
  };

  handleToggle = () => {
    this.childToggle.current.handleToggle2();
  };

  setHeight = async (event: any) => {
    await this.setState({ height: event.target.value });
    this.childToggle.current.setHeight2();
  };

  setWidth = async (event: any) => {
    await this.setState({ width: event.target.value });
    this.childToggle.current.setWidth2();
  };

  getGaugeChoice = (choice: number) => {
    if (choice === 3) {
      this.setState({
        gaugeChoice: choice,
        width: (parseInt(this.state.width) * 3).toString(),
      });
    } else {
      this.setState({
        gaugeChoice: choice,
        width: (parseInt(this.state.width) / 3).toString(),
      });
    }
  };

  render() {
    const gaugeModel = GaugeModel.instance(this.state.gaugeChoice);
    const multiWidgetHeight = this.getHeight(this.state.gaugeChoice);
    const multiWidgetWidth =
      this.state.gaugeChoice === 3
        ? Math.floor(
            (parseInt(this.getWidth(this.state.gaugeChoice)) - 60) / 3
          ).toString()
        : this.getWidth(this.state.gaugeChoice);
    const headerTitle = this.gaugeRender.headerTitle;

    return (
      <Grid columns="1">
        <Grid.Column>
          <Segment basic>
            <Header>Multi Gauge Widget Template</Header>
            <Input
              label="Width"
              value={this.state.width}
              onChange={(e) => this.setWidth(e)}
            ></Input>
            <Input
              label="Height"
              value={this.state.height}
              onChange={(e) => this.setHeight(e)}
            ></Input>
          </Segment>
          <button
            className="ui inverted primary button"
            style={{ margin: 10, alignSelf: "flex-start" }}
            onClick={this.handleToggle}
          >
            Start / Stop
          </button>
          <Segment
            className="p-0"
            style={{
              width: `${this.getWidth(this.state.gaugeChoice)}px`,
              height: `${this.getHeight(this.state.gaugeChoice)}px`,
              margin: "20px",
            }}
          >
            <WidgetPanel
              title={headerTitle}
              Property={GaugeProperty}
              model={gaugeModel}
              renderData={this.gaugeRender}
              gaugeCount={this.state.gaugeChoice}
              setGaugeChoice={this.getGaugeChoice}
            >
              {() => (
                <GaugeComponent
                  model={gaugeModel}
                  data={this.gaugeData}
                  renderData={this.gaugeRender}
                  ref={this.childToggle}
                  height={multiWidgetHeight}
                  width={multiWidgetWidth}
                  gaugeCount={this.state.gaugeChoice}
                ></GaugeComponent>
              )}
            </WidgetPanel>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          {/* <div
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
          </div> */}
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
  gaugeChoice: number;
};

/**
 * State
 */
type TProps = {};

export { StartUp as default };
