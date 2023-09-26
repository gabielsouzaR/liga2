import React from "react";
import { View, ActivityIndicator} from "react-native";
import AuthRoutes from './auth.routes';

function routes() {
    const loading = false;
    const signed = false;

    return signed ? <view></view> : <AuthRoutes />;
}

export default routes;