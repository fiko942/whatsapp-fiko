import './index.scss'
import './color.scss'
import './font.scss'
import Sidebar from 'component/Sidebar'
import {useEffect, useState} from 'react'
import MainContent from 'component/MainContent'

function App() {

    const [activeItem, setActiveItem] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const handleSidebarOpenToggle = () => setSidebarOpen(x => !x)

  return (
      <div className="main-container">
          <Sidebar
            opened={sidebarOpen}
            onOpenToggle={handleSidebarOpenToggle}
            activeItem={activeItem}
            onActiveItemChange={item => setActiveItem(item)}
          />
          <MainContent>
              This is a main content
          </MainContent>
      </div>
  );
}

export default App;
