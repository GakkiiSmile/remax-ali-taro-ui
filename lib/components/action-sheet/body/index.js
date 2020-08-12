import classNames from 'classnames';
import React from 'react';
import { View } from 'remax/ali';
export default class AtActionSheetBody extends React.Component {
    render() {
        const rootClass = classNames('at-action-sheet__body', this.props.className);
        return React.createElement(View, { className: rootClass }, this.props.children);
    }
}
//# sourceMappingURL=index.js.map