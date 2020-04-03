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
                <img src="http://icon-library.com/images/blitz-icon/blitz-icon-18.jpg" alt="Blitz Icon" width="128" height="140">
                <form id='home' method='post'>
                    <h1>Welcome!</h1>
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
