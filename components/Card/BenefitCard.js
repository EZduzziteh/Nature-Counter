import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY, THEME_GREEN } from '../Utilities/Constants';
import baseUrl from '../../helpers/baseUrl';
import { Text, TouchableOpacity, View } from 'react-native';
import { Circle, SvgUri, Svg } from 'react-native-svg';
import SvgUriCustom from '../../helpers/SvgUriCustom'
import ProgressBar from '../Utilities/ProgressBar';

const StyledCard = styled.View`
  background-color: white;
  width: 120px;
  height: 150px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 5px rgba(0,0,0, 0.10);
`;

const StyledTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-top: -55px;
`;

const StyledText = styled.Text`
  font-size: 10px;
  color: ${DARK_GREY};
`;

/**
 *
 * @param icon
 * @param title
 * @param text
 * @return {JSX.Element}
 * @constructor
 */
const BenefitCard = ({ icon, title, progress }) => {
  const iconUrl = `${baseUrl}icons/${icon}`;
  console.log("URL in render BenefitCard:", iconUrl);
  return (
    <StyledCard>
      <Svg>
        <Circle
          cx="22"
          cy="22"
          r="22"
          fill="rgba(36, 191, 156, 0.08)"
        />
        <SvgUriCustom
          uri={iconUrl}
          height={40}
          width={40}
        />
      </Svg>
      <StyledTitle>
        {title}
      </StyledTitle>
      <ProgressBar progress={progress} />
    </StyledCard>
  );
};

export default BenefitCard;

const RenderBenefit = ({ item, index }) => {
  const iconUrl = `${baseUrl}icons/${item.icon}`;
  console.log("URL in render BenefitCard:", iconUrl);
  return (
    <TouchableOpacity style={styles.benefits}>
      <View>
        <View
          style={
            goalTime + 1 < item.gainTime
              ? styles.benefitTypeIcon
              : styles.benefitTypeIconActive
          }
        >
          <SvgUriCustom
            width="40"
            height="40"
            source={{ uri: iconUrl }}
            fill={
              goalTime + 1 < item.gainTime
                ? '#b3b3b3'
                : '#24BF9C'
            }
          />
        </View>

        <Text
          numberOfLines={2}
          style={
            goalTime + 1 < item.gainTime
              ? styles.benefitType
              : styles.benefitTypeActive
          }
        >
          {item.benefit}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
