import React from 'react'
import * as Yup from 'yup'
import PostPicker from '../components/PostPicker'
import FormikWrapper from '../components/forms/FormikWrapper'
import Container from '../components/Container'
import AppFormInput from '../components/AppFormInput'
import Button from '../components/forms/Button'
import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  content: Yup.string().required().label('Content'),
  category:Yup.string().required().nullable().label('Category')
})

const categories = [
  { label: 'Travel', id:1,bg:'#D81159',icon:'flight-takeoff'},
  { label: 'Mood', id:2,bg:'#FE9000',icon:'child-care'},
  { label: 'Food', id:3,bg:'#FFD485',icon:'restaurant-menu'},
  { label: 'Game', id:4,bg:'#5A9367',icon:'sports-esports'},
  { label: 'Tech', id:5,bg:'#92DCE5',icon:'computer'},
  { label: 'Pet', id:6,bg:'#48A9A6',icon:'pets'},
  { label: 'Movie&Celebrity', id:7,bg:'#3D2B56',icon:'movie-filter'},
  { label: 'Music&Singer', id:8,bg:'#76B041',icon:'music-note'},
]

const PostEditScreen = ()=> {
    const [isLoaded] = useFonts({
      MarcellusRegular: require('../assets/fonts/Marcellus-Regular.ttf'),
  });
     if (!isLoaded) {
        return <AppLoading />
       }

    return (   
    <Container>
        <ImageBackground
          
          source={require('../assets/images/Postbg.jpg')}>  
         <View>   
         <KeyboardAwareScrollView> 
             <Text>
               New Post
             </Text>
       <FormikWrapper
         initialValues={{
             title:'',
             content:'',
             category:null
         }}
         onSubmit= { values=> console.log(values)}
         validationSchema= {validationSchema}
       > 
         <AppFormInput
           placeholderTextColor="gray" 
           inputStyle={{
               marginLeft:10,      
           }}
           inputContainerStyle={{
               backgroundColor:'#F6CA83',
               borderRadius:20,
               padding:10,  
               paddingLeft:20,
               borderBottomWidth:0                   
           }}
           leftIcon={
                <Icon
                 type='ionicon'
                 name='pencil-outline'
                 color='#949D6A'
                 size={25}
                    />
                  } 
           maxLength={50} 
           fieldName='title' 
           placeholder='Title'
         />

         <AppFormInput 
           placeholderTextColor='gray'
           inputStyle={{
               marginLeft:10,           
           }}
           inputContainerStyle={{
               backgroundColor:'#F6CA83',
               borderRadius:20,
               padding:15,
               paddingLeft:20,
               borderBottomWidth:0,
              
           }}
           leftIcon={
                <Icon
                 type='ionicon'
                 name='pencil-outline'
                 color='#949D6A'
                 size={25}
                    />
           }
           maxLength={500} 
           multiline 
           numberOfLines={2} 
           fieldName='content' 
           placeholder='Content' 
         />

         <PostPicker  
           cate={categories}  
           fieldName='category'
           numColumns={3}
         />
       
         <Button text='Post' color />
      
        </FormikWrapper>
        </KeyboardAwareScrollView>
        </View>    
        </ImageBackground>    
    </Container>
    
        
    )
}

const ImageBackground = styled.ImageBackground`
 flex:1;
` 
const View = styled.View` 
  flex:1;
  padding:20px
`
const Text = styled.Text`
  font-size:45px;
  margin:0 20px 35px 20px;
  font-family:MarcellusRegular;
`

export default PostEditScreen
