import { CREATE_TRACKER_INF0, DELETE_TRACKER_INF0, GET_SINGLE_TRACKER_INFO, GET_TRACKER_INF0, SORTED_DATA, UPDATE_MODAL_STATE, UPDATE_TRACKER_INF0, UPDATE_TRACKER_STATE } from "../type";
import { nanoid } from 'nanoid'
export const getTrackerDetails = () => async (dispatch) => {
    try {
        const allData = await JSON.parse(localStorage.getItem("trackerDetails") || "[]")
        dispatch({
            type: GET_TRACKER_INF0,
            payload: allData,
        })

    } catch (error) {
        console.log(error)
    }
}
export const createTrackerDetails = (info) => async (dispatch) => {
    try {
        const copyData = { ...info }
        copyData.id = nanoid()
        copyData.amount = parseFloat(info.amount)
        const newData = await JSON.parse(localStorage.getItem("trackerDetails") || "[]")
        newData.push(copyData)
        localStorage.setItem('trackerDetails', JSON.stringify(newData))
        dispatch({ type: CREATE_TRACKER_INF0 })
        dispatch(getTrackerDetails())

    } catch (error) {
        console.log(error)
    }
}

export const deleteTrackerDetails = (id) => async (dispatch) => {
    try {
        const allData = await JSON.parse(localStorage.getItem("trackerDetails") || "[]")
        const filteredData = allData.filter(elm => elm.id !== id)
        localStorage.setItem('trackerDetails', JSON.stringify(filteredData))
        dispatch({ type: DELETE_TRACKER_INF0 })
        dispatch(getTrackerDetails())
    } catch (error) {
        console.log(error)
    }
}

export const getSingTackerDetails = (id) => async (dispatch) => {
    try {
        const allData = await JSON.parse(localStorage.getItem("trackerDetails") || "[]")
        const singleData = allData.find(data => data.id === id)
        dispatch({ type: GET_SINGLE_TRACKER_INFO, payload: singleData })
        dispatch(getTrackerDetails())
    } catch (error) {
        console.log(error)
    }
}

export const updateTrackerInfo = (data) => async (dispatch) => {
    try {
        const newData = JSON.parse(localStorage.getItem("trackerDetails") || "[]")
        const updatedData = newData.map(item => {
            if (item.id === data.id) {
                return { ...item, ...data }
            }
            return item
        })
        localStorage.setItem('trackerDetails', JSON.stringify(updatedData))
        dispatch({ type: UPDATE_TRACKER_INF0 })
        dispatch(getTrackerDetails())
    } catch (error) {
        console.log(error)
    }
}
export const updateTrackerState = (data) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_TRACKER_STATE, payload: data })
        dispatch(getTrackerDetails())
    } catch (error) {
        console.log(error)
    }
}
export const updateStateModal = (data) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_MODAL_STATE, payload: data })
        dispatch(getTrackerDetails())
    } catch (error) {
        console.log(error)
    }
}
export const getSortedData = () => async (dispatch) => {
    try {
        dispatch({ type: SORTED_DATA })
        dispatch(getTrackerDetails())
    } catch (error) {
        console.log(error)
    }
}
