import AniLogo from "./AniLogo.png";
import css from "./header.css"

function Header() {
    return (
        <>
            <div className="Header">
                <header className="App-header">
                    <img src={AniLogo} alt="anime logo" className="AniLogo"></img>
                </header>

            </div>
           
        </>

    );
}

export default Header;