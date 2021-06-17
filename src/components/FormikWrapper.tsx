import React from 'react'
import { Formik } from 'formik'

interface Props {
    initialValues: {
        email: string,
        password:string,
        name:string
    },
    onSubmit:(values:any)=>void,
    validationSchema:object,
    children:React.ReactNode
}


const FormikWrapper = ({ initialValues, onSubmit, validationSchema, children }:Props) => {
    return ( 
       <Formik
            initialValues= { initialValues }
            onSubmit= { onSubmit }
            validationSchema={ validationSchema }
        >
          {()=> <>{children}</> }
        </Formik>             
    )
}

export default FormikWrapper
