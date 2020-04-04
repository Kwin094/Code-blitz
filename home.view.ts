interface Input {
    email: string;
    password: string;
}
export class HomeView {
    private app: HTMLElement;
    private challengeButton: HTMLElement;
    private singlePlayButton: HTMLElement;
    private title: HTMLElement;

    constructor() {
        this.app = document.getElementById('root')
            const html = `
            <img src="https://lh5.googleusercontent.com/e1zlxn6kj-9k2QuNR1aDVkmNYXoDwdvXMF_k-6L-LmbB4Ny_RdH1GnAD9fBMbW8RhBikZz5c=w16383" alt="Blitz Icon" width="215" height="134">
                <form id='home' method='post'>
                    <h1>Welcome! </h1> 
                    <div>
                        <button type='submit' class="btn textbtn">Challenge</button>
                        
                    </div>
                    <div>
                        <button type='singlePlay' class="btn textbtn">Single Play</button>
                        
                    </div>
                   
                </form>
        `;
        this.app.innerHTML = html;
    
        document.getElementById('home')
             .addEventListener('submit', event => {
                //event.preventDefault(); -- actually post is handy, no need for ajax call
                const { origin, pathname } = location;
                setTimeout(()=>{ 
                    // timeout is temporary hack pending server auth implementation
                    location.replace(origin+pathname+'?page=challenge');
            })
        });
        document.getElementById('home')
        .addEventListener('singlePlay', event => {
           //event.preventDefault(); -- actually post is handy, no need for ajax call
           const { origin, pathname } = location;
           setTimeout(()=>{ 
               // timeout is temporary hack pending server auth implementation
               location.replace(origin+pathname+'?page=login');
       })
   });
        
    //    this._temporaryAgeText = '';
    //    this._initLocalListeners();
    }
}
