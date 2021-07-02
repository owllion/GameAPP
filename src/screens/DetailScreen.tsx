import React, {useState,useEffect} from 'react'
import styled from 'styled-components/native'
import Container from '../components/Container';
import COLORS from "../assets/color/colors";
import { Icon } from "react-native-elements";
import { Image } from '../assets/ImgDetail/Image'
import CartBtn from "../components/CartBtn";
import AddToCartBtn from '../components/AddToCartBtn';
import QtyBtn from '../components/QtyBtn';
import { useSelector,useDispatch } from 'react-redux';
import { addToFav,removeFromFav } from '../store/actions/FavAction';
import userApi from '../api/user'
import { authActions } from '../store/slice/Auth'

const Detail = ({navigation,route}:any) => {
    const dispatch = useDispatch()

    const favList = useSelector(state=>state.auth.favList)

    const [isFav,setFav] = useState<unknown>()
    
    //click btn will call api-->get and set new favlist to state -->useEffect run-->get new index--> set new isFav --> heart btn change !
    useEffect(()=>{
       const index = favList.findIndex(i=> i.productId === gameId)
       console.log(index)
       index === -1 ? setFav(-1): setFav(index)
    },[favList])

    const [qty, setQty] = useState<number>(1)
  
    const { item } = route.params
    const gameId = item.productId
    const gameBg = Image.filter(i=> i.name === item.productName)?.find(i=>i.img)
    
    const qtyHandler = (type:string) => {
      setQty( type==='add'? qty+1: qty-1 )
    }
 
    const favHandler = () => {
      isFav === -1 ? 
       dispatch(addToFav({productId:item.productId}))
       :
       dispatch(removeFromFav({productId:item.productId, favlist:favList}))
    } 

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
                 <CartBtn/>
              </HeaderBtn>
          </Header>        
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

          <IconBox
            
          >
            {isFav!== -1 ? 
            <Icon
              raised
              name='heart'
              type='font-awesome'
              color={COLORS.red}
              onPress={favHandler}
               />
              :
              <Icon
              raised
              name='heart'
              type='font-awesome'
              color={COLORS.primary}
              onPress={favHandler}
              />
              }
          </IconBox>
         
          <ContentText bold large>
            {item.productName}</ContentText>
          <ContentText bold>Description</ContentText>
           <ScrollView>
          <ContentText >{item.description}</ContentText>
            </ScrollView>

            <PriceAndNumber>     
              <Text large color>${item.price}</Text>
                <QtyBtn stock={item.stock} qtyHandler={qtyHandler} qty={qty}/>
            </PriceAndNumber> 
            <AddToCartBtn gameId={gameId} qty={qty}/>         
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

export default Detail