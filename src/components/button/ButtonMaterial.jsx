import React from 'react';
import Button from '@mui/material/Button';

const ButtonMaterial = (props) => {

    const {onClick} = props

    const styles = {
        background: '#85bb65'
    }
    return (
        <Button
            sx={styles}
            variant="contained"
            color="success"
            size='small'
            onClick={onClick}
        >
            Посмотреть детали
        </Button>
    );
};

export default ButtonMaterial;