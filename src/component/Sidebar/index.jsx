import WhatsAppItem from './WhatsAppItem'
import './sidebar.scss'
import AddOne from './AddOne'
import SidebarToggle from './SidebarToggle'

export default function Sidebar({opened, onOpenToggle, activeItem, onActiveItemChange}) {
    return (
        <div className="element sidebar"
            data-opened={opened ? '1' : '0'}
        >
            <WhatsAppItem
                id='1'
                notifCount={10}
                sidebarOpen={opened}
                active={activeItem === '1'}
                onClick={() => onActiveItemChange('1')}
                name='Whatsap Personal'
            />
            <WhatsAppItem
                id='2'
                notifCount={10}
                sidebarOpen={opened}
                active={activeItem === '2'}
                onClick={() => onActiveItemChange('2')}
                name='Whatsap Personal'
            />
            <AddOne />
            <SidebarToggle
                open={opened}
                onToggle={onOpenToggle}
            />
        </div>
    )
}