import '../style/header.css';



function Header(){
    return (
        <header className="header-wraper">
            <div className="header-logo">
                HEADER LOGO
            </div>
            <ul className="header-list">
                <li>Ссылка на раздел</li>
                <li>Ссылка на раздел</li>
                <li>Ссылка на игру</li>
                <li>Ссылка на раздел</li>
                <li>Ссылка на раздел</li>
            </ul>
        </header>
    )
}

export default Header;