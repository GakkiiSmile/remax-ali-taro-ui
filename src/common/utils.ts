import { createSelectorQuery } from "remax/ali";

function delay(delayTime = 25): Promise<null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayTime);
  });
}

function delayQuerySelector(
  selectorStr: string,
  delayTime = 500
): Promise<my.SelectorResult> {
  return new Promise((resolve) => {
    const selector = createSelectorQuery();
    delay(delayTime).then(() => {
      selector
        .select(selectorStr)
        .boundingClientRect()
        .exec((res) => {
          resolve(res);
        });
    });
  });
}

function delayGetScrollOffset({ delayTime = 500 }): Promise<any[]> {
  return new Promise((resolve) => {
    delay(delayTime).then(() => {
      createSelectorQuery()
        .selectViewport()
        .scrollOffset()
        .exec((res: any[]) => {
          resolve(res);
        });
    });
  });
}

function delayGetClientRect({
  selectorStr,
  delayTime = 500,
}): Promise<my.SelectorResult> {
  const selector = createSelectorQuery();

  return new Promise((resolve) => {
    delay(delayTime).then(() => {
      selector
        .select(selectorStr)
        .boundingClientRect()
        .exec((res) => {
          resolve(res);
        });
    });
  });
}

function uuid(len = 8, radix = 16): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  const value: string[] = [];
  let i = 0;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) value[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    let r;

    // rfc4122 requires these characters
    /* eslint-disable-next-line */
    value[8] = value[13] = value[18] = value[23] = "-";
    value[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | (Math.random() * 16);
        value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return value.join("");
}

interface EventDetail {
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
  offsetX: number;
  offsetY: number;
  x: number;
  y: number;
}

function getEventDetail(event: any): EventDetail {
  return {
    pageX: event.target.pageX,
    pageY: event.target.pageY,
    clientX: event.target.clientX,
    clientY: event.target.clientY,
    offsetX: event.target.offsetLeft,
    offsetY: event.target.offsetTop,
    x: event.target.x,
    y: event.target.y,
  };
}

function isTest(): boolean {
  return process.env.NODE_ENV === "test";
}

function pxTransform(size: number): string {
  if (!size) return "";
  const designWidth = 750;
  const deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  };
  return `${size / deviceRatio[designWidth]}rpx`;
}

function objectToString(style: object | string): string {
  if (style && typeof style === "object") {
    let styleStr = "";
    Object.keys(style).forEach((key) => {
      const lowerCaseKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      styleStr += `${lowerCaseKey}:${style[key]};`;
    });
    return styleStr;
  } else if (style && typeof style === "string") {
    return style;
  }
  return "";
}

/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
function mergeStyle(
  style1: object | string,
  style2: object | string
): object | string {
  if (
    style1 &&
    typeof style1 === "object" &&
    style2 &&
    typeof style2 === "object"
  ) {
    return Object.assign({}, style1, style2);
  }
  return objectToString(style1) + objectToString(style2);
}

export {
  delay,
  delayQuerySelector,
  uuid,
  getEventDetail,
  isTest,
  pxTransform,
  delayGetClientRect,
  delayGetScrollOffset,
  mergeStyle,
};
