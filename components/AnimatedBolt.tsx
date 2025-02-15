import icons from "@/constants/icons";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const AnimatedBolt = () => {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, { duration: 300, easing: Easing.ease }),
      -1,
      true
    );

    rotation.value = withRepeat(
      withTiming(10, { duration: 300, easing: Easing.ease }),
      -1,
      true
    );
  }, [scale, rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <Animated.Image
      source={icons.boltHeader}
      style={[
        {
          width: 40,
          height: 40,
          resizeMode: "contain",
        },
        animatedStyle,
      ]}
    />
  );
};

export default AnimatedBolt;
