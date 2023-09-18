import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <div><Link to="/"><div className="header_logoimg"></div></Link></div>
                <h1>Front End Dictionary</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/write"><div className="write_logo"></div>작성</Link></li>
                    <li><Link to="/Edit"><div className="edit_logo"></div>수정</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;