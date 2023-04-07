import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import MainContainer from '../../components/Container/MainContainer';
import NotFound from '../../components/Utilities/NotFound';
import { ArticleCard } from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { Menu } from 'react-native-paper';
import { MEDIUM_GREY } from '../../components/Utilities/Constants';
import { Icon } from 'react-native-elements';

/**
 * Styled Touchable Opacity for the Selector component
 */
const StyledSelector = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${MEDIUM_GREY};
  width: 140px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: white;
`;

/**
 * Styled View for the Header showing results and filter
 */
const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

/**
 * Screen showing a list of articles
 * @param articles
 * @return {JSX.Element}
 * @constructor
 */
export default function ArticleListScreen({ articles }) {
  const { data } = articles;

  const [selected, setSelected] = useState('All Benefits');
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const navigation = useNavigation();

  /**
   * Get list of Health Categories in articles
   * @type {unknown[]}
   */
  const categoryList = [...new Set(
      data.map(x => JSON.stringify((({ healthCategory }) => ({ healthCategory }))(x))))
      ].map(JSON.parse);

  /**
   * Filter articles based on the selected value of the picker
   */
  const filterArticles = data.filter(a => (a.healthCategory === selected));

  /**
   * If there are more than filtered articles
   * then show the filtered articles
   * else, show all articles
   */
  const renderArticleList = filterArticles.length !== 0 ? filterArticles : data;

  /**
   * Set selected to the category that was selected
   * then close the menu
   * @param category
   */
  const handleSelected = (category) => {
    setSelected(category);
    closeMenu();
  }

  /**
   * When an article is pressed,
   * take user to the view article screen with full article content
   * @param article
   */
  const handleArticlePress = (article) =>
    navigation.navigate('ArticleView', { selectedArticle: article });

  /**
   * Render the selector component
   * @param title
   * @param onPress
   * @return {JSX.Element}
   * @constructor
   */
  const Selector = ({title, onPress}) => (
    <StyledSelector onPress={onPress}>
      <Text>{title}</Text>
      <Icon
        name="chevron-down"
        type="material-community"
        color="#000"
        size={18}
      />
    </StyledSelector>
  );

  /**
   * Render the Menu component
   * and the options to select
   * @return {JSX.Element}
   */
  const renderMenu = () => (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Selector title={selected} onPress={openMenu} />}>
        <Menu.Item onPress={() => handleSelected("All Benefits")} title="All Benefits" />
      {
        categoryList.map((cat) => (
          <Menu.Item onPress={() => handleSelected(cat.healthCategory)} title={cat.healthCategory} />
        ))
      }
    </Menu>
  );

  /**
   * Render the articles in a View with 5 padding so there's proper spacing
   * @return {*}
   */
  const renderArticles = () => (
    renderArticleList?.map((b,i) => (
      <View rstyle={{ padding: 5 }}>
        <ArticleCard
          article={b}
          onPress={handleArticlePress}
        />
      </View>
    ))
  );

  /**
   * Renders header used to display
   * text showing how many results and
   * a selector for filtering articles by category
   * @return {JSX.Element}
   */
  const renderHeader = () => (
    <StyledHeader>
      <Text>
        Showing {renderArticleList?.length || 0} article{ renderArticleList.length > 1 ? 's' : null }
      </Text>
      { renderMenu() }
    </StyledHeader>
  )

    /**
     *  return either the list of articles or
     *  a label telling user no articles have been found
    */
  return (
    <MainContainer>
      { renderArticleList && renderHeader() }
      {
        renderArticleList
            ? renderArticles()
            : <NotFound item="Articles" />
      }
    </MainContainer>
  );
}
