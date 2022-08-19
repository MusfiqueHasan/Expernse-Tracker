import React from 'react';
import { useDispatch } from "react-redux";
import { Box, Grid, Typography, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTrackerDetails, getSingTackerDetails, updateStateModal } from '../../../redux/actions/tracker.action';


const SingleCard = ({ data }) => {
    const dispatch = useDispatch()
    const { id, description, type, category, amount } = data

    return (
        <Paper elevation={4} sx={{ p: 2, mb: 3, minHeight: '90px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography sx={{ fontSize: 13, textAlign: 'justify' }}>
                        <span style={{ fontWeight: 'bold' }}>Description: </span>
                        {description}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box >
                        <EditIcon
                            sx={{
                                mr: 1,
                                fontSize: 20,
                                color: '#26a69a',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                dispatch(getSingTackerDetails(id))
                                dispatch(updateStateModal(true))
                            }}
                        />
                        <DeleteIcon
                            sx={{
                                fontSize: 20,
                                color: '#c62828',
                                cursor: 'pointer'
                            }}
                            onClick={() =>
                                dispatch(deleteTrackerDetails(id))
                            }
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 13 }}>
                    <span style={{ fontWeight: 'bold' }}>Category: </span>
                    {category}
                </Typography>
                <Typography
                    sx={{
                        fontSize: 15,
                        fontWeight: 900,
                        color: `${type === 'Income' ? '#2e7d32' : '#ff3d00'}`
                    }}
                >
                    {type === 'Income' ? '+' : '-'} ট{amount}
                </Typography>
            </Box>

        </Paper>
    )
}

export default SingleCard