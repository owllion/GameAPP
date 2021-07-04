import React from 'react'
import styled from 'styled-components/native'
import COLORS from "../assets/color/colors";

interface Props {
    text:string,
    img:string,
    color:string
}

const EmptyImg = (props:Props) => {
    const { text,img,color } = props
    return (
        <> 
           <Text 
             style={{
                 color:COLORS[color]
             }}
           >{text}</Text>
           <ImageBox>
           <Image 
           resizeMode='contain'
           source={img} />
          </ImageBox>
           </>       
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
 margin-top:20px;
 margin-bottom:20px;
 width:100%;
 height:50%;
`
const Text = styled.Text`
 font-size:20px;
 font-family:IBMPlexSansBold;
 padding-top:20px;
 padding-left:40px;
 margin-bottom:20px;
 color:${({white}:{white:boolean})=>white?COLORS.white:COLORS.primary}
`
export default EmptyImg
