import '../style/header.css';



function Header(){
    return (
        <header className="header-wraper">
            <div className="header-logo">
                <div className='star-logo'><img src="/img/star.svg" alt="" /></div>
                <a onClick={()=> {window.ym(93758518,'reachGoal','HeaderLinkClick')}} href="https://gj8u.adj.st?adj_t=4f36o8o&adj_campaign=pionopad&adj_adgroup=landing_logo"><img src="/img/Vector.png" alt="LOGO" /></a>
            </div>
        </header>
    )
}

export default Header;