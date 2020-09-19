import { API } from "services/api"
import { types } from './types'

export const actions = {
    fetchSmth: (city) => async (dispatch) => {
        try {
            const { data } = await API.FETCH_SMTH(city)
            dispatch({ type: types.SAVE_SMTH, payload: data })
        } catch {
            dispatch(actions.saveSmth(data))
        }
    },
}