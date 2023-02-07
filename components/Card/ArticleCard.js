import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';
import NATURE from '../../assets/nature_photo.png';
import { DARK_GREY, THEME_GREEN } from '../Utilities/Constants';
import PropTypes from 'prop-types';

const StyledCard = styled.TouchableOpacity`
  flex-direction: row;
  background-color: white;
  padding: 20px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 5px rgba(0,0,0, 0.08);
`;

const StyledChip = styled.View`
  position: absolute;
  background-color: ${THEME_GREEN};
  padding: 7px 4px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledReadText = styled.Text`
  color: white;
  font-size: 12px;
`;

const StyledTextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const StyledCategory = styled.Text`
  color: ${THEME_GREEN};
  font-weight: bold;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  width: 220px;
`;

const StyledDesc = styled.Text`
  color: ${DARK_GREY};
  width: 200px;
`;

/**
 * Card to show an article
 * @param article
 * @return {JSX.Element}
 * @constructor
 */
const ArticleCard = ({ article, onPress }) => {
  const {
    _id, readTime, healthCategory, title, subTitle,
  } = article;

  const handleArticlePress = () => {
    onPress(article);
  };

  return (
    <StyledCard onPress={handleArticlePress} key={_id}>
      <View>
        <Image source={NATURE} />
        <StyledChip>
          <StyledReadText>
            {readTime}
            {' '}
            min read
          </StyledReadText>
        </StyledChip>
      </View>
      <StyledTextContainer>
        <StyledCategory>{healthCategory}</StyledCategory>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{subTitle}</StyledDesc>
      </StyledTextContainer>
    </StyledCard>
  );
};

export default ArticleCard;

ArticleCard.propTypes = {
  article: PropTypes.object,
  onPress: PropTypes.func,
};

ArticleCard.defaultProps = {
  article: {
    _id: '',
    readTime: 0,
    healthCategory: '',
    title: '',
    subTitle: '',
  },
  onPress: () => {},
};
