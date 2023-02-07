import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native';
import styles from '../../components/Utilities/styles';
import baseUrl from '../../helpers/baseUrl';
import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY, MEDIUM_GREY, THEME_GREEN } from '../../components/Utilities/Constants';

export default function ArticleViewScreen({ route }) {
  const { selectedArticle } = route.params;
  const { image, healthCategory, title, subTitle, readTime, description } = selectedArticle;

  const Container = styled.ScrollView`
    flex: 1;
    max-width: ${Dimensions.get('window').width};
    background-color: white;
  `;

  const Hero = styled.View`
    position: relative;
    justify-content: center;
    display: flex;
    align-items: center;
  `;

  const StyledImage = styled.Image`
    max-width: ${Dimensions.get('window').width};
    max-height: ${Dimensions.get('window').height * 0.6};
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height * 0.33};
    margin-bottom: 10px;
  `;

  const ArticleContainer = styled.View`
    max-width: ${Dimensions.get('window').width};
    background-color: white;
    padding: 20px;
    flex: 1;
    position: relative;
    justify-content: flex-start;
  `;

  const HealthCategory = styled.Text`
    text-align: left;
    font-weight: 600;
    line-height: 16px;
    font-size: 14px;
    flex-wrap: wrap;
    color: ${THEME_GREEN};
  `;

  const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 20px;
    margin-top: 5px;
  `;

  const SubTitle = styled.Text`
    text-align: left;
    color: ${DARK_GREY};
    font-size: 14px;
    flex-wrap: wrap;
    margin-top: 5px;
  `;

  const ReadTime = styled.Text`
    text-align: left;
    color: ${DARK_GREY};
    font-size: 12px;
    margin-top: 5px;
  `;

  const Description = styled.Text`
    text-align: left;
    font-size: 16px;
    margin-top: 15px;
    line-height: 30px;
  `;

  const renderImageLocation = `${baseUrl}${image}`;

  return (
    <Container>
      <Hero>
        <StyledImage source={{ uri: renderImageLocation }} />
      </Hero>
      <ArticleContainer>
        <HealthCategory>{healthCategory}</HealthCategory>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <ReadTime>
          {readTime}
          {' '}
          min read
        </ReadTime>
        <Description>
          {description}
        </Description>
      </ArticleContainer>
    </Container>
  );
}
