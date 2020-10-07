import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList131615Navigator from '../features/ArticleList131615/navigator';
import ArticleList131614Navigator from '../features/ArticleList131614/navigator';
import ArticleList131613Navigator from '../features/ArticleList131613/navigator';
import ArticleList131580Navigator from '../features/ArticleList131580/navigator';
import ArticleList131579Navigator from '../features/ArticleList131579/navigator';
import ArticleList131578Navigator from '../features/ArticleList131578/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList131615: { screen: ArticleList131615Navigator },
ArticleList131614: { screen: ArticleList131614Navigator },
ArticleList131613: { screen: ArticleList131613Navigator },
ArticleList131580: { screen: ArticleList131580Navigator },
ArticleList131579: { screen: ArticleList131579Navigator },
ArticleList131578: { screen: ArticleList131578Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
