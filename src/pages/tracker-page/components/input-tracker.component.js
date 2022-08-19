import React from 'react';
import { Chip, TextField, Grid, Radio, RadioGroup, FormControl, FormControlLabel, Autocomplete } from "@mui/material";

const InputTrackerForm = ({ trackerInfo, setTrackerInfo }) => {

    return (
        <Grid container spacing={1.5}>
            <Grid item xs={12} md={12}>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={trackerInfo?.type}
                        onChange={(e) => {
                            e.target.value === "Income" ? setTrackerInfo({ ...trackerInfo, type: "Income" }) : setTrackerInfo({ ...trackerInfo, type: "Expense" })
                        }}
                    >
                        <FormControlLabel
                            size='small'
                            value="Income"
                            control={<Radio size='small' />}
                            label={<Chip
                                sx={{ bgcolor: '#e8f5e9', cursor: 'pointer' }}
                                label={<span
                                    style={{ color: '#43a047', fontWeight: 'bold' }}
                                >INCOME</span>
                                }
                            />}
                        />

                        <FormControlLabel
                            size='small'
                            value="Expense"
                            control={<Radio size='small' />}
                            label={<Chip
                                sx={{ bgcolor: '#fbe9e7', cursor: 'pointer', }}
                                label={<span
                                    style={{ color: '#e64a19', fontWeight: 'bold' }}
                                >EXPENSE</span>
                                }
                            />
                            }
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    value={trackerInfo?.description}
                    onChange={(e) =>
                        setTrackerInfo({ ...trackerInfo, description: e.target.value })
                    }
                    fullWidth required
                    type='text'
                    size='small'
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={2}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Autocomplete
                    value={trackerInfo?.category}
                    onChange={(e, newValue) =>
                        setTrackerInfo({ ...trackerInfo, category: newValue })
                    }
                    fullWidth required
                    size='small'
                    id="combo-box-demo"
                    options={['food', 'travel', 'salary', 'utilities', 'personal', 'medical']}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField  {...params} label="Category" variant="outlined" />}
                />

            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    value={trackerInfo?.amount === 0.0 ? '' : trackerInfo?.amount}
                    onChange={(e) =>
                        setTrackerInfo({ ...trackerInfo, amount: e.target.value })
                    }
                    fullWidth required
                    type='number'
                    size='small'
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                />
            </Grid>

        </Grid>
    )
}

export default InputTrackerForm