import * as React from "react";
import { Button, Icon, Popup, Segment } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import "./style.scss";

/**
 * Widget panel
 */
class WidgetPanel extends BaseComponent<TProps> {
  propertyRef = React.createRef<any>();
  /**
   * default state
   */
  state: TState = {
    isOpenProperty: false,
    propertyStyle: {},
  };

  /**
   * default props
   */
  static defaultProps: Omit<TProps, "Property" | "model" | "children"> = {
    id: Math.floor(Math.random() * 100).toString(),
    title: "Widget Header",
    renderData: {},
    gaugeCount: 1,
  };

  private onOpenProperty = () => {
    this.setState({ isOpenProperty: true }, () =>
      this.setState({
        propertyStyle: {
          marginLeft: "2em",
          marginTop: `calc(${this.propertyRef.current?.clientHeight ??
            0}px - 1.7em)`,
        },
      })
    );
  };

  private onCloseProperty = () => {
    this.setState({
      isOpenProperty: false,
    });
  };

  render() {
    const { id, title, model, children, Property, onRemove } = this.props;
    const PropertyComponent = Property as React.ComponentClass<any>;
    const { isOpenProperty, propertyStyle } = this.state;
    return (
      <div className="panel">
        <div
          className="remove"
          title="Remove Widget"
          onClick={() => onRemove?.(id)}
        >
          <Icon name="close" className="white"></Icon>
        </div>
        {title && (
          <div className="panel__header">
            <div className="title">{title}</div>
            <div className="property">
              <Popup
                trigger={
                  <Icon
                    size="large"
                    className="property__icon"
                    name="ellipsis horizontal"
                  />
                }
                style={propertyStyle}
                content={
                  <div className="property__bar" ref={this.propertyRef}>
                    <PropertyComponent
                      model={model}
                      onUpdatePanel={this.forceUpdate.bind(this)}
                      renderData={this.props.renderData}
                      gaugeCount={this.props.gaugeCount}
                    />
                  </div>
                }
                on="click"
                open={isOpenProperty}
                onClose={this.onCloseProperty}
                onOpen={this.onOpenProperty}
                position="right center"
              />
            </div>
          </div>
        )}
        <div className="panel__content">{children()}</div>
        {/* <div className="panel__footer"></div> */}
      </div>
    );
  }
}

type TProps = {
  id: string;
  title?: string;
  model: any;
  onRemove?: Function;
  Property: React.ComponentClass<any>;
  children(data?: any): React.ReactNode;
  renderData: any;
  gaugeCount: number;
};

type TState = {
  isOpenProperty: boolean;
  propertyStyle: any;
};

export { WidgetPanel as default };
