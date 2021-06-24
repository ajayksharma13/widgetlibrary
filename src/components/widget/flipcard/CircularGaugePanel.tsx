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
import FlipcardModel from "./model";
import "./style.scss";

export class CircularGaugeBase extends BaseComponent<TProps> {
  private gauge: CircularGaugeComponent;
  private id: string = Math.floor(Math.random() * 100).toString();

  annotationTemplate() {
    if (this.props.toggle) {
      return (
        '<div style="width:90px;text-align:center;font-size:20px;font-family:Roboto">${pointers[0].value} ' +
        this.props.gaugeRenderData.unit +
        "</div>"
      );
    } else
      return '<div style="width:90px;text-align:center;font-size:20px;font-family:Roboto"> N/A </div>';
  }

  calcHeight = (): string => {
    return (parseInt(this.props.height) - 230).toString() + "px";
  };

  calcWidth = (): string => {
    return (parseInt(this.props.width) - 20).toString() + "px";
  };

  render() {
    const { gaugeRenderData, model } = this.props;
    return (
      <div className="gauge-main">
        <CircularGaugeComponent
          centerY="65%"
          style={{ height: this.calcHeight(), width: this.calcWidth() }}
          ref={(gauge) => (this.gauge = gauge)}
          id={this.id}
        >
          <Inject services={[Annotations]} />
          <AxesDirective>
            <AxisDirective
              minimum={gaugeRenderData.rangeStart}
              maximum={gaugeRenderData.rangeEnd}
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
                  content={this.annotationTemplate()}
                  angle={180}
                  zIndex="1"
                  radius="30%"
                />
              </AnnotationsDirective>
              <RangesDirective>
                <RangeDirective
                  start={gaugeRenderData.rangeVeryLowStart}
                  end={gaugeRenderData.rangeVeryLowEnd}
                  radius="100%"
                  color={model.vlRangeColor}
                />
                <RangeDirective
                  start={gaugeRenderData.rangeLowStart}
                  end={gaugeRenderData.rangeLowEnd}
                  radius="100%"
                  color={model.lRangeColor}
                />
                <RangeDirective
                  start={gaugeRenderData.rangeHighStart}
                  end={gaugeRenderData.rangeHighEnd}
                  radius="100%"
                  color={model.hRangeColor}
                />
                <RangeDirective
                  start={gaugeRenderData.rangeVeryHighStart}
                  end={gaugeRenderData.rangeVeryHighEnd}
                  radius="100%"
                  color={model.vhRangeColor}
                />
              </RangesDirective>
            </AxisDirective>
          </AxesDirective>
        </CircularGaugeComponent>
      </div>
    );
  }

  gauge5Interval1 = setInterval((): void => {
    if (this.gauge) {
      let newVal: number;
      if (!this.props.toggle) {
        newVal = 0;
      } else {
        if (this.gauge.axes[0].pointers[0].value == 0) {
          newVal = this.props.gaugeData.cur;
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
  }, 1000);
}

type TState = {};

type TProps = {
  gaugeRenderData: any;
  gaugeFooterData: any;
  gaugeData: any;
  toggle: boolean;
  model: FlipcardModel;
  height: string;
  width: string;
};
