import React from 'react'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import Container from '../components/Container';
import COLORS from "../assets/color/colors";
import { Icon } from "react-native-elements";
import { Image } from '../assets/ImgDetail/Image'
import { AntDesign } from '@expo/vector-icons'; 




const Detail = ({navigation,route}:any) => {

    const [isLoaded] = useFonts({
    IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

    const {item} = route.params
    const gameBg = Image.filter(i=> i.name === item.productName)?.find(i=>i.img)
    return (
      <ImageBackground source={gameBg.img}>
        <Container>
          <Header>
            <HeaderBtn>
              <Icon
                 name='chevron-left'
                 type='Entypo'
                 size={25}
                 onPress={navigation.goBack}
              />
               </HeaderBtn>
               <HeaderBtn>
               <Icon
                  name="add-shopping-cart"
                  type="material-icons-outlined"
                  
                  size={25}
                  onPress={() => console.log("hello")}
                />
              </HeaderBtn>
          </Header>
          {/* Header end */}
          {/* Content start */}      
        </Container>

         <ContentBox>
           <RatingBox>
            <Icon
            name='star'
            type='AntDesign'
            size={20}
            style={{
              paddingTop:2,
              marginRight:5
            }}
            color={COLORS.yellow}       
          />
          <Text color>{item.rating}</Text>
          </RatingBox>

          <IconBox>
            <Icon
              raised
              name='heart'
              type='font-awesome'
              color={COLORS.primary}
              onPress={() => console.log('hello')} />
          </IconBox>
         
          <ContentText bold large>
            {item.productName}</ContentText>
          <ContentText bold>Description</ContentText>
           <ScrollView>
          <ContentText >{item.description}</ContentText>
            </ScrollView>

            <PriceAndNumber>     
              <Text large color>${item.price}</Text>
              <QuantityBox>  
                <QuantityBtn>
                  <AntDesign name="minus" size={15} color="black" />                
                  </QuantityBtn>

                    <Text style={{color:COLORS.white}}>1</Text>
                    
                  <QuantityBtn>
                 <AntDesign name="plus" size={15} color="black" />
                </QuantityBtn>

              </QuantityBox>  
            </PriceAndNumber> 
            <AddToCartBtn> 
              <Text style={{color:COLORS.white}}>Add To Cart</Text>   
            </AddToCartBtn>    
        </ContentBox>       
      </ImageBackground>     
     
    )
}
const ScrollView = styled.ScrollView`` 
const ImageBackground = styled. ImageBackground`
  flex:1
`
const Header = styled.View`
  padding:20px 10px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center
`
const HeaderBtn = styled.View`
  height:50px;
  width:50px;
  background-color:rgba(255,255,255,.5);
  border-radius:10px;
  justify-content:center;
  align-items:center
`
const DetailBox = styled.View`
  padding:20px;
  flex-direction:row;
  justify-content:space-between;
  width:100%;
  position:absolute;
  bottom:30px
`
const RatingBox = styled.View`
  flex-direction:row;
  height:43px;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  padding:5px;
  position:absolute;
  top:80px;
  right:30px; 
`
const Text  = styled.Text`
  font-size:${({large}:{large:boolean})=> large? "20px":"12px"};
  color:${({color}:{color:boolean})=>color?  COLORS.white: COLORS.dark};
  font-family:IBMPlexSansBold
`
const ContentBox = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 40px 20px;
  background-color: rgba(0,0,0,.2);
  flex:.8
`
const IconBox = styled.View`
 height:60px;
 width:60px;
 position:absolute;
 top:-30px;
 right:20px;
`
const ContentText = styled.Text`
  margin:7px 0;
  font-size:${({large}:{large:boolean})=> large? "18px":"10px" };
  color:${COLORS.white};
  font-family:${({bold}:{bold:boolean})=> bold? "IBMPlexSansBold":"IBMPlexSansRegular" }
`
const PriceAndNumber = styled.View`
  padding-top:20px;
  flex-direction:row;
  justify-content:space-between
` 

const QuantityBox = styled.View`
  height:35px;
  width:100px;
  background-color:${COLORS.primary};
  border-radius:7px;
  align-items:center;
  margin-top:10px;
  justify-content:space-between;
  flex-direction:row;
`
const QuantityBtn = styled.View`
  height:25px;
  width:25px;
  background-color:${COLORS.white};
  margin:0 5px;
  justify-content:center;
  align-items:center;
  border-radius:5px
`
const AddToCartBtn = styled.View`
  height:50px;
  justify-content:center;
  align-items:center;
  background-color:${COLORS.primary};
  border-radius:10px;
  padding: 0 10px;
  margin-top:20px;
`
export default Detail