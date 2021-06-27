import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'
import { Input } from 'react-native-elements';
import ErrorMsg from './forms/ErrorMsg'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useSelector,useDispatch }  from 'react-redux'
import { authActions }  from '../store/slice/Auth'
import COLORS from '../assets/color/colors';

const AppFormInput = ({ fieldName,...otherProps }:{fieldName:string}) => {


    const { handleChange, errors ,setFieldTouched, touched }  = useFormikContext()
    
    const errorMsg = useSelector(state=> state.auth.errorMsg)
    console.log(errorMsg)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(authActions.setErrorClear())
    },[])


    const [isLoaded] =  useFonts({
      IBMPlexSansRegular: require('../assets/fonts/IBMPlexSans-Regular.ttf'),
    })

     if (!isLoaded) {
        return <AppLoading />
       }

    return (
       <>
       <Input
        {...otherProps}
        style={{
           fontFamily:'IBMPlexSansRegular',
           color:COLORS.white
        }}
        onChangeText= {handleChange(fieldName)}       
        onBlur={()=> setFieldTouched(fieldName)}
        />     
         {!errorMsg && <ErrorMsg 
          error={ errors[fieldName]} 
          visible={ touched[fieldName]} />  }       
       </>
    )
}

export default AppFormInput
