import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import { Container, Divider, Grid, Paper, Typography, Box, Pagination } from "@mui/material";
import SearchSortAddComponent from './search.component';
import Filter from './filter.component';
import CardList from './card-list.component';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

const AllSections = () => {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 4;

    const { details } = useSelector(state => state.trackerInfo)

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    }

    useEffect(() => {
        setTotal(details.length)
    }, [details.length])
    return (
        <Container sx={{ flexGrow: 1, mt: 10, mb: 6 }}>
            <Grid container spacing={2} >
                <Grid item xs >
                    <Item>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 25,
                            }}
                        >Filter</Typography>
                        <Filter />
                    </Item>
                </Grid>
                <Grid item xs={9}>
                    <Item>
                        <Box sx={{ height: '86vh' }}>
                            <SearchSortAddComponent />
                            <Divider sx={{ my: 3 }} />
                            <CardList limit={limit} page={page - 1} total={total} />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 1.5
                            }}>
                                <Pagination
                                    color="secondary"
                                    count={Math.ceil(total / limit)}
                                    page={page}
                                    onChange={handleChangePage}
                                />
                            </Box>
                        </Box>

                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AllSections