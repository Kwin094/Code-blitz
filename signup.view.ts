interface Input {
    name: string;
    email: string;
    password: string;
}
export class SignupView {
    private app: HTMLElement;
    private form: HTMLElement;
    private submitButton: HTMLElement;
    private inputName: HTMLInputElement;
    private inputEmail: HTMLInputElement;
    private inputPassword: HTMLInputElement;
    private title: HTMLElement;

    constructor() {
        this.app = document.getElementById('root')
            const html=`
            <div class = 'box'>
                <img src="https://lh5.googleusercontent.com/e1zlxn6kj-9k2QuNR1aDVkmNYXoDwdvXMF_k-6L-LmbB4Ny_RdH1GnAD9fBMbW8RhBikZz5c=w16383" alt="Blitz Icon" width="215" height="134">                
                <form id='Signup' method='post'>
                     <h1>Signup</h1>
                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png" alt="user Icon" width="20" height="20">
                    <input name='name' type='text' placeholder='Name' required="" />            
                </div>
                <div>
                     <img src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/mail-icon.png" alt="Mail Icon" width="20" height="20">
                    <input name='email' type='text' placeholder='Email' required=""/>
                 </div>
                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/lock-24-512.png" alt="Lock Icon" width="20" height="20">
                    <input name='password' type='password' placeholder='Password' required="" />
                </div>
                <div>
                    <button type='submit' >Let's Code!</button>
                </div>
            </div>
        `;
        this.app.innerHTML =html;

        document.getElementById('Signup')
            .addEventListener('submit', event => {
                //event.preventDefault(); -- actually post is handy, no need for ajax call
                const { origin, pathname } = location;
                setTimeout(()=>{ 
                    // timeout is temporary hack pending server auth implementation
                    location.replace(origin+pathname+'?page=home');
                })
        });
            
    //    this._temporaryAgeText = '';
    //    this._initLocalListeners();
    }
}
