import React from 'react'
import FavItem from '../components/FavItem'
import BackBtn from '../components/BackBtn'
import styled from 'styled-components/native'
import COLORS from '../assets/color/colors'
import EmptyImg from '../components/EmptyImg'

const numColumns = 2
const SearchResultScreen = ({route}:any)=> {
  const {gameList,keywords} = route.params

    const renderList= gameList.filter(i=>(i.productName).toLowerCase().includes(keywords.toLowerCase())
    )
    return (
        <Container>
           <BtnBox>
             <BackBtn routeName={null}/>
           </BtnBox>
          <Text>Search Result</Text>
          {!renderList[0]?
           <EmptyImg 
            text=''
            color='orange'
            img={require('../assets/images/noMatch.png')} 
      />
        :
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
      }
        </Container>
                     
    )
}
const Image = styled.Image`
  width:100%;
  height:100%
`
const ImageBox = styled.View`
 justify-content:center;
 align-items:center;
 padding:15px;
 padding-right:50px;
 margin-top:40px;
 width:100%;
 height:60%;
 margin-left:20px;
`
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
