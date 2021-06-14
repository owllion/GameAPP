import {useEffect} from 'react'
import {useSelector} from 'react-redux'

 const ResultAuth = ({navigation}) => {
     const token = useSelector(state=> state.auth.token)
     const navigate = () => {
         if(token) {
            navigation.navigate('TrackList')
        }else {
             navigation.navigate('loginFlow')
        }
     }
     useEffect(()=> {
        navigate()
     },[])
    return null
}
export default ResultAuth
