import { format } from "path";
import { checkServerIdentity } from "tls";

interface Input {
    email: string;
    password: string;
}
export class LoginView {
    private app: HTMLElement;

    constructor() {
        this.app = document.getElementById('root');

        const html = `
            <div body = 'body'>
            <div class = 'box'>
                <img src="https://lh4.googleusercontent.com/xCv75cDFObxFUmJLWsaNaXLqVpPTJosOfMDM7Va7E0ftUyNU6Rd0q_FDdlfm6J9G7CW1ZAjvsQjuix_-bnVg6nkRCCYhHK5OZFTaUzO6IHMBivEdA1oB=w1280" alt="Blitz Icon" width="235" height="130">
                <form id='loginForm' method='post'>
                    <h1>Clode Blitz</h1>
                    <div>
                        <img src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/mail-icon.png" alt="Mail Icon" width="20" height="20">
                        <input name='email' type='text' placeholder='Email' required="" />
                    </div>
                    <div>
                        <img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/lock-24-512.png" alt="Lock Icon" width="20" height="20">
                        <input name='password' type='password' placeholder='Password' required=""/>
                    </div>
                    <div>
                        <button type='submit'>Sign In</button>
                    </div>
                        <p> Don't have an account? <a href="?page=signup" target ="_top" >Create an account</a></span>
                    </div>
                </form>
            </div>
        `;
        this.app.innerHTML = html;
        
        document.getElementById('loginForm')
        .addEventListener('submit', event => {
            //event.preventDefault(); -- actually post is handy, no need for ajax call
            const { origin, pathname } = location;
            setTimeout(()=>{ 
                // timeout is temporary hack pending server auth implementation
                location.replace(origin+pathname+'?page=home');
            })

            });
        
      
    }
    //    this._temporaryAgeText = '';
    //    this._initLocalListeners();
    
}
