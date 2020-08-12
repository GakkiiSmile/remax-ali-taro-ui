import classNames from 'classnames';
import React from 'react';
import { View } from 'remax/ali';
export default class AtModalHeader extends React.Component {
    render() {
        const rootClass = classNames('at-modal__header', this.props.className);
        return React.createElement(View, { className: rootClass }, this.props.children);
    }
}
//# sourceMappingURL=index.js.map