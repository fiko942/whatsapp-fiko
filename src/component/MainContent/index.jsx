import './main.scss'

export default function MainContent({children}) {
    return (
        <div className="main-content element">
            <div className="container">
                {children}
            </div>
        </div>
    )
}