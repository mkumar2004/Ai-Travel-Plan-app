import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout(){

    useFonts({
        'Poppins':require('../assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-Bold':require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Inspiration':require('../assets/fonts/Inspiration/Inspiration-Regular.ttf'),
        'Roboto-Light':require('../assets/fonts/Roboto/Roboto-Light.ttf'),
        'Nunito-Regular':require('../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'Montserrat-Black':require('../assets/fonts/Montserrat/static/Montserrat-Black.ttf'),
      })
    return(
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    )
}