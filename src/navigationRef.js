
import { NavigationActions } from '@react-navigation/compat'
let navigator;

export const setNavigator = nav => {
    navigator = nav
};
//從App拿到的就是一般的navigation(寫ref就可拿到navigation物件是原本就有的設定!)
//裡面有dispatch方法可使用(平常可直接使用navigate做路由導航)
//但如果想在非元件函是外使用navigation，就要用dispatch navigation的寫法去通知react navigation我們要換頁
//而你dipspatch的actions則是要使用navigationactions的navigate方法
//navigate接受好幾個參數，但只有routeName是必要的~
export const navigate = (routeName, params)=> {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,params
        })
    )
}