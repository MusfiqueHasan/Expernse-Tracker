import React from 'react'
import { Box, Typography, Paper } from "@mui/material";
import trackerBg from "../../assets/expense-tracker-bg.jpg"
import TotalIncomeAndExpense from './components/total-count.component';
import AllSections from './components/all-sections.component';

const Tracker = () => {
    return (
        <Paper elevation={3} sx={{ m: { xs: 1, md: 4 }, pb: 1 }}>
            <Box
                sx={{
                    width: '100%',
                    height: '30vh',
                    backgroundImage: `linear-gradient(rgba(26, 58, 110, 0.5), rgba(26, 58, 110, 0.7)), 
                    url(${trackerBg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'scroll',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    borderRadius: 1
                }}
            >
               
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: {
                            xs: 16,
                            md: 40
                        },
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        fontFamily: 'cursive'
                    }}
                >
                    Personal Expense Tracker
                </Typography>
                <TotalIncomeAndExpense />
            </Box>
            <AllSections />
        </Paper>
    )
}

export default Tracker