import React, { useRef } from 'react';
import { Animated, View, Text, Button } from 'react-native';

const RotateAnimation = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotateClockwise = () => {
    Animated.timing(rotateAnim, {
      toValue: 1, // Rotate 360 degrees clockwise
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const rotateCounterClockwise = () => {
    Animated.timing(rotateAnim, {
      toValue: -1, // Rotate 360 degrees counterclockwise
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'], // Rotate from 0 to 360 degrees clockwise
              }),
            },
          ],
        }}>
        <Text style={{ fontSize: 24, marginVertical: 30 }}>Hello, React Native!</Text>
      </Animated.View>
      <Button title="Rotate Clockwise" onPress={rotateClockwise} />
       <View style={{ fontSize: 24, marginVertical: 10 }}>
      <Button title="Rotate Counter Clockwise" onPress={rotateCounterClockwise} />
    </View>
    </View>
  );
};

export default RotateAnimation;
