import classNames from "classnames";
import _inRange from "lodash/inRange";
import _isEmpty from "lodash/isEmpty";
import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "remax/ali";
import { delayGetClientRect, delayGetScrollOffset, uuid, } from "../../common/utils";
import AtSwipeActionOptions from "./options/index";
export default class AtSwipeAction extends React.Component {
    constructor(props) {
        super(props);
        this.computeTransform = (value) => value ? `translate3d(${value}px,0,0)` : null;
        this.handleOpened = (event) => {
            const { onOpened } = this.props;
            if (typeof onOpened === "function" && this.state._isOpened) {
                onOpened(event);
            }
        };
        this.handleClosed = (event) => {
            const { onClosed } = this.props;
            if (typeof onClosed === "function" && !this.state._isOpened) {
                onClosed(event);
            }
        };
        this.handleTouchStart = (e) => {
            const { clientX, clientY } = e.touches[0];
            if (this.props.disabled)
                return;
            this.getDomInfo();
            this.startX = clientX;
            this.startY = clientY;
            this.isTouching = true;
        };
        this.handleTouchMove = (e) => {
            if (_isEmpty(this.domInfo)) {
                return;
            }
            const { startX, startY } = this;
            const { top, bottom, left, right } = this.domInfo;
            const { clientX, clientY, pageX, pageY } = e.touches[0];
            const x = Math.abs(clientX - startX);
            const y = Math.abs(clientY - startY);
            const inDom = _inRange(pageX, left, right) && _inRange(pageY, top, bottom);
            if (!this.isMoving && inDom) {
                this.isMoving =
                    y === 0 ||
                        x / y >= Number.parseFloat(Math.tan((45 * Math.PI) / 180).toFixed(2));
            }
            if (this.isTouching && this.isMoving) {
                e.preventDefault();
                const offsetSize = clientX - this.startX;
                const isRight = offsetSize > 0;
                if (this.state.offsetSize === 0 && isRight)
                    return;
                const value = this.endValue + offsetSize;
                this.setState({
                    offsetSize: value >= 0 ? 0 : value,
                });
            }
        };
        this.handleTouchEnd = (event) => {
            this.isTouching = false;
            const { offsetSize } = this.state;
            this.endValue = offsetSize;
            const breakpoint = this.maxOffsetSize / 2;
            const absOffsetSize = Math.abs(offsetSize);
            if (absOffsetSize > breakpoint) {
                this._reset(true);
                this.handleOpened(event);
                return;
            }
            this._reset(false); // TODO: Check behavior
            this.handleClosed(event);
        };
        this.handleDomInfo = ({ width }) => {
            const { _isOpened } = this.state;
            this.maxOffsetSize = width;
            this._reset(_isOpened);
        };
        this.handleClick = (item, index, event) => {
            const { onClick, autoClose } = this.props;
            if (typeof onClick === "function") {
                onClick(item, index, event);
            }
            if (autoClose) {
                this._reset(false); // TODO: Check behavior
                this.handleClosed(event);
            }
        };
        const { isOpened } = props;
        this.endValue = 0;
        this.startX = 0;
        this.startY = 0;
        this.maxOffsetSize = 0;
        this.domInfo = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };
        this.isMoving = false;
        this.isTouching = false;
        this.state = {
            componentId: uuid(),
            offsetSize: 0,
            _isOpened: !!isOpened,
        };
    }
    getDomInfo() {
        return Promise.all([
            delayGetClientRect({
                delayTime: 0,
                selectorStr: `#swipeAction-${this.state.componentId}`,
            }),
            delayGetScrollOffset({ delayTime: 0 }),
        ]).then(([rect, scrollOffset]) => {
            rect[0].top += scrollOffset[0].scrollTop;
            rect[0].bottom += scrollOffset[0].scrollTop;
            this.domInfo = rect[0];
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { isOpened } = nextProps;
        const { _isOpened } = this.state;
        if (isOpened !== _isOpened) {
            this._reset(!!isOpened); // TODO: Check behavior
        }
    }
    _reset(isOpened) {
        this.isMoving = false;
        this.isTouching = false;
        if (isOpened) {
            this.endValue = -this.maxOffsetSize;
            this.setState({
                _isOpened: true,
                offsetSize: -this.maxOffsetSize,
            });
        }
        else {
            this.endValue = 0;
            this.setState({
                offsetSize: 0,
                _isOpened: false,
            });
        }
    }
    render() {
        const { offsetSize, componentId } = this.state;
        const { options } = this.props;
        const rootClass = classNames("at-swipe-action", this.props.className);
        const transform = this.computeTransform(offsetSize);
        const transformStyle = transform ? { transform } : {};
        return (React.createElement(View, { id: `swipeAction-${componentId}`, className: rootClass, onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd, onTouchStart: this.handleTouchStart },
            React.createElement(View, { className: classNames("at-swipe-action__content", {
                    animtion: !this.isTouching,
                }), style: transformStyle }, this.props.children),
            Array.isArray(options) && options.length > 0 ? (React.createElement(AtSwipeActionOptions, { options: options, componentId: componentId, onQueryedDom: this.handleDomInfo }, options.map((item, key) => (React.createElement(View, { key: `${item.text}-${key}`, style: item.style, onClick: (e) => this.handleClick(item, key, e), className: classNames("at-swipe-action__option", item.className) },
                React.createElement(Text, { className: "option__text" }, item.text)))))) : null));
    }
}
AtSwipeAction.defaultProps = {
    options: [],
    isOpened: false,
    disabled: false,
    autoClose: false,
};
AtSwipeAction.propTypes = {
    isOpened: PropTypes.bool,
    disabled: PropTypes.bool,
    autoClose: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        className: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array,
        ]),
    })),
    onClick: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
};
//# sourceMappingURL=index.js.map