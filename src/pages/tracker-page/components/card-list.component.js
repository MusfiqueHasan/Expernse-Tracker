import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import SingleCard from './card.component';
import { getTrackerDetails } from '../../../redux/actions/tracker.action';

const CardList = ({ limit, page, total }) => {
    const dispatch = useDispatch()
    const { details } = useSelector((state) => state.trackerInfo)
    console.log(details);

    useEffect(() => {
        dispatch(getTrackerDetails())
    }, [dispatch])
    return (
        <Box sx={{
            height: '68vh',
            p: 0.5,
            overflowY: 'scroll',
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
                display: "none"
            }
        }}>
            {
                details?.slice(page * limit, (page * limit) + limit)?.map(elm => <SingleCard
                    key={elm.id}
                    data={elm}
                />)
            }

        </Box>
    )
}

export default CardList