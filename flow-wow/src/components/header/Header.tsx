import '../style/header.css';



function Header(){
    return (
        <header className="header-wraper">
            <div className="header-logo">
                <div className='star-logo'><img src="/img/star.png" alt="" /></div>
                <a href="https://flowwow.com/"><img src="/img/Vector.png" alt="LOGO" /></a>
            </div>
        </header>
    )
}

export default Header;