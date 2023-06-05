import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen'; 

const AppNavigator = createStackNavigator(
    { 
        Home: HomeScreen,
        Recipes: RecipeScreen,
    },
    { 
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);