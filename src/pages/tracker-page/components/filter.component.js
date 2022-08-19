import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Box, TextField, Checkbox, Typography, FormControlLabel, FormGroup } from "@mui/material";
import { getRangeData, getTypedData, getCategoryData } from '../../../redux/actions/tracker.action';


const Filter = () => {
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
        <Box sx={{ p: { xs: 3, md: 1.5 } }}>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: 25,
                }}
            >Filter</Typography>
            <Box sx={{ mt: 2, }}>
                <Typography sx={{ fontWeight: 'bold' }}>Range:</Typography>
                <Box sx={{ p: 1, my: 0.5 }}>

                    <TextField
                        value={minMax.min === 0.0 ? '' : minMax.min}
                        onChange={(e) => {
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
            <Box sx={{ mt: 1 }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                    Type:
                </Typography>
                <Box sx={{ p: 1, my: 0.5 }}>
                    <FormGroup
                        onChange={(e) => {
                            setType(typ => {
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
                            control={<Checkbox />}
                            label="Income"
                        />

                        <FormControlLabel
                            value='Expense'
                            control={<Checkbox />}
                            label="Expense"
                        />
                    </FormGroup>
                </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Category:</Typography>
                <Box sx={{ p: 1, my: 0.5 }}>
                    <FormGroup
                        onChange={(e) => {
                            setCategory(cat => {
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
                            control={<Checkbox />}
                            label="Food"
                        />

                        <FormControlLabel
                            value='travel'
                            control={<Checkbox />}
                            label="Travel"
                        />
                        <FormControlLabel
                            value='salary'
                            control={<Checkbox />}
                            label="Salary"
                        />

                        <FormControlLabel
                            value='utilities'
                            control={<Checkbox />}
                            label="Utilities"
                        />
                        <FormControlLabel
                            value='medical'
                            control={<Checkbox />}
                            label="Medical"
                        />

                        <FormControlLabel
                            value='personal'
                            control={<Checkbox />}
                            label="Personal"
                        />
                    </FormGroup>
                </Box>
            </Box>
        </Box>
    )
}

export default Filter