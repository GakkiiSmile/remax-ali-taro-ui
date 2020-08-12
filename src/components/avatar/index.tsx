import classNames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import React from "react";
import { Image, Text, View } from "remax/ali";
import { AtAvatarProps, AtAvatarState } from "../../../types/avatar";

const SIZE_CLASS = {
  large: "large",
  normal: "normal",
  small: "small",
};

export default class AtAvatar extends React.Component<
  AtAvatarProps,
  AtAvatarState
> {
  public static defaultProps: AtAvatarProps;
  public static propTypes: InferProps<AtAvatarProps>;

  public constructor(props: AtAvatarProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { size, circle, image, text, customStyle } = this.props;
    const rootClassName = ["at-avatar"];
    const iconSize = SIZE_CLASS[size || "normal"];
    const classObject = {
      [`at-avatar--${iconSize}`]: iconSize,
      "at-avatar--circle": circle,
    };

    let letter = "";
    if (text) letter = text[0];

    let elem: React.ReactNode;
    if (image) {
      elem = <Image className="at-avatar__img" src={image} />;
    } else {
      elem = <Text className="at-avatar__text">{letter}</Text>;
    }
    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
      >
        {elem}
      </View>
    );
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
