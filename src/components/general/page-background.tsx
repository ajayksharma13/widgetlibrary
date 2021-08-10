import React from 'react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

/**
 * Page background
 */
class PageBackground extends React.Component<TProps> {
  render() {
    const { children, top, opacity = 0.9, imageUrl, backgroundOpacity, waveUrl = "/assets/images/wave.svg" } = this.props;
    return (
      <div
        className="background-section"
        style={{
          background: `linear-gradient(180deg, rgba(255,255,255, ${opacity}), rgba(255,255,255, ${opacity})), url(${imageUrl})`,

          opacity: backgroundOpacity,
        }}
      >
        <Image
          className="wave"
          src={waveUrl}
          alt="wave-svg"
          style={{
            top,
          }}
        />
        {children}
      </div>
    );
  }
}

type TProps = {
  children?: any;
  top: string;
  imageUrl: string;
  waveUrl?: string;
  opacity?: string;
  backgroundOpacity: string;
};

export { PageBackground };
