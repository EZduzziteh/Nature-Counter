import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native';
import moment from 'moment';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import * as commonFun from '../../components/Utilities/commonFunctions';
import CounterSection from '../../components/Section/CounterSection';
import VerifyEmailBanner from '../../components/Row/VerifyEmailBanner';
import BenefitsGainedSection from '../../components/Section/BenefitsGainedSection';
import ArticlesSection from '../../components/Section/ArticlesSection';

/**
 * This is the screen after sign up and login
 * it's the main screen for authorized users
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const HomeScreen = ({
  user,
  benefits,
  articles,
  userisLoading,
  usererrmsg,
  userdetails,
}) => {
  const [userArticle, setuserArticle] = useState();
  const [userBenefitList, setuserBenefitList] = useState();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [refresh, setrefresh] = useState(true);
  const [limit, setLimit] = useState(30);
  const [elapsedTime, setElapsedTime] = useState(0.3);
  const [runTime, setRunTime] = useState(true);
  const { emailVerified } = auth()._user;
  const dispatch = useDispatch();
  const [featureArticle, setFeatureArticle] = useState();
  const [featuredBenefits, setFeaturedBenefits] = useState();
  const navigation = useNavigation();

  const handleBenefitsPress = () => {
    navigation.navigate('BenefitsList');
  };

  const handleSeeAllArticlesPress = () => {
    navigation.navigate('ArticleList');
  };

  useEffect(() => {
    async function getData() {
      try {
        if (
          typeof user?.goalDetail !== 'undefined'
          && benefits !== undefined
          && articles !== undefined
        ) {
          const userBenefit = await commonFun.filterUserBenefits(
            benefits,
            user?.goalDetail.goalTime,
          );
          const filterIds = await commonFun.filterHealthCategoryId(userBenefit);
          const selectedArticles = await commonFun.filterArticleById(
            articles,
            filterIds,
          );
          const uniqueSelectedArticles = await commonFun.uniqueSelectedArticlesbyFeature(
            selectedArticles,
          );

          setuserArticle(uniqueSelectedArticles);

          if (typeof user?.goalDetail.dailyActivity !== 'undefined') {
            const dailyActivityTime = await commonFun.dailyActivityTime(
              user?.goalDetail.dailyActivity,
            );

            const UserDailyBenefit = await commonFun.UserDailyBenefit(
              userBenefit,
              dailyActivityTime,
              selectedDate,
            );

            setuserBenefitList(UserDailyBenefit.slice(0, 3));
          }
          setrefresh(false);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getData();

    /**
     * if articles exist then take the first article
     * and make it the feature article
     */
    if (articles?.data) {
      setFeatureArticle(articles?.data[0]);
    }

    /**
     * if benefits exist then take the first 3 benefits
     * and make them the featured benefits
     */
    if (benefits?.data && benefits.data.length !== 0) {
      console.log("Benefits data:", benefits.data);
      setFeaturedBenefits(benefits.data.splice(0, 3));
    }

    /**
     * If a goal time is already set, then set it to that value
     * otherwise, the default value is 30
     */
    if (userdetails?.goalDetail?.goalTime !== undefined) {
      setLimit(60);
    }

    setLimit(userdetails?.goalDetail?.goalTime);
  }, [userdetails, benefits, articles, userisLoading]);

  /**
   * this is a toggle
   * if runTime is true, then set it to false to stop the timer
   * if runTime is false, then start the timer
   */
  const manageCounter = () => {
    runTime ? setRunTime(false) : setRunTime(true);
  };

  return (
    <SafeAreaView style={{ height: '100%' }}>
      {!emailVerified && <VerifyEmailBanner />}
      <CounterSection
        elapsedTime={elapsedTime}
        limit={limit}
        runTime={runTime}
        manageCounter={manageCounter}
        navigation={navigation}
      />
      <BenefitsGainedSection
        benefits={featuredBenefits}
        onPress={handleBenefitsPress}
      />
      <ArticlesSection
        article={featureArticle}
        onPress={handleSeeAllArticlesPress}
      />
    </SafeAreaView>
  );

  /**
   * CURRENTLY UNSUPPORTED
   * handles if user doesn't have a goal set and other conditions
   */
  /*
  if (typeof user.goalDetail !== 'undefined') {
    const currentGoalDetail = user.goalDetail;

    if (moment.utc().format() >= currentGoalDetail.endDate) {
      return (
        <TouchableOpacity>
          <View>
            <Text style={styles.goalTxt}>
              Currently You don&apos;t have any active Goal. Please set your goal
            </Text>
            <Text style={styles.goalTxt}>
              Your Last Goal Expired on
              {calenderFun.dateConverter(currentGoalDetail.endDate) }
            </Text>
            <Text style={styles.goalBtn} onPress={GoalNavigator}>
              Set Your Goal
            </Text>
          </View>
        </TouchableOpacity>
      );
    }

    if (benefits !== undefined || articles !== undefined) {
      return (
        <ScrollView style={styles.maincontainer}>

          <Overview
            navigation={navigation}
            currentGoalDetail={currentGoalDetail}
            goalTime={currentGoalDetail.goalTime}
            totalTime={user.CurrentNatureTime}
          />
          <View style={styles.HomeContainer}>
            <Text style={styles.titlename}>
              Benefits Gained
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('BenefitList')}
            >
              See All
            </Text>
          </View>
          <Benefit benefits={userBenefitList} navigation={navigation} />
          <View style={styles.HomeContainer}>
            <Text style={styles.titlename}>Articles</Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('ArticleList')}
            >
              See All
            </Text>
          </View>
          <Article article={userArticle} navigation={navigation} />
          <View />

        </ScrollView>
      );
    }
  }
   */
};

export default HomeScreen;
