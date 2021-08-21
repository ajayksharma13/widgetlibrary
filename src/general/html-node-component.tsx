import React from 'react';

class NodeComponent extends React.Component {

    /**
     * click handler
     * @returns 
     */
    handleClick = () => {
        console.log("this demo is working");

    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>demo</button>
            </div>
        )
    }
}

export { NodeComponent as default };
