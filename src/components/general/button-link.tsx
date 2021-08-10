// ButtonLink/index.jsx
import React from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

type TProps = {
  [key: string]: any;
  className?: string;
};

/**
 * Button Link
 */
class ButtonLink extends React.Component<TProps> {
  render() {
    const { className, ...props } = this.props;
    return <Button basic className={['link', className].join(' ')} {...props} />;
  }
}

export { ButtonLink };
