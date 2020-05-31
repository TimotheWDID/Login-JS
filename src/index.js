//>Import scss
import './global';
//<Impo

//>Import img
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
} 
//<Import img

//>Const
    //>General
        const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    //<General

    //>Connexion infos
        const email = 'test@test.com';
        const password = 'password';
        const loadtime = 1000;
    //<Connexion infos

    //>Data Connexion
        const dataemail = document.querySelector('#dataemail');
        const datapassword = document.querySelector('#datapassword');
    //<Data Connexion

    //>Pages
        const main = document.querySelector('main');
        const interfacelogged = document.querySelector('#connected');
        const login = 'translateY(-100vh) translateX(00vw)';
        const logged = 'translateY(-100vh) translateX(-100vw)';
        const forgotpassword1 = 'translateY(-100vh) translateX(100vw)';
        const forgotpassword2 = 'translateY(-100vh) translateX(200vw)';
        const register1 = 'translateY(00vh) translateX(00vw)';
        const register2 = 'translateY(00vh) translateX(-100vw)';
        const register3 = 'translateY(00vh) translateX(-200vw)';
    //<Pages

    //>Watch password
        const eyeoff = document.querySelector('#eye-off');
        const eyeon = document.querySelector('#eye-on');
    //<Watch password

//<Const

//>Functions

    //>Test Login
    function testlogin() { 
        if (datapassword.value === password && dataemail.value === email)
            return true;
        else
            return false;
    };

    function redirectToConnect(){
        console.log('redirection vers une nouvelle page sécurisé pour la personne connecter.');
    };
    //<Test Login


    //>Click to Change interface

        document.querySelectorAll('form').forEach(item =>{
            item.addEventListener('submit', (e) =>{
                e.preventDefault();
                goto(item);
            })
        })

        document.querySelectorAll('a').forEach(item =>{
            item.addEventListener('click', (e) =>{
                e.preventDefault();
                goto(item);
            })
        })

        function goto(item){
            let goto = item.dataset.go; // all transition are informed in the attribute data 'go' so to change the link modify this attribut.
                
                switch (goto) {
                    case 'logged':
                        if (testlogin()){
                            main.style.transform = logged;
                            interfacelogged.style.display = 'flex';  
                            var wait;  
                            wait = setTimeout(redirectToConnect, 800); //a little less time than animation to make the transition more dynamic.
                        }
                        else
                            document.querySelector('#error').classList.toggle('error-show');
                            dataemail.value = '';
                            datapassword.value = '';
                            dataemail.parentNode.classList.toggle('error-input');
                            datapassword.parentNode.classList.toggle('error-input'); 
                            
                        break;

                    case 'login':
                        main.style.transform = login;
                        break;

                    case 'reload':
                        window.location.reload()
                        break;
                        
                    case 'forgotpassword1':
                        main.style.transform = forgotpassword1;
                        break;

                    case 'forgotpassword2':                       
                        main.style.transform = forgotpassword2;
                        break;

                    case 'register1':                       
                        main.style.transform = register1;
                        break;

                    case 'register2':                       
                        main.style.transform = register2;
                        break;

                    case 'register3':
                        main.style.transform = register3;
                        break;

                    case 'disconnect':
                        interfacelogged.style.display = 'none';
                        window.location.reload()
                        break;
                    
                    default:
                        break;
                }
        };

    //<Click to change interface

    //>Show password
    eyeoff.addEventListener('click', (e) =>{
        datapassword.setAttribute('type', 'password');
        eyeoff.classList.toggle('d-none');
        eyeon.classList.toggle('d-none');
    });
    
    eyeon.addEventListener('click', (e) =>{
        datapassword.setAttribute('type', 'text');
        eyeoff.classList.toggle('d-none');
        eyeon.classList.toggle('d-none');
    });
    //<Show password

//<Functions
