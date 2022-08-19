import React from 'react'
import { Box, TextField, Checkbox, Typography, FormControlLabel, FormGroup } from "@mui/material";


const Filter = () => {
    return (
        <Box >
            <Box sx={{ mt: 2 }}>
                <Typography>Range:</Typography>
                <Box sx={{ p: 1, my: 1 }}>

                    <TextField
                        label='Min'
                        size='small'
                        id="outlined-basic"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ mt: 1 }}
                        label='Max'
                        size='small'
                        id="outlined-basic"
                        variant="outlined"
                    />
                </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography>Type:</Typography>
                <Box sx={{ p: 1, my: 1 }}>
                    <FormGroup
                        defaultValue="income"
                    >
                        <FormControlLabel
                            value='income'
                            control={<Checkbox />}
                            label="Income"
                        />

                        <FormControlLabel
                            value='expense'
                            control={<Checkbox />}
                            label="Expense"
                        />
                    </FormGroup>
                </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography>Category:</Typography>
                <Box sx={{ p: 1, my: 1 }}>
                    <FormGroup
                        defaultValue="income"
                    >
                        <FormControlLabel
                            value='income'
                            control={<Checkbox />}
                            label="Food"
                        />

                        <FormControlLabel
                            value='expense'
                            control={<Checkbox />}
                            label="Travel"
                        />
                        <FormControlLabel
                            value='income'
                            control={<Checkbox />}
                            label="Salary"
                        />

                        <FormControlLabel
                            value='expense'
                            control={<Checkbox />}
                            label="Utilities"
                        />
                        <FormControlLabel
                            value='income'
                            control={<Checkbox />}
                            label="Medical"
                        />

                        <FormControlLabel
                            value='expense'
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