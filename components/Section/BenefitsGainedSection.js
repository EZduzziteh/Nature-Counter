import React from 'react';
import { Text } from 'react-native';
import { StyledRow } from '../Utilities/commonStyle';
import SectionHeaderRow from '../Row/SectionHeaderRow';
import BenefitCard from '../Card/BenefitCard';

const BenefitsGainedSection = ({ benefits, onPress }) => {

  return (
    <>
      <SectionHeaderRow title="Benefits Gained" onPress={onPress} />
      { benefits && benefits.length > 0 ? (
        <StyledRow>
          { benefits.map((b) => {
            return (
              <BenefitCard
                key={b._id}
                icon={b.icon}
                title={b.benefit}
                progress={b.gainTime}
              />
            );
          })}
        </StyledRow>
      ) : <Text style={{textAlign: 'center'}}>No benefits to show</Text> }
    </>
  );
};

export default BenefitsGainedSection;
