import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import SingleCard from './card.component';
import { getTrackerDetails } from '../../../redux/actions/tracker.action';

const CardList = ({ limit, page, refresh }) => {
    const dispatch = useDispatch()
    const { details, sortType } = useSelector((state) => state.trackerInfo)
    const [data, setData] = useState([])

    useEffect(() => {
        const filteredData = [...details]
        if (sortType === 'asc') {
            filteredData.sort((a, b) => a.amount - b.amount)
            localStorage.setItem('filteredData', JSON.stringify(filteredData))
            setData(filteredData)
        } else if (sortType === 'desc') {
            filteredData.sort((a, b) => b.amount - a.amount)
            localStorage.setItem('filteredData', JSON.stringify(filteredData))
            setData(filteredData)
        }

    }, [details, sortType])


    useEffect(() => {
        if (refresh) {
            setData(JSON.parse(localStorage.getItem("filteredData")))
        } else {
            setData(details)
        }
    }, [details, refresh])

    useEffect(() => {
        dispatch(getTrackerDetails())
    }, [dispatch])

    return (
        <Box sx={{
            height: {
                xs:'43vh',
                md:'55vh'
            },
            p: 0.5,
            overflowY: 'scroll',
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
                display: "none"
            }
        }}>
            {
                data?.slice(page * limit, (page * limit) + limit)?.map(elm => <SingleCard
                    key={elm.id}
                    data={elm}
                />)
            }

        </Box>
    )
}

export default CardList