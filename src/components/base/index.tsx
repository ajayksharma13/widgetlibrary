import * as React from 'react';

/**
 * Base Component
 */
class BaseComponent<Props = {}, State = {}, Snapshot = {}> extends React.Component<Props, State, Snapshot> {}

export { BaseComponent };
