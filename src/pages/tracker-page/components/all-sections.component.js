import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { styled } from '@mui/material/styles';
import { Container, Divider, Grid, Paper, Box, Pagination } from "@mui/material";
import SearchSortAddComponent from './search.component';
import Filter from './filter.component';
import CardList from './card-list.component';
import { getSearchedData, getTrackerDetails } from '../../../redux/actions/tracker.action';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

const AllSections = () => {
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(false);
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 4;

    console.log('SELIES', refresh)

    const { details } = useSelector(state => state.trackerInfo)

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    }

    const handleSearch = (e) => {
        setTimeout(() => {
            localStorage.setItem('isFilter', true)
            dispatch(getSearchedData(e.target.value))
        }, 3000);
        setSearch(e.target.value)
    }

    useEffect(() => {
        setRefresh(JSON.parse(localStorage.getItem('isFilter')))
        console.log(localStorage.getItem('isFilter'))
    }, [])

    useEffect(() => {
        dispatch(getTrackerDetails())
    }, [dispatch])

    useEffect(() => {
        setTotal(details.length)
    }, [details.length])
    return (
        <Container sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Item>
                        <Filter setRefresh={setRefresh} />
                    </Item>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Item>
                        <Box sx={{
                            height: {
                                xs: '68vh', 
                                md: '70vh'
                            }
                        }}
                        >
                            <SearchSortAddComponent
                                search={search}
                                handleSearch={handleSearch}
                                setRefresh={setRefresh}
                            />
                            <Divider sx={{ my: 1 }} />
                            <CardList
                                limit={limit}
                                page={page - 1}
                                total={total}
                                refresh={refresh}
                            />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 2
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