import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Box, TextField, Checkbox, Typography, FormControlLabel, FormGroup } from "@mui/material";
import { getRangeData, getTypedData, getCategoryData } from '../../../redux/actions/tracker.action';


const Filter = ({ setRefresh }) => {
    const dispatch = useDispatch()
    const [minMax, setMinMax] = useState({ min: 0.0, max: 0.0 })
    const [type, setType] = useState([])
    const [category, setCategory] = useState([])

    console.log(category)

    useEffect(() => {
        dispatch(getCategoryData(category))
    }, [dispatch, category])

    useEffect(() => {
        dispatch(getTypedData(type))
    }, [dispatch, type])

    useEffect(() => {
        dispatch(getRangeData(minMax))
    }, [dispatch, minMax])

    return (
        <Box sx={{ pl: { xs: 2, md: 0 }, pt: { xs: 4, md: 0 } }}>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: 20,
                }}
            >Filter</Typography>
            <Box sx={{ mt: 1.5 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Range:</Typography>
                <Box >

                    <TextField
                        value={minMax.min === 0.0 ? '' : minMax.min}
                        onChange={(e) => {
                            setRefresh(true)
                            localStorage.setItem('isFilter', true)
                            setMinMax({ ...minMax, min: e.target.value })
                        }}
                        label='Min'
                        size='small'
                        id="outlined-basic"
                        variant="outlined"
                        type='number'
                    />
                    <TextField
                        value={minMax.max === 0.0 ? '' : minMax.max}
                        onChange={(e) => {
                            setRefresh(true)
                            localStorage.setItem('isFilter', true)
                            setMinMax({ ...minMax, max: e.target.value })
                        }}
                        sx={{ mt: 1 }}
                        label='Max'
                        size='small'
                        id="outlined-basic"
                        variant="outlined"
                        type='number'
                    />
                </Box>
            </Box>
            <Box sx={{ mt: 1.5 }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                    Type:
                </Typography>
                <Box >
                    <FormGroup
                        onChange={(e) => {
                            setType(typ => {
                                localStorage.setItem('isFilter', true)
                                if (typ?.includes(e.target.value)) {
                                    return typ?.filter(item => item !== e.target.value)

                                } else {
                                    return [...typ, e.target.value]
                                }
                            })
                        }}
                    >
                        <FormControlLabel
                            value='Income'
                            control={<Checkbox size='small' />}
                            label="Income"
                        />

                        <FormControlLabel
                            value='Expense'
                            control={<Checkbox size='small' />}
                            label="Expense"
                        />
                    </FormGroup>
                </Box>
            </Box>
            <Box sx={{ mt: 1.5 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Category:</Typography>
                <Box >
                    <FormGroup
                        onChange={(e) => {
                            setCategory(cat => {
                                localStorage.setItem('isFilter', true)
                                if (cat?.includes(e.target.value)) {
                                    return cat?.filter(item => item !== e.target.value)

                                } else {
                                    return [...cat, e.target.value]
                                }
                            })
                        }}
                    >
                        <FormControlLabel
                            value='food'
                            control={<Checkbox size='small' />}
                            label="Food"
                        />

                        <FormControlLabel
                            value='travel'
                            control={<Checkbox size='small' />}
                            label="Travel"
                        />
                        <FormControlLabel
                            value='salary'
                            control={<Checkbox size='small' />}
                            label="Salary"
                        />

                        <FormControlLabel
                            value='utilities'
                            control={<Checkbox size='small' />}
                            label="Utilities"
                        />
                        <FormControlLabel
                            value='medical'
                            control={<Checkbox size='small' />}
                            label="Medical"
                        />

                        <FormControlLabel
                            value='personal'
                            control={<Checkbox size='small' />}
                            label="Personal"
                        />
                    </FormGroup>
                </Box>
            </Box>
        </Box>
    )
}

export default Filter