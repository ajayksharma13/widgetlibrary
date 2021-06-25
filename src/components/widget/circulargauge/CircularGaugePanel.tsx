/**
 * Dynamic gauge
 */
import * as React from "react";
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  Inject,
  AnnotationDirective,
  PointersDirective,
  PointerDirective,
  RangesDirective,
  RangeDirective,
  AnnotationsDirective,
  Annotations,
} from "@syncfusion/ej2-react-circulargauge";
import { BaseComponent } from "../../base";
import GaugeModel from "./model";
import "./style.scss";

export class CircularGaugeBase extends BaseComponent<TProps> {
  private gauge: CircularGaugeComponent;
  private id: string = Math.floor(Math.random() * 100).toString();

  state: TState = {
    height: this.props.height,
    width: this.props.width,
    toggle: false,
  };

  annotationTemplate(unit: string) {
    if (this.state.toggle) {
      return (
        '<div style="width:90px;text-align:center;font-size:20px;font-family:Roboto">${pointers[0].value} ' +
        unit +
        "</div>"
      );
    } else
      return '<div style="width:90px;text-align:center;font-size:20px;font-family:Roboto"> N/A </div>';
  }

  calcHeight = (): string => {
    return (parseInt(this.state.height) - 230).toString() + "px";
  };

  calcWidth = (): string => {
    return (parseInt(this.state.width) - 10).toString() + "px";
  };

  handleToggle3 = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  setHeight3 = () => {
    this.setState({ height: this.props.height });
  };

  setWidth3 = () => {
    this.setState({ width: this.props.width });
  };

  render() {
    const renderData = this.props.gaugeRenderData[
      this.props.model.selectedParams[this.props.index] - 1
    ];
    const paramSelected = renderData ? true : false;
    console.log(this.state.width, this.state.height);
    return (
      <div className="gauge-main">
        {paramSelected ? (
          <CircularGaugeComponent
            centerY="65%"
            style={{ height: this.calcHeight(), width: this.calcWidth() }}
            ref={(gauge) => (this.gauge = gauge)}
            id={this.id}
          >
            <Inject services={[Annotations]} />
            <AxesDirective>
              <AxisDirective
                minimum={renderData.rangeStart}
                maximum={renderData.rangeEnd}
                radius="120%"
                startAngle={270}
                endAngle={90}
                lineStyle={{ width: 0 }}
                labelStyle={{
                  font: {
                    size: "13px",
                    fontFamily: "Roboto",
                  },
                  position: "Outside",
                  autoAngle: true,
                  useRangeColor: false,
                }}
                majorTicks={{ height: 0 }}
                minorTicks={{ height: 0 }}
              >
                <PointersDirective>
                  <PointerDirective
                    animation={{ enable: true, duration: 900 }}
                    value={0}
                    radius="80%"
                    color="#757575"
                    pointerWidth={7}
                    cap={{
                      radius: 8,
                      color: "#757575",
                      border: { width: 0 },
                    }}
                    needleTail={{
                      color: "#757575",
                      length: "15%",
                    }}
                  />
                </PointersDirective>
                <AnnotationsDirective>
                  <AnnotationDirective
                    content={this.annotationTemplate(renderData.unit)}
                    angle={180}
                    zIndex="1"
                    radius="30%"
                  />
                </AnnotationsDirective>
                <RangesDirective>
                  <RangeDirective
                    start={renderData.rangeVeryLowStart}
                    end={renderData.rangeVeryLowEnd}
                    radius="100%"
                    color="#82b944"
                  />
                  <RangeDirective
                    start={renderData.rangeLowStart}
                    end={renderData.rangeLowEnd}
                    radius="100%"
                    color="#ddec12"
                  />
                  <RangeDirective
                    start={renderData.rangeHighStart}
                    end={renderData.rangeHighEnd}
                    radius="100%"
                    color="#ff6000"
                  />
                  <RangeDirective
                    start={renderData.rangeVeryHighStart}
                    end={renderData.rangeVeryHighEnd}
                    radius="100%"
                    color="red"
                  />
                </RangesDirective>
              </AxisDirective>
            </AxesDirective>
          </CircularGaugeComponent>
        ) : (
          <div />
        )}
      </div>
    );
  }

  gauge5Interval1 = setInterval((): void => {
    if (this.gauge) {
      let newVal: number;
      if (!this.state.toggle) {
        newVal = 0;
      } else {
        if (this.gauge.axes[0].pointers[0].value == 0) {
          newVal = this.props.gaugeData[
            this.props.model.selectedParams[this.props.index]
          ].cur;
        } else {
          newVal =
            this.gauge.axes[0].pointers[0].value +
            (Math.floor(Math.random() * 10) - 5);
          if (newVal <= 0) {
            newVal = 5;
          }
        }
      }
      if (document.getElementById(this.id)) {
        this.gauge.axes[0].pointers[0].animation.enable = true;
        this.gauge.setPointerValue(0, 0, newVal);
        this.gauge.setAnnotationValue(
          0,
          0,
          this.gauge.axes[0].annotations[0].content
        );
      } else {
        clearInterval(this.gauge5Interval1);
      }
    }
  }, 3000);
}

type TState = {
  width: string;
  height: string;
  toggle: boolean;
};

type TProps = {
  gaugeRenderData: any;
  gaugeData: any;
  height: string;
  model: GaugeModel;
  width: string;
  index: number;
  ref: any;
};
