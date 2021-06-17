import React from "react";
import { BaseComponent } from "../base";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
import Flipcard from "../widget/flipcard";
import "./style.scss";

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
  state: Readonly<TState> = {};

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

  flipCardRender = {
    header: {
      title: "Oil Furnace",
    },
    footer: {
      title: "Today",
    },
    params: [
      {
        id: 1,
        name: "Temperature",
        unit: "kwh",
        description: "Temp",
      },
      {
        id: 2,
        name: "Voltage",
        unit: "kwh",
        description: "Voltage",
      },
      {
        id: 3,
        name: "DC Voltage",
        unit: "kwh",
        description: "DC Voltage",
      },
      {
        id: 4,
        name: "Daily Energy",
        unit: "kwh",
        description: "Daily Energy",
      },
    ],
    refreshTime: 2, //  5 sec
    footerDataProps: {
      left: {
        title: "AVG",
      },
      middle: {
        title: "MAX",
      },
      right: {
        title: "MIN",
      },
    },
  };

  flipcardRequestData = {
    params: [1, 2, 3, 4],
  };

  flipcardData = {
    1: {
      cur: 12,
      max: 13,
      min: 56,
      avg: 89,
      points: [
        {
          "12:00:00": 2,
        },
        {
          "1:00:00": 20,
        },
        {
          "2:00:00": 23,
        },
        {
          "3:00:00": 12,
        },
      ],
    },
    2: {
      cur: 127,
      max: 136,
      min: 46,
      avg: 19,
    },
    3: {
      cur: 102,
      max: 130,
      min: 569,
      avg: 890,
    },
    4: {
      cur: 112,
      max: 123,
      min: 536,
      avg: 489,
    },
  };

  render() {
    const width = "500px";
    const height = "300px";

    return (
      <Grid columns="2">
        <Grid.Column>
          <Header>
            Width: {width} , Height: {height}
          </Header>
          <Segment
            className="p-0"
            style={{
              width,
              height,
              margin: "20px",
            }}
          >
            <Flipcard
              {...this.flipCardRender}
              data={this.flipcardData}
            ></Flipcard>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <div
            style={{
              fontSize: "1.2em",
              margin: "20px",
            }}
          >
            <div>
              <strong>Flipcard Render UI JSON</strong>
              <pre>{JSON.stringify(this.flipCardRender, null, 4)}</pre>
            </div>

            <div>
              <strong>Flipcard Data Request JSON</strong>
              <pre> {JSON.stringify(this.flipcardRequestData, null, 4)}</pre>
            </div>

            <div>
              <strong>Flipcard DATA Response JSON</strong>
              <pre>{JSON.stringify(this.flipcardData, null, 4)}</pre>
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
type TState = {};

/**
 * State
 */
type TProps = {};

export { StartUp as default };
