import React from 'react'
import styled from 'styled-components/native'


interface Props {
    title:string;
    image:string
}

const Card = (props:Props) => {
    return (
        <View>
           <Image 
              source={{
                  width:100,
                  height:100,
                  uri:'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'}} />
                < Description>
                 <Text>fff</Text>
                </Description>
        </View>
    )
}

const View = styled.View`
  border-radius:10px;
  margin-bottom:10px;
  overflow:hidden;
  background-color:#fff
`
const Image = styled.Image`
  width:100%,
  border-radius:20px 20px 0 0;
`
const Description = styled.View`
  width:100%;
  padding:20px;
`
const Text = styled.Text`
  font-size:20px;
  font-family:Marcellus-Regular;
` 
export default Card
