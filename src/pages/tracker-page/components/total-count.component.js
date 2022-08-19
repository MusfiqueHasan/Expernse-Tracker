import React from 'react'
import {useSelector } from "react-redux";
import { Paper, Chip } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const TotalIncomeAndExpense = () => {
    const { details } = useSelector(state => state.trackerInfo)

    return (
        <Paper sx={{
            width: "70%",
            height: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'white',
            position: 'absolute',
            bottom: -60,
            borderRadius: 5
        }}>
            <Chip
                sx={{
                    width: '40%',
                    bgcolor: '#e0f2f1',
                    color: '#00bfa5',
                    fontWeight: 'bold',
                    fontSize: 20,
                    py: 3,
                    mr: 2,
                }}
                label={<span
                    style={{ display: 'flex', alignItems: 'center' }}>
                    <MonetizationOnIcon />
                    Income: ট{details.filter(val => val.type === "Income").reduce((previousValue, currentValue) => (previousValue + parseFloat(currentValue.amount)), 0)}
                </span>
                }


            />
            <Chip
                sx={{
                    width: '40%',
                    bgcolor: '#ffebee',
                    color: '#b71c1c',
                    fontWeight: 'bold',
                    py: 3,
                    fontSize: 20
                }}
                label={<span
                    style={{ display: 'flex', alignItems: 'center' }}>
                    <MonetizationOnIcon />
                    Expense: ট{details.filter(val => val.type === 'Expense').reduce((previousValue, currentValue) => (previousValue + parseFloat(currentValue.amount)), 0)}
                </span>
                }

            />
        </Paper>
    )
}

export default TotalIncomeAndExpense