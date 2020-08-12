import classNames from 'classnames';
import React from 'react';
import { ScrollView } from 'remax/ali';
export default class AtModalContent extends React.Component {
    render() {
        const rootClass = classNames('at-modal__content', this.props.className);
        return (React.createElement(ScrollView, { scrollY: true, className: rootClass }, this.props.children));
    }
}
//# sourceMappingURL=index.js.map