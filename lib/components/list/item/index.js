import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Switch, Text, View } from 'remax/ali';
import { mergeStyle } from '../../../common/utils';
export default class AtListItem extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            if (typeof this.props.onClick === 'function' && !this.props.disabled) {
                this.props.onClick(event);
            }
        };
        this.handleSwitchChange = (event) => {
            if (typeof this.props.onSwitchChange === 'function' &&
                !this.props.disabled) {
                this.props.onSwitchChange(event);
            }
        };
    }
    handleSwitchClick(e) {
        e.stopPropagation();
    }
    render() {
        const { note, arrow, thumb, iconInfo, disabled, isSwitch, hasBorder, extraThumb, switchColor, switchIsCheck } = this.props;
        let { extraText, title } = this.props;
        extraText = String(extraText);
        title = String(title);
        const rootClass = classNames('at-list__item', {
            'at-list__item--thumb': thumb,
            'at-list__item--multiple': note,
            'at-list__item--disabled': disabled,
            'at-list__item--no-border': !hasBorder
        }, this.props.className);
        const iconClass = classNames((iconInfo && iconInfo.prefixClass) || 'at-icon', {
            [`${(iconInfo && iconInfo.prefixClass) || 'at-icon'}-${iconInfo && iconInfo.value}`]: iconInfo && iconInfo.value
        }, iconInfo && iconInfo.className);
        return (React.createElement(View, { className: rootClass, onClick: this.handleClick },
            React.createElement(View, { className: 'at-list__item-container' },
                thumb && (React.createElement(View, { className: 'at-list__item-thumb item-thumb' },
                    React.createElement(Image, { className: 'item-thumb__info', mode: 'scaleToFill', src: thumb }))),
                iconInfo && iconInfo.value && (React.createElement(View, { className: 'at-list__item-icon item-icon' },
                    React.createElement(Text, { className: iconClass, style: mergeStyle({
                            color: iconInfo.color || '',
                            fontSize: `${iconInfo.size || 24}px`
                        }, iconInfo.customStyle || '') }))),
                React.createElement(View, { className: 'at-list__item-content item-content' },
                    React.createElement(View, { className: 'item-content__info' },
                        React.createElement(View, { className: 'item-content__info-title' }, title),
                        note && React.createElement(View, { className: 'item-content__info-note' }, note))),
                React.createElement(View, { className: 'at-list__item-extra item-extra' },
                    extraText && React.createElement(View, { className: 'item-extra__info' }, extraText),
                    extraThumb && !extraText && (React.createElement(View, { className: 'item-extra__image' },
                        React.createElement(Image, { className: 'item-extra__image-info', mode: 'aspectFit', src: extraThumb }))),
                    isSwitch && !extraThumb && !extraText && (React.createElement(View, { className: 'item-extra__switch', onClick: this.handleSwitchClick },
                        React.createElement(Switch, { color: switchColor, disabled: disabled, checked: switchIsCheck, onChange: this.handleSwitchChange }))),
                    arrow ? (React.createElement(View, { className: 'item-extra__icon' },
                        React.createElement(Text, { className: `at-icon item-extra__icon-arrow at-icon-chevron-${arrow}` }))) : null))));
    }
}
AtListItem.defaultProps = {
    note: '',
    disabled: false,
    title: '',
    thumb: '',
    isSwitch: false,
    hasBorder: true,
    switchColor: '#6190E8',
    switchIsCheck: false,
    extraText: '',
    extraThumb: '',
    iconInfo: { value: '' }
};
AtListItem.propTypes = {
    note: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    thumb: PropTypes.string,
    onClick: PropTypes.func,
    isSwitch: PropTypes.bool,
    hasBorder: PropTypes.bool,
    switchColor: PropTypes.string,
    switchIsCheck: PropTypes.bool,
    extraText: PropTypes.string,
    extraThumb: PropTypes.string,
    onSwitchChange: PropTypes.func,
    arrow: PropTypes.oneOf(['up', 'down', 'right']),
    iconInfo: PropTypes.shape({
        size: PropTypes.number,
        value: PropTypes.string,
        color: PropTypes.string,
        prefixClass: PropTypes.string,
        customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    })
};
//# sourceMappingURL=index.js.map