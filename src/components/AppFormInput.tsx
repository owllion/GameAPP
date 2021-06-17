import React from 'react'
import { useFormikContext } from 'formik'
import { Input } from 'react-native-elements';
import ErrorMsg from '../components/ErrorMsg'

const AppFormInput = ({ fieldName,...otherProps }:{fieldName:string}) => {
    const { handleChange, errors ,setFieldTouched, touched }  = useFormikContext()

    return (
       <>
       <Input
        {...otherProps}
        onChangeText= {handleChange(fieldName)}       
        onBlur={()=> setFieldTouched(fieldName)}
        /> 
        <ErrorMsg 
          error={errors[fieldName]} 
          visible={ touched[fieldName]} />          
       </>
    )
}

export default AppFormInput
