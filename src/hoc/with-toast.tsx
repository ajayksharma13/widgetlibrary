import * as React from 'react';
import { toast, ToastOptions } from 'react-semantic-toasts';

const options: ToastOptions = {
  title: 'Info',
  type: 'info',
  icon: 'info',
  animation: 'fly left',
  time: 6000,
  description: 'Unstock alert box',
};

const alert = (
  { title, type, time = 6000, ...restOptions }: ToastOptions = options,
  onClose?: Function,
  onClick?: Function,
  onDismiss?: Function,
) => {
  return new Promise(resolve => {
    toast(
      {
        title,
        type,
        time,
        ...restOptions,
      },
      () => {
        onClose?.();
        resolve(true);
      },
      () => {
        onClick?.();
        resolve(true);
      },
      () => {
        onDismiss?.();
        resolve(true);
      },
    );
  });
};

/**
 * Toast HOC
 * @param WrappedComponent
 */
const withToastHOC = <T extends {}>(WrappedComponent: React.ComponentType<T>) => {
  return class RouterHOC extends React.Component<T> {
    // /**
    //  *
    //  * @param param Toast options
    //  */
    // private alert(
    //   { title, type, time, ...restOptions }: ToastOptions = options,
    //   onClose?: Function,
    //   onClick?: Function,
    //   onDismiss?: Function,
    // ) {
    //   toast(
    //     {
    //       title,
    //       type,
    //       time,
    //       ...restOptions,
    //     },
    //     () => {
    //       onClose?.();
    //     },
    //     () => {
    //       onClick?.();
    //     },
    //     () => {
    //       onDismiss?.();
    //     },
    //   );
    // }

    render() {
      const { ...restProps } = this.props as T;
      return <WrappedComponent alert={alert} {...restProps}></WrappedComponent>;
    }
  };
};

export { withToastHOC as default, alert };
