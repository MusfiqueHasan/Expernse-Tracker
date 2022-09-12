import React from 'react'
import { useSelector } from "react-redux";
import { Paper, Chip, Grid } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const TotalIncomeAndExpense = () => {
    const { details } = useSelector(state => state.trackerInfo)

    return (
        <Paper sx={{
            width: "50%",
            height: '43%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'white',
            position: 'absolute',
            bottom: -30,
            borderRadius: 2,
            px: 5
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Chip
                        sx={{
                            width: '100%',
                            bgcolor: '#e0f2f1',
                            color: '#00bfa5',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: 12,
                                md: 15
                            },
                            py: { md: 1 },
                            mr: 2,
                        }}
                        label={<span
                            style={{ display: 'flex', alignItems: 'center' }}>
                            <MonetizationOnIcon sx={{ fontSize: 18 }} />
                            Income: ট{details.filter(val => val.type === "Income").reduce((previousValue, currentValue) => (previousValue + parseFloat(currentValue.amount)), 0)}
                        </span>
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Chip
                        sx={{
                            width: '100%',
                            bgcolor: '#ffebee',
                            color: '#b71c1c',
                            fontWeight: 'bold',
                            fontSize: {
                                xs: 12,
                                md: 15
                            },
                            py: { md: 1 },
                        }}
                        label={<span
                            style={{ display: 'flex', alignItems: 'center' }}>
                            <MonetizationOnIcon sx={{ fontSize: 18 }} />
                            Expense: ট{details.filter(val => val.type === 'Expense').reduce((previousValue, currentValue) => (previousValue + parseFloat(currentValue.amount)), 0)}
                        </span>
                        }
                    />
                </Grid>
            </Grid>


        </Paper>
    )
}

export default TotalIncomeAndExpense