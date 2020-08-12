import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'remax/ali';
export default class AtActionSheetItem extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (args) => {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(args);
            }
        };
    }
    render() {
        const rootClass = classNames('at-action-sheet__item', this.props.className);
        return (React.createElement(View, { className: rootClass, onClick: this.handleClick }, this.props.children));
    }
}
AtActionSheetItem.propTypes = {
    onClick: PropTypes.func
};
//# sourceMappingURL=index.js.map