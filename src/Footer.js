import './footer.css';
function Footer(){
    return(
        <footer className="foot">
        <div className='whole-footer'>
            <div className='socials'>
                <h4>Socials</h4>
                <ul className='social-list'>
                    <li className='social-item'>
                        <a href='https://www.facebook.com/groups/988637565905969/' className='social-links'> Facebook <i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li className='social-item'>
                        <a href='https://www.instagram.com/_quote_club/' className='social-links'> Instagram <i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li className='social-item'>
                        <a href='https://x.com/i/flow/login?redirect_after_login=%2FINSPQuotesClub' className='social-links'> Twitter <i class="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li className='social-item'>
                        <a href='https://in.pinterest.com/pin/55591376637125956/' className='social-links'> Pinterest <i class="fa-brands fa-pinterest"></i></a>
                    </li>
                </ul>
            </div>
            <div className='foot-list-div'>
            <ul className="foot-list">
                <li className="foot-item">
                    <a href='#'>Home</a>
                </li>
                <li className="foot-item">
                    <a href='#'>About</a>
                </li>
                <li className="foot-item">
                    <a href='#'>Others</a>
                </li>
            </ul>
            </div>
            <hr className="foot-divider" />
            <div className='foot-text'>
                <p className="foot-text1">© 2025 Quote Gallery</p>
                <p className='foot-text2'>All rights reserved</p>
            </div>
        </div>
        </footer>
    );
}
export default Footer;