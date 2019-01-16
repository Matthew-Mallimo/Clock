import React from 'react'
import { FaCog, FaChevronLeft } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';

export default ({ settingsAction, arrow }) => {
    const Icon = arrow ? FaChevronLeft : FaCog;
    return ( 
        <div style={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: '#282c34', hegiht: '10vh' }}>
            <IconButton onClick={() => settingsAction()} >
                <Icon size="2em" style={{ color: 'white', flexDirection: 'left' }} />
            </IconButton>
        </div>
    )
}