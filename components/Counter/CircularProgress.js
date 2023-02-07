import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { interpolate, multiply, Extrapolate, lessThan } from "react-native-reanimated";
import HalfCircle from "./HalfCircle";
import { PI, RADIUS } from "../Utilities/Constants";
import { transformOrigin } from 'react-native-redash/src/v1';

interface CircularProgressProps {
  progress: Animated.Node<number>;
  bg: string;
  fg: string;
}

const CircularProgress = ({ elapsedTime, bg, fg }: CircularProgressProps) => {
  const theta = multiply(elapsedTime, 2 * PI);
  const rotateTop = interpolate(theta, {
    inputRange: [0, PI],
    outputRange: [0, PI],
    extrapolate: Extrapolate.CLAMP,
  })
  const opacity = lessThan(theta, PI);
  const rotateBottom = interpolate(theta, {
    inputRange: [PI, 2 * PI],
    outputRange: [0, PI],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <View style={{ zIndex: 1 }}>
        <HalfCircle color={fg} />
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({x: 0, y: RADIUS / 2}, { rotate: rotateTop }),
            opacity,
          }}>
          <HalfCircle color={bg} />
        </Animated.View>
      </View>
      <View style={{ transform: [{rotate: '180deg'}] }}>
        <HalfCircle color={fg} />
        <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: transformOrigin({x: 0, y: RADIUS / 2}, { rotate: rotateBottom }),
        }}
        >
          <HalfCircle color={bg} />
        </Animated.View>
      </View>
    </>
  );
}

export default CircularProgress;
