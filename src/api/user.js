
import instance from './axios'

const getAllGames = () => instance.get('/games/all')

export default {
    getAllGames
}
 