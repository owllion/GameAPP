import React,{ useState } from 'react'
import { Button, Icon } from 'react-native-elements'

import styled from 'styled-components/native'
import { Modal } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Container from '../components/Container';
import { regular } from '../assets/style/style';
import { useFonts } from '@expo-google-fonts/rock-salt'
import AppLoading from 'expo-app-loading';
import PickerItem from '../components/PickerItem'


const categories = [
  { label: 'Travel', id:1},
  { label: 'Mood', id:2},
  { label: 'Food', id:3},
  { label: 'Game', id:4},
  { label: 'Tech', id:5},
]
interface KeyCategory {
    label:string;
    id:number
}

interface Category {
  item: {
    label:string;
    id:number
  }
}

const Picker = ()=> {
  
  const [visible, setVisible] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');

  const selectHandler = (item:string) => {
    setCategory(item)
  }
 const [isLoaded] =  useFonts({
      IBMPlexSansRegular: require('../assets/fonts/IBMPlexSans-Regular.ttf'),
      
    });
    if (!isLoaded) {
        return <AppLoading />
       }

    return (
      <>
      <Container>
        <TouchableWithoutFeedback onPress={()=> setVisible(true)}>
        <View>
          <LeftView>
            <Icon
              style={{
                marginRight:10,
                alignSelf:'baseline'
              }}
              type='ionicon'
              name="apps-outline"
              size={25}
              color="#000"
            />
           <Text>{category? category: 'Category'}</Text> 
           </LeftView>
           <RightView> 
               <Icon
              style={{
                marginRight:10,
                alignSelf:'baseline'
              }}
              type='ionicon'
              name="chevron-down-outline"
              size={25}
              color="#000"
            />
           </RightView> 
        </View>
        </TouchableWithoutFeedback>
    </Container>

      <Modal 
       visible={visible}
       animationType='slide'
     >
       <IconBox>
       <Button 
         buttonStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}
         onPress={()=> setVisible(false)}
         icon={
            <Icon
              type='ionicon'
              name="close-outline"
              size={15}
              color="#fff"
            />
         }
      />
      </IconBox>
      {/* Modal content */}
      <FlatList 
        data={categories}
        keyExtractor={(i:KeyCategory)=>i.id.toString()}
        renderItem ={({item}:Category)=> {
           return (
              <PickerItem 
                label={item.label} 
                selectHandler={ ()=> {
                  selectHandler(item.label)
                  setVisible(false)
                } }
              />
           )
        }}
      />  
       </Modal>
    </>
    )
}

const View = styled.View`
padding:20px;
flex-direction:row;
background-color:#A9F0D1;
margin:20px;
border-radius:20px;
justify-content:space-between;
` 
const LeftView = styled.View`
  flex-direction:row;
`
const RightView = styled.View`
`
const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
 
`

//close icon
const IconBox = styled.View`
 position:absolute;
 top:15px;
 right:10px;
 z-index:10000
`

const Text = styled.Text`
  font-family:${regular.fontFamily};
  color:#000
`
const FlatList = styled.FlatList``
export default Picker
