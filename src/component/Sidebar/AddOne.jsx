import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useEffect, useState} from 'react'
import Tooltip from '@mui/material/Tooltip'

export default function AddOne() {
    const [hovered, setHovered] = useState(false)

    return (
        <Tooltip
            title='Add new whatsapp session'
        >
            <div
                className='add-one'
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                data-hovered={hovered ? '1' : '0'}
            >
                <button
                    className='btn'
                >
                    {hovered ? <AddCircleIcon className='icon' /> : <AddIcon className='icon' />}
                </button>
            </div>
        </Tooltip>
    )
}