import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Fab } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import AddIcon from '@mui/icons-material/Add';
import ModalComponent from '../../resources/components/modal.component';
import { getSortedData, updateStateModal } from '../../../redux/actions/tracker.action';

const SearchSortAddComponent = () => {
    const dispatch = useDispatch()
    const { openModel } = useSelector(state => state.trackerInfo)

    const handleAddTrackerInfo = () => { dispatch(updateStateModal(true)) }

    const handleSortedData = () => { dispatch(getSortedData()) }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
        >
            <Box sx={{ width: '60%', display: 'flex', }}>
                <TextField
                    fullWidth
                    size='small'
                    id="outlined-start-adornment"
                    placeholder='search transactions...'
                    InputProps={{
                        startAdornment: <SearchIcon sx={{ mr: 2 }} />
                    }}
                />
                <SwapVertIcon
                    sx={{
                        ml: 3,
                        fontSize: 30,
                        cursor: 'pointer'
                    }}
                    onClick={handleSortedData}
                />
            </Box>
            <Fab size="small" color="primary" aria-label="add">
                <AddIcon onClick={handleAddTrackerInfo} />
            </Fab>
            {openModel && <ModalComponent />}
        </Box>
    )
}

export default SearchSortAddComponent