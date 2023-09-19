import { Stack, useRouter } from 'expo-router';
import ScreenHeaderBtn from "./../components/common/header/ScreenHeaderBtn"
import { SafeAreaView, View } from 'react-native';
import { COLORS, SIZES, icons, images } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';
import Welcome from './../components/home/welcome/Welcome';
import Popular from './../components/home/popular/Popularjobs';
import Nearbyjobs from './../components/home/nearby/Nearbyjobs';



const Home = () => {

    const router = useRouter();

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
           <Stack.Screen options={{
            headerStyle: {backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "" //hides index in the center
           }}/>
           <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{flex: 1, padding:SIZES.medium}}>
                    <Welcome /> 

                    <Popular />

                    <Nearbyjobs />
                </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default Home;