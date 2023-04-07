import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { JournalTime2 } from '../../assets/icons/Journal';

const StyledIcon = styled.Image`
  height: 25px;
  width: 25px;
`;

const rotateByStyle = (percent, baseDegrees) => {
  const rotateBy = baseDegrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

const renderThirdLayer = (
  percent,
  commonStyles,
  ringColorStyle,
  ringBgColorStyle,
) => {
  if (percent > 50) {
    return (
      <View
        style={[
          styles.progressLayer,
          rotateByStyle(percent - 50, 45),
          commonStyles,
          ringColorStyle,
        ]}
      />
    );
  }
  return <View style={[styles.offsetLayer, commonStyles, ringBgColorStyle]} />;
};

const ProgressClock = (props) => {
  const {
    percent, radius, ringWidth, ringColor, ringBgColor,
  } = props;

  const commonStyles = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    borderWidth: ringWidth,
  };

  const ringColorStyle = {
    borderRightColor: ringColor,
    borderTopColor: ringColor,
  };

  const ringBgColorStyle = {
    borderRightColor: ringBgColor,
    borderTopColor: ringBgColor,
  };

  const DEFAULT_DEG_ROTATION = -135;
  let progressLayerStyle;
  if (percent > 50) {
    progressLayerStyle = rotateByStyle(50, DEFAULT_DEG_ROTATION);
  } else {
    progressLayerStyle = rotateByStyle(percent, DEFAULT_DEG_ROTATION);
  }

  return (
    <View style={[styles.container, commonStyles, { borderColor: ringBgColor }]}>
      <StyledIcon source={JournalTime2} />
      <View
        style={[
          styles.progressLayer,
          progressLayerStyle,
          commonStyles,
          ringColorStyle,
        ]}
      />
      {renderThirdLayer(
        percent,
        commonStyles,
        ringColorStyle,
        ringBgColorStyle,
      )}
    </View>
  );
};

ProgressClock.propTypes = {
  percent: PropTypes.number,
  radius: PropTypes.number,
  ringWidth: PropTypes.number,
  ringColor: PropTypes.string,
  ringBgColor: PropTypes.string,
};

ProgressClock.defaultProps = {
  percent: 0,
  radius: 17,
  ringWidth: 2,
  ringColor: '#459F5E',
  ringBgColor: 'rgba(244, 252, 250, 1)',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  offsetLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotateZ: '-135deg' }],
  },
  display: {
    position: 'absolute',
  },
});
export default ProgressClock;
