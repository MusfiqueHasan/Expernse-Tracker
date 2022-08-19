import  React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import Filter from '../../tracker-page/components/filter.component';

const DrawerComponent = ({ toggleDrawer, anchor, state }) => {

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Filter />
        </Box>
    );
    return (
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
            {list(anchor)}
        </Drawer>
    )
}

export default DrawerComponent