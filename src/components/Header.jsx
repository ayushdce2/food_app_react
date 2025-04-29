import "../assets/css/header.css";
const reactImg = "../src/assets/images/react.svg";


const Header = ()=>{
    return(
        <>
            <div className="headerWrap">
                <div className="header_logo">
                    <img src={reactImg}/>
                </div>
                <div className="header_menuItems">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Home</a></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;