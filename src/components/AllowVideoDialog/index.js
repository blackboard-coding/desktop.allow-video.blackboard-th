import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 200,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));

export default function AllowVideoDialog(props) {
    const classes = useStyles();

    const [fullWidth, setFullWidth] = React.useState(false);
    const [status, setStatus] = React.useState(0);


    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Dialog
                fullWidth={fullWidth}
                // maxWidth={maxWidth}
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">ตรวจสอบ วิดีโอ</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        การอนุญาตนี้จะมีผลในการเผยแพร่วิดีโอสู่สาธารณะ
          </DialogContentText>
                    <form className={classes.form} noValidate>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="status">ตรวจสอบการเผยแพร่วิดีโอ</InputLabel>
                            <Select
                                autoFocus
                                value={status}
                                onChange={handleStatusChange}
                                inputProps={{
                                    name: 'status',
                                    id: 'status',
                                }}
                            >
                                <MenuItem value="0">รอการอนุญาติ</MenuItem>
                                <MenuItem value="1">อนุญาติ</MenuItem>
                                <MenuItem value="2">ไม่อนุญาติ</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <FormControlLabel
              className={classes.formControlLabel}
              control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
              label="Full width"
            /> */}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        ยืนยัน
          </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
