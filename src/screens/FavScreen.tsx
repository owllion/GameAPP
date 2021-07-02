import React from 'react'
import styled from 'styled-components/native'
import FavItem from '../components/FavItem'
import {useSelector} from 'react-redux'
import COLORS from "../assets/color/colors";
import BackBtn from '../components/BackBtn'

const numColumns = 2
const FavScreen = ()=> {
    const favList= useSelector(state=>state.auth.favList)
    return (
            <Container>
                <BtnBox>
             <BackBtn/>
                </BtnBox>
            <Text>Favorite</Text>
          <FlatList
          contentContainerStyle={{alignItems:'center'}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={favList}
            numColumns ={numColumns}
            keyExtractor={i=>i.productId}
            renderItem ={({item})=> {
            return (
                <FavItem game={item} />
            )
         }}
      /> 
       </Container> 
       
    )
}
const BtnBox = styled.View`
  padding-left:10px;
`
const Container = styled.View`
 padding:40px 10px 100px 10px;
 flex:1;
 background-color:${COLORS.primary}
`
const Text = styled.Text`
 font-size:20px;
 font-family:IBMPlexSansBold;
 padding-top:20px;
 padding-left:40px;
 margin-bottom:20px;
 color:${COLORS.orange}
`
const FlatList = styled.FlatList`
 
`

export default FavScreen
