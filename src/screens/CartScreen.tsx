import React,{ useState } from 'react'
import styled from 'styled-components/native'
import Container from '../components/Container'
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import BackBtn from '../components/BackBtn';
import { ListItem,Button,Avatar,CheckBox  } from 'react-native-elements'
import COLORS from "../assets/color/colors";


const list = [
  {
    name: 'Death stranding',    
  },
  {
    name: 'Uncharted 4'
  },
]
const CartScreen = () => {
     const [isChecked, setIsChecked] = useState<boolean>(false)
     const [isLoaded] =  useFonts({
      MarcellusRegular: require("../assets/fonts/Marcellus-Regular.ttf"),    
    });
    if (!isLoaded) {
        return <AppLoading />
       }

    return (
       
       <Container>
         <BackBtn/>
         <View>
        <Text title margin>Cart</Text>
        
     {/* main content */}
         <ScrollView>
            {
   list.map((l, i) => (
      <ListItem.Swipeable
      containerStyle={{
          paddingTop:10,
          backgroundColor:COLORS.light,
          borderTopLeftRadius:15,
          borderBottomLeftRadius:15,
          marginBottom:15,
          borderBottomWidth:0
      }}
    
       onPress={()=>{}}
       underlayColor={'#FFD485'} 
       key={i} bottomDivider
       rightContent={
            <Button
            raised
            onPress={()=> console.log('hoe')}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: '#D81159' }}
            />
         }
     >
       <CheckBox
       containerStyle={{margin:-15}}
            checked={isChecked}
            onPress={()=>setIsChecked(preState=> !preState)}
            checkedColor={COLORS.orange}
    /> 
        <Avatar 
         avatarStyle={{
           borderRadius:5,
         }}
        
         size={50}
         source={require('../assets/ImgDetail/witcher3-2.jpg')} />
        <ListItem.Content style={{margin:-10}}>
          <ListItem.Title 
          numberOfLines={1}
            style={{
              fontFamily:'IBMPlexSansBold',
              fontSize:10
                }}>
             {l.name}
          </ListItem.Title>
        </ListItem.Content>
       <Text>x1</Text>
      <Text>$152</Text>
       
      </ListItem.Swipeable>
    ))
  }
         </ScrollView>
     {/* main content */}
        </View>
       </Container>
       
    )
}
const Wrapper = styled.View`
  background-color:${COLORS.primary};
  padding-left:20px;
  padding-top:20px;
  flex:1
`
const View = styled.View`
  padding:25px 0 0 25px;

`
const ScrollView = styled.ScrollView``
const Text = styled.Text`
  font-size:${({title}:{title:boolean})=> title?'25px' :'15px'};
  font-family:IBMPlexSansBold;
  margin-bottom:${({margin}:{margin:boolean})=> margin? '30px':0}
`
export default CartScreen
