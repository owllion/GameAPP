import React from 'react'
import FavItem from '../components/FavItem'
import BackBtn from '../components/BackBtn'
import styled from 'styled-components/native'
import COLORS from '../assets/color/colors'


const numColumns = 2
const SearchResultScreen = ({route}:any)=> {
  const {gameList,keywords} = route.params

    const renderList= gameList.filter(i=>(i.productName).toLowerCase().includes(keywords.toLowerCase())
    )
    return (
        <Container>
           <BtnBox>
             <BackBtn/>
           </BtnBox>
          <Text>Search Result</Text>
           <FlatList
          contentContainerStyle={{alignItems:'center'}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={renderList}
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
const FlatList = styled.FlatList``
const Container = styled.View`
 padding:40px 10px 10px 10px;
 flex:1;
 background-color:${COLORS.primary}
`
const BtnBox = styled.View`
  padding-left:10px;
` 
const Text = styled.Text`
 font-size:25px;
 font-family:IBMPlexSansBold;
 color:${COLORS.orange};
 padding-top:20px;
 padding-left:20px;
 margin-bottom:10px;
`
export default SearchResultScreen
