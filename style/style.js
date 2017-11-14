import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "margin-top": {
        "marginTop": 5
    },
    "margin-bottom": {
        "marginBottom": 5
    },
    "margin-left": {
        "marginLeft": 5
    },
    "margin-right": {
        "marginRight": 5
    }
});