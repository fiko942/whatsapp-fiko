import icon from 'static/images/icon/whatsapp.png'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'

export default function WhatsAppItem({sidebarOpen, id, active, notifCount, onClick, name}) {
    return (
        <Tooltip
            title={name}
        >
            <div
                className="whatsapp-item"
                data-sidebar-open={sidebarOpen ? '1' : '0'}
                data-active={active ? '1' : '0'}
                onClick={onClick}
            >
                <Badge badgeContent={notifCount} color='error'>
                <div className="item-container">
                        <img
                            src={icon}
                            alt=""
                            className="icon" />
                        <div className="info">
                            <div className="name">{name}</div>
                        </div>

                </div>
                </Badge>
            </div>
        </Tooltip>
    )
}