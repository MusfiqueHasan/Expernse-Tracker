import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Fab, Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import AddIcon from '@mui/icons-material/Add';
import ModalComponent from '../../resources/components/modal.component';
import SortIcon from '@mui/icons-material/Sort';
import { getSortedData, updateStateModal } from '../../../redux/actions/tracker.action';
import DrawerComponent from '../../resources/components/drawer.component';



const SearchSortAddComponent = ({ search, handleSearch }) => {
    const dispatch = useDispatch()
    const [state, setState] = React.useState({ left: false });

    const { openModel } = useSelector(state => state.trackerInfo)


    const handleAddTrackerInfo = () => { dispatch(updateStateModal(true)) }

    const handleSortedData = () => { dispatch(getSortedData()) }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
                <TextField
                    value={search}
                    onChange={handleSearch}
                    fullWidth
                    size='small'
                    id="outlined-start-adornment"
                    placeholder='search transactions...'
                    InputProps={{
                        startAdornment: <SearchIcon sx={{ mr: 2 }} />
                    }}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'space-evenly', md: 'space-between' }, alignItems: 'center', mt: { xs: 1, md: 0 } }}>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <SortIcon
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    cursor: 'pointer',
                                    fontSize: 30
                                }}
                                onClick={toggleDrawer(anchor, true)}
                            />
                            <DrawerComponent
                                toggleDrawer={toggleDrawer}
                                anchor={anchor}
                                state={state}
                            />
                        </React.Fragment>
                    ))}
                    <SwapVertIcon
                        sx={{
                            ml: 3,
                            fontSize: 30,
                            cursor: 'pointer'
                        }}
                        onClick={handleSortedData}
                    />
                    <Fab size="small" color="primary" aria-label="add">
                        <AddIcon onClick={handleAddTrackerInfo} />
                    </Fab>
                </Box>
                {openModel && <ModalComponent />}
            </Grid>
        </Grid>
    )
}

export default SearchSortAddComponent