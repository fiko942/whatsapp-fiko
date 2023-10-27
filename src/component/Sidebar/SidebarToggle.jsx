import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Tooltip from '@mui/material/Tooltip'
export default function SidebarToggle({open, onToggle}) {
    return (
        <div className="sidebar-toggle"
        >
            <Tooltip
                title={open ? 'Minimize the sidebar' : 'Show more the sidebar'}
            >
                <button
                    onClick={onToggle}
                    data-open={open ? '1' : '0'}
                >
                    <DoubleArrowIcon
                        className='icon'
                    />
                </button>
            </Tooltip>
        </div>
    )
}