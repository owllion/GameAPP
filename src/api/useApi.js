import { useSelector } from 'react-redux';
import axios from 'axios'
const useApi = async(id) => {
  const token = useSelector(state=> state.auth.token)
  const  {data:{cartList}} = await axios.post(
      'https://koza-server.herokuapp.com/api/game/addToCart',{productId:id},
      { headers: {"Authorization" : token} })
      return cartList
}
export default useApi