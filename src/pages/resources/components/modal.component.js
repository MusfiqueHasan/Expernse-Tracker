import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogContentText, Typography, DialogActions, Chip, Button, Slide, Box, Alert } from "@mui/material";
import InputTrackerForm from '../../tracker-page/components/input-tracker.component';
import { createTrackerDetails, updateStateModal, updateTrackerInfo, updateTrackerState } from '../../../redux/actions/tracker.action';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const initTrackerInfo = {
    type: '',
    description: '',
    category: '',
    amount: 0.0
}

const ModalComponent = () => {
    const dispatch = useDispatch()
    const [trackerInfo, setTrackerInfo] = useState(initTrackerInfo)
    const [message, setMessage] = useState("");
    const [openFailureAlert, setOpenFailureAlert] = useState(false);
    const { openModel, singleInfo } = useSelector(state => state.trackerInfo)

    console.log(trackerInfo);

    const validateTracker = () => {
        if (!trackerInfo?.type) {
            return "Please Insert type";
        }
        if (!trackerInfo?.description) {
            return "Please Insert Description";
        }
        if (!trackerInfo?.category) {
            return "Please Select Category";
        }
        if (!trackerInfo?.amount) {
            return "Please Insert Amount";
        }
        return ""
    }

    const handleSaveAndUpdate = () => {
        let err = validateTracker();
        if (err !== "") {
            setMessage(err)
            setOpenFailureAlert(true)
            return;
        } else {
            if (singleInfo.id) {
                dispatch(updateTrackerInfo(trackerInfo))
            } else {
                dispatch(createTrackerDetails(trackerInfo))
            }
            dispatch(updateStateModal(false))
        }

    }

    useEffect(() => {
        if (singleInfo.id) {
            setTrackerInfo(singleInfo)
        } else {
            setTrackerInfo(initTrackerInfo)
        }
    }, [singleInfo])

    return (
        <Dialog
            fullWidth
            maxWidth='sm'
            open={openModel}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => {
                dispatch(updateStateModal(false))
                dispatch(updateTrackerState({}))
            }}
        >
            <DialogContent>
                <DialogContentText
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                    id="alert-dialog-slide-description">

                    <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#0091ea' }}> Welcome </Typography>
                    <Typography variant='body' >Create your personal expenses list.</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 3, p: 3 }}
            >
                {openFailureAlert &&
                    <Alert
                        sx={{ mb: 2, width: '70%' }}
                        severity="error"
                        onClose={() => setOpenFailureAlert(false)}
                    >{message}
                    </Alert>
                }

                <InputTrackerForm trackerInfo={trackerInfo} setTrackerInfo={setTrackerInfo} />

                <Box sx={{ mt: 5 }}>
                    <Chip
                        sx={{ bgcolor: '#fff3e0', cursor: 'pointer', mr: 2 }}
                        label={<Button
                            sx={{ color: '#ef6c00', fontWeight: 'bold' }}
                            onClick={() => {
                                dispatch(updateStateModal(false))
                                dispatch(updateTrackerState({}))
                            }}
                        >
                            CANCEL
                        </Button>
                        }
                    />
                    <Chip
                        sx={{ bgcolor: '#e1f5fe', cursor: 'pointer' }}
                        label={<Button
                            sx={{ color: '#0277bd', fontWeight: 'bold' }}
                            onClick={handleSaveAndUpdate}
                        >
                            {singleInfo.id ? 'UPDATE' : ' SAVE'}
                        </Button>
                        }
                    />
                </Box>


            </DialogActions>
        </Dialog >
    )
}

export default ModalComponent