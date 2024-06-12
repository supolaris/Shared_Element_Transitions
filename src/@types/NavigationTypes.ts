type locationDetailData = {
    id: number,
    image: string,
    country: string,
    city: string,
    description: string,
}

export type NativeStackParamsList = {
    StartupScreen: undefined;
    LocationScreen: undefined;
    LocationDetailScreen: {item: locationDetailData};
    CarScreen: undefined;
    CarDetailScreen: undefined;
};