import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SectionHeaderRow } from '../Row';
import { ArticleCard } from '../Card';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const ArticlesSection = ({ article, onPress }) => {
  const navigation = useNavigation();

  /**
   * When an article is pressed,
   * take user to the view article screen with full article content
   */
  const handleArticlePress = () =>
    navigation.navigate('ArticleView', { selectedArticle: article });

  return (
    <>
      <SectionHeaderRow title="Articles" onPress={onPress} />
      <StyledView>
        {
          article
            ? <ArticleCard article={article} onPress={handleArticlePress} />
            : <Text>No articles to show</Text>
        }
      </StyledView>
    </>
  );
};

export default ArticlesSection;
