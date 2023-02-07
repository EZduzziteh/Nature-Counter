import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Text, SafeAreaView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator, DrawerContentScrollView, DrawerItemList,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fetchArticles } from '../../redux/actions/articleActions';
import { fetchBenefits } from '../../redux/actions/benefitActions';
import { fetchSymptoms } from '../../redux/actions/symptomActions';
import * as userActions from '../../redux/actions/userActions';
import styles from '../../components/Utilities/styles';
import ArticleDetail from './ArticleDetailScreen';
import HomeScreen from './HomeScreen';
import GoalSetting from './GoalSettingScreen';
import LogSymptoms from './LogSympyomScreen';
import GoalHistory from './GoalHistoryScreen';
import ReportScreen from './ReportScreen';
import MapScreen from './Discover/MapScreen';
import ProfileScreen from './ProfileScreen';
import { BLACK, MEDIUM_GREY } from '../../components/Utilities/Constants';
import BenefitsListScreen from './BenefitsListScreen';
import ArticleListScreen from './ArticleListScreen';
import ArticleViewScreen from './ArticleViewScreen';
import { LoggedSymptomsReportCard } from '../../components/Card';
import NatureDetailScreen from './Discover/NatureDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator({ symptom, userisLoading, usererrmsg }) {
  const userdetails = useSelector((state) => state.getIn(['UserDetails', 'userdetails']), userdetails);
  const articles = useSelector((state) => state.getIn(['ArticleData', 'articles']), articles);
  const benefits = useSelector((state) => state.getIn(['BenefitData', 'benefits']), benefits);

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        // gestureEnabled: true,
        // headerStyle: [styles.header],
        // headerTitleStyle: [styles.headerText],
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: '#F2F2F2', borderBottomWidth: 0 },
      })}
      headerMode="float"
    >
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'Nature Time',
        }}
      >
        {(props) => (
          <HomeScreen
            {...props}
            userdetails={userdetails}
            usererrmsg={usererrmsg}
            userisLoading={userisLoading}
            benefits={benefits}
            articles={articles}
            symptom={symptom}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ArticleDetail" options={{ title: 'Articles' }}>
        {(props) => (
          <ArticleDetail
            {...props}
            user={userdetails}
            articles={articles}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ArticleView" options={{ title: 'View Article' }}>
        {(props) => (
          <ArticleViewScreen
            {...props}
            user={userdetails}
            articles={articles}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ArticleList" options={{ title: 'Articles' }}>
        {(props) => (
          <ArticleListScreen
            {...props}
            articles={articles}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="LogSymptoms" options={{ title: 'Log Symptoms' }}>
        {(props) => (
          <LogSymptoms
            {...props}
            user={userdetails}
            symptom={symptom}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="GoalSetting" options={{ title: 'Set Your Goal of the Week' }}>
        {(props) => (
          <GoalSetting
            {...props}
            benefits={benefits}
            userdetails={userdetails}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="BenefitsList" options={{ title: 'Benefits Gained' }}>
        {(props) => (
          <BenefitsListScreen
            {...props}
            benefits={benefits}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="NatureDetailScreen" options={{ title: 'Selected Park' }}>
        {(props) => (
          <NatureDetailScreen {...props}/>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
function ArticleNavigator({ user, articles }) {
  return (
    <Stack.Navigator
      initialRouteName="ArticleListScreen"
      screenOptions={({ navigation }) => ({
        gestureEnabled: true,
        headerStyle: [styles.header],
        headerTitleStyle: [styles.headerText],
        headerBackTitleVisible: false,
      })}
      headerMode="float"
    >

      <Stack.Screen name="ArticleListScreen" options={{ title: 'Articles' }}>
        {(props) => (
          <ArticleListScreen
            {...props}
            user={user}
            articles={articles}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ArticleDetail" options={{ title: 'Articles' }}>
        {(props) => (
          <ArticleDetail
            {...props}
            user={user}
            articles={articles}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
function GoalNavigator({ user, userisLoading, benefits }) {
  return (
    <Stack.Navigator
      initialRouteName="GoalSetting"
      screenOptions={({ navigation }) => ({
        gestureEnabled: true,
        headerStyle: [styles.header],
        headerTitleStyle: [styles.headerText],
        headerBackTitleVisible: false,
      })}
      headerMode="float"
    >

      <Stack.Screen name="GoalSetting" options={{ title: 'Set Your Goal of the Week' }}>
        {(props) => (
          <GoalSetting
            {...props}
            user={user}
            userisLoading={userisLoading}
            benefits={benefits}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
function GoalHistoryNavigator({ user }) {
  return (
    <Stack.Navigator
      initialRouteName="GoalHistory"
      screenOptions={({ navigation }) => ({
        gestureEnabled: true,
        headerStyle: [styles.header],
        headerTitleStyle: [styles.headerText],
        headerBackTitleVisible: false,
      })}
      headerMode="float"
    >

      <Stack.Screen name="GoalHistory" options={{ title: 'Goal History' }}>
        {(props) => (
          <GoalHistory
            {...props}
            user={user}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
function MapNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}
function ReportNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ReportScreen"
      screenOptions={{
        title: 'Health Report',
        headerStyle: { backgroundColor: '#F2F2F2', borderBottomWidth: 0 },
      }}
    >
      <Stack.Screen name="ReportScreen" component={ReportScreen} />
    </Stack.Navigator>
  );
}
function ProfileNavigator({ user, logout }) {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        title: 'Profile',
        headerStyle: { backgroundColor: '#F2F2F2', borderBottomWidth: 0 },
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        children={() =>
          <ProfileScreen
            logout={logout}
            user={user}
          />
        }
      />
    </Stack.Navigator>
  );
}

const CustomDrawerContent = ({ userName }) => {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.maincontainer} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}>{userName }</Text>
            <Text style={styles.drawerHeaderLink}>Edit Profile</Text>
          </View>
        </View>
      </SafeAreaView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

function MainMenu(props) {
  const {
    user, articles, userName, benefits, symptom, usererrmsg, userisLoading,
  } = props;

  return (
    <Drawer.Navigator
      drawerStyle={[styles.drawer]}
      headerMode="float"
      drawerContent={(props) => <CustomDrawerContent {...props} userName={userName} />}
    >
      <Drawer.Screen
        style={styles.drawerScreen}
        name="HomeNavigator"
        options={
                {
                  title: 'Nature Time',
                  drawerLabel: 'Nature Time',
                  drawerIcon: ({ tintColor }) => (
                    <Icon
                      name="tree"
                      type="font-awesome"
                      color={tintColor}
                      style={[styles.navicon]}
                    />
                  ),
                }
            }
      >
        {(props) => (
          <HomeNavigator
            {...props}
            user={user}
            articles={articles}
            symptom={symptom}
            benefits={benefits}
            usererrmsg={usererrmsg}
            userisLoading={userisLoading}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        style={styles.drawerScreen}
        name="ArticleNavigator"
        options={
                {
                  title: 'Articles',
                  drawerLabel: 'Articles',
                  drawerIcon: ({ tintColor }) => (
                    <Icon
                      name="microchip"
                      type="font-awesome"
                      color={tintColor}
                      style={[styles.navicon]}
                    />
                  ),
                }
            }
      >
        {(props) => (
          <ArticleNavigator
            {...props}
            user={user}
            articles={articles}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        style={styles.drawerScreen}
        name="GoalNavigator"
        options={
                {
                  title: 'Set Goal',
                  drawerIcon: ({ tintColor }) => (
                    <Icon
                      name="ravelry"
                      type="font-awesome"
                      color={tintColor}
                      style={[styles.navicon]}
                    />
                  ),
                }
            }
      >
        {(props) => (
          <GoalNavigator
            {...props}
            user={user}
            userisLoading={userisLoading}
            benefits={benefits}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        style={styles.drawerScreen}
        name="GoalHistoryNavigator"
        options={
                {
                  title: 'View All Goals',
                  drawerIcon: ({ tintColor }) => (
                    <Icon
                      name="ravelry"
                      type="font-awesome"
                      color={tintColor}
                      style={[styles.navicon]}
                    />
                  ),
                }
            }
      >
        {(props) => (
          <GoalHistoryNavigator
            {...props}
            user={user}
          />
        )}
      </Drawer.Screen>

    </Drawer.Navigator>
  );
}

export default function MainScreens({ logout, userName }) {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.getIn(['ArticleData', 'articles']), articles);
  const benefits = useSelector((state) => state.getIn(['BenefitData', 'benefits']), benefits);
  const symptom = useSelector((state) => state.getIn(['SymptomData', 'symptom']), symptom);
  const userdetails = useSelector((state) => state.getIn(['UserDetails', 'userdetails']), userdetails);
  // const UserActivity = useSelector(state => state.getIn(['UserActivity', 'dailyActivity']), UserActivity)
  const usererrmsg = useSelector((state) => state.getIn(['UserDetails', 'errmsg']), usererrmsg);
  const userisLoading = useSelector((state) => state.getIn(['UserDetails', 'isLoading']), userisLoading);

  useEffect(() => {
    dispatch(fetchSymptoms());
    dispatch(fetchBenefits());
    dispatch(fetchArticles());
    dispatch(userActions.fetchUser());
  }, []);

  return (
    <View style={styles.maincontainer}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'HomeScreens') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'MapScreens') {
                iconName = focused ? 'map-marker' : 'map-marker-outline';
              } else if (route.name === 'ReportScreens') {
                iconName = focused ? 'chart-areaspline-variant' : 'chart-line';
              } else if (route.name === 'ProfileScreens') {
                iconName = focused ? 'account' : 'account-outline';
              }

              return <Icon name={iconName} type="material-community" color={focused ? BLACK : MEDIUM_GREY} size={24} />;
            },
          })}
          tabBarOptions={{ showLabel: false }}
        >
          <Tab.Screen
            name="HomeScreens"
            component={HomeNavigator}
            options={{
              title: 'Home',
            }}
            symptom={symptom}
            articles={articles}
            userdetails={userdetails}
          />
          <Tab.Screen name="MapScreens" component={MapNavigator} options={{ title: 'Discover' }} />
          <Tab.Screen name="ReportScreens" component={ReportNavigator} options={{ title: 'Report' }} />
          <Tab.Screen name="ProfileScreens"
            options={{ title: 'Profile' }}
            children= {() =>
              <ProfileNavigator
                 logout={logout}
                 user={userName}
              />
            }
          />

        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
