import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GradientBorderView} from '@good-react-native/gradient-border';

const ScannerMaker = () => {
  return (
    <View style={styles.container}>
      {/* Top left corner  */}
      <GradientBorderView
        gradientProps={{
          colors: ['#F3CD6B', '#BD7D08'],
        }}
        style={[styles.corner, styles.topLeft]}
      />

      {/* Top right corner */}
      <GradientBorderView
        gradientProps={{
          colors: ['#F3CD6B', '#BD7D08'],
        }}
        style={[styles.corner, styles.topRight]}
      />

      {/* Bottom left corner */}
      <GradientBorderView
        gradientProps={{
          colors: ['#F3CD6B', '#BD7D08'],
        }}
        style={[styles.corner, styles.bottomLeft]}
      />

      {/* Bottom right corner */}
      <GradientBorderView
        gradientProps={{
          colors: ['#F3CD6B', '#BD7D08'],
        }}
        style={[styles.corner, styles.bottomRight]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: 270,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 7,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
});

export default ScannerMaker;
