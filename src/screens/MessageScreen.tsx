import React from 'react'
import Container from '../components/Container'
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import { TouchableHighlight } from 'react-native'
import AppLoading from 'expo-app-loading';
import { ListItem, Avatar,Button } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://icons-for-free.com/iconfiles/png/512/avatar+circle+male+profile+user+icon-1320196703471638282.png',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIRZXYvGCN_04MZEpnTlOAhtRMU9iXOlQoQ&usqp=CAU',
    subtitle: 'Vice Chairman'
  },
]

const MessageScreen = ()=> {
      const [isLoaded] =  useFonts({
      IBMPlexSansBold: require('../assets/fonts/IBMPlexSans-Bold.ttf'),
      IBMPlexSansThin: require('../assets/fonts/IBMPlexSans-Thin.ttf'),
      
    });
    if (!isLoaded) {
        return <AppLoading />
       }
    return (
       <Container>
            {
    list.map((l, i) => (
      <ListItem.Swipeable 
       onPress={()=>{}}
       underlayColor={'#FFD485'} 
       key={i} bottomDivider
       rightContent={
            <Button
            title="Delete"
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            />
         }
     >
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title 
            style={{
                fontFamily:'IBMPlexSansBold'
                }}>
             {l.name}
          </ListItem.Title>
          <ListItem.Subtitle
            style={{
                fontFamily:'IBMPlexSansThin'
                }}
          >
              {l.subtitle}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    ))
  }
            <List 
             keyExtractor={(i:{name:string})=>i.name}
            data={list}
            renderItem={({item})=> {
                return (
                     <TouchableHighlight  
                      
                       onPress={()=> {}}
                       underlayColor={'#FFD485'}
                       >
                   <ListItemm>
                      <Avatarr source={{uri:item.avatar_url,
                       height:50,
                       width:50
                    }} />
                    <TextContainer> 
                    <Text type='title'>    
                       {item.name}
                    </Text>    
                      <Text>
                        {item.subtitle}
                      </Text>
                </TextContainer>
                   </ListItemm>
                   </TouchableHighlight>
                )
            }} 
            
            /> 
       </Container>
    )
}

const List = styled.FlatList`
  width:100%
`
const ListItemm = styled.View`
  width:100%;
  padding:20px;
  flex-direction:row
`
const Avatarr = styled.Image`
  border-radius:50px;
  margin-right:20px;
  align-self:center
`
const Text = styled.Text`
  font-family:${(props:{type:string})=> {
    console.log(props)
    return props.type==='title'?'IBMPlexSansBold':
    'IBMPlexSansThin' }};
`
const TextContainer = styled.View`
 

`
export default MessageScreen
