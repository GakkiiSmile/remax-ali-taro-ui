import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Image, Text, View } from "remax/ali";
const SIZE_CLASS = {
    large: "large",
    normal: "normal",
    small: "small",
};
export default class AtAvatar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { size, circle, image, text, customStyle } = this.props;
        const rootClassName = ["at-avatar"];
        const iconSize = SIZE_CLASS[size || "normal"];
        const classObject = {
            [`at-avatar--${iconSize}`]: iconSize,
            "at-avatar--circle": circle,
        };
        let letter = "";
        if (text)
            letter = text[0];
        let elem;
        if (image) {
            elem = React.createElement(Image, { className: "at-avatar__img", src: image });
        }
        else {
            elem = React.createElement(Text, { className: "at-avatar__text" }, letter);
        }
        return (React.createElement(View, { className: classNames(rootClassName, classObject, this.props.className), style: customStyle }, elem));
    }
}
AtAvatar.defaultProps = {
    size: "normal",
    circle: false,
    text: "",
    image: "",
    customStyle: {},
    className: "",
};
AtAvatar.propTypes = {
    size: PropTypes.oneOf(["large", "normal", "small"]),
    circle: PropTypes.bool,
    text: PropTypes.string,
    image: PropTypes.string,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
//# sourceMappingURL=index.js.map