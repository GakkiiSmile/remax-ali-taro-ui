import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { ScrollView, View } from "remax/ali";
import { delayQuerySelector, isTest, pxTransform, uuid, } from "../../common/utils";
import AtList from "../list/index";
import AtListItem from "../list/item/index";
import AtToast from "../toast/index";
export default class AtIndexes extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = (item) => {
            this.props.onClick && this.props.onClick(item);
        };
        this.handleTouchMove = (event) => {
            event.stopPropagation();
            event.preventDefault();
            const { list } = this.props;
            const pageY = event.touches[0].pageY;
            const index = Math.floor((pageY - this.startTop) / this.itemHeight);
            if (index >= 0 && index <= list.length && this.currentIndex !== index) {
                this.currentIndex = index;
                const key = index > 0 ? list[index - 1].key : "top";
                const touchView = `at-indexes__list-${key}`;
                this.jumpTarget(touchView, index);
            }
        };
        this.handleTouchEnd = () => {
            this.currentIndex = -1;
        };
        this.state = {
            _scrollIntoView: "",
            _scrollTop: 0,
            _tipText: "",
            _isShowToast: false,
        };
        // 右侧导航高度
        this.menuHeight = 0;
        // 右侧导航距离顶部高度
        this.startTop = 0;
        // 右侧导航元素高度
        this.itemHeight = 0;
        // 当前索引
        this.currentIndex = -1;
        this.listId = isTest() ? "indexes-list-AOTU2018" : `list-${uuid()}`;
    }
    jumpTarget(_scrollIntoView, idx) {
        const { topKey = "Top", list } = this.props;
        const _tipText = idx === 0 ? topKey : list[idx - 1].key;
        this.updateState({
            _scrollIntoView,
            _tipText,
        });
    }
    __jumpTarget(key) {
        const { list } = this.props;
        // const index = _findIndex(list, ['key', key])
        const index = list.findIndex((item) => item.key === key);
        const targetView = `at-indexes__list-${key}`;
        this.jumpTarget(targetView, index + 1);
    }
    updateState(state) {
        const { isShowToast } = this.props;
        const { _scrollIntoView, _tipText, _scrollTop } = state;
        // TODO: Fix dirty hack
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        this.setState({
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText,
            _scrollTop: _scrollTop,
            _isShowToast: isShowToast,
        }, 
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        () => {
            clearTimeout(this.timeoutTimer);
            this.timeoutTimer = setTimeout(() => {
                this.setState({
                    _tipText: "",
                    _isShowToast: false,
                });
            }, 3000);
        });
    }
    initData() {
        delayQuerySelector(".at-indexes__menu").then((rect) => {
            var _a, _b;
            const len = this.props.list.length;
            // @ts-ignore
            this.menuHeight = (_a = rect[0]) === null || _a === void 0 ? void 0 : _a.height;
            // @ts-ignore
            this.startTop = (_b = rect[0]) === null || _b === void 0 ? void 0 : _b.top;
            this.itemHeight = Math.floor(this.menuHeight / (len + 1));
        });
    }
    handleScroll(e) {
        if (e && e.detail) {
            this.setState({
                _scrollTop: e.detail.scrollTop,
            });
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.list.length !== this.props.list.length) {
            this.initData();
        }
    }
    componentDidMount() {
        this.initData();
    }
    UNSAFE_componentWillMount() {
        this.props.onScrollIntoView &&
            this.props.onScrollIntoView(this.__jumpTarget.bind(this));
    }
    render() {
        const { className, customStyle, animation, topKey, list } = this.props;
        const { _scrollIntoView, _tipText, _isShowToast } = this.state;
        const toastStyle = { minWidth: pxTransform(100) };
        const rootCls = classNames("at-indexes", className);
        const menuList = list.map((dataList, i) => {
            const { key } = dataList;
            const targetView = `at-indexes__list-${key}`;
            return (React.createElement(View, { className: "at-indexes__menu-item", key: key, onClick: this.jumpTarget.bind(this, targetView, i + 1) }, key));
        });
        const indexesList = list.map((dataList) => (React.createElement(View, { id: `at-indexes__list-${dataList.key}`, className: "at-indexes__list", key: dataList.key },
            React.createElement(View, { className: "at-indexes__list-title" }, dataList.title),
            React.createElement(AtList, null, dataList.items &&
                dataList.items.map((item) => (React.createElement(AtListItem, { key: item.name, title: item.name, onClick: this.handleClick.bind(this, item) })))))));
        return (React.createElement(View, { className: rootCls, style: customStyle },
            React.createElement(AtToast, { customStyle: toastStyle, isOpened: _isShowToast, text: _tipText, duration: 2000 }),
            React.createElement(View, { className: "at-indexes__menu", onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd },
                React.createElement(View, { className: "at-indexes__menu-item", onClick: this.jumpTarget.bind(this, "at-indexes__top", 0) }, topKey),
                menuList),
            React.createElement(ScrollView, { className: "at-indexes__body", id: this.listId, scrollY: true, scrollWithAnimation: animation, 
                // eslint-disable-next-line no-undefined
                scrollIntoView: _scrollIntoView, onScroll: this.handleScroll.bind(this) },
                React.createElement(View, { className: "at-indexes__content", id: "at-indexes__top" }, this.props.children),
                indexesList)));
    }
}
AtIndexes.propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    animation: PropTypes.bool,
    isShowToast: PropTypes.bool,
    topKey: PropTypes.string,
    list: PropTypes.array,
    onClick: PropTypes.func,
    onScrollIntoView: PropTypes.func,
};
AtIndexes.defaultProps = {
    customStyle: "",
    className: "",
    animation: false,
    topKey: "Top",
    isShowToast: true,
    list: [],
};
//# sourceMappingURL=index.js.map