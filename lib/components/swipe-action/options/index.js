import classNames from 'classnames';
import React from 'react';
import { View } from 'remax/ali';
import { delayQuerySelector } from '../../../common/utils';
export default class AtSwipeActionOptions extends React.Component {
    trrigerOptionsDomUpadte() {
        delayQuerySelector(`#swipeActionOptions-${this.props.componentId}`, 100).then(res => {
            this.props.onQueryedDom(res[0]);
        });
    }
    componentDidMount() {
        this.trrigerOptionsDomUpadte();
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.options !== this.props.options) {
            this.trrigerOptionsDomUpadte();
        }
    }
    render() {
        const rootClass = classNames('at-swipe-action__options', this.props.className);
        return (React.createElement(View, { id: `swipeActionOptions-${this.props.componentId}`, className: rootClass }, this.props.children));
    }
}
//# sourceMappingURL=index.js.map