import React from 'react'
import { NavigationActions } from "react-navigation"


let navigatior;
export const setNavigator = nav => {
    navigator = nav;
}
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}
function navigation() {
    return (
       
    )
}

export default navigation
