import React from 'react';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';

class SemanticPopover extends React.Component<TProps, TState> {
  /**
   * default state
   */
  state: TState = {
    isPopoverOpen: false,
  };

  /**
   * pop over toggler
   * @returns  void
   */
  togglePopover = () => {
    this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
  };

  render() {
    const { children, trigger, onOpen } = this.props;
    const { isPopoverOpen } = this.state;
    return (
      <Popup
        trigger={trigger}
        position="bottom right"
        open={isPopoverOpen}
        offset={[10, 0]}
        onClose={this.togglePopover}
        onOpen={() => {
          this.togglePopover();
          onOpen?.();
        }}
        children={children({
          togglePopover: this.togglePopover,
        })}
        on="click"
        hideOnScroll
      />
    );
  }
}

/**
 *  TProps
 */
type TProps = {
  children(data: any): React.ReactNode;
  trigger: React.ReactNode;
  onOpen: Function;
};

/**
 * TState
 */
type TState = {
  isPopoverOpen: boolean;
};

export { SemanticPopover as default };
