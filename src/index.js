//>Import scss
import './global';
//<Impo

//Import img
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
} 

//>Const
    //>General
        const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    //<General

    //>Connexion infos
        const email = 'portelli.timothe@gmail.com';
        const password = 'salut';
        const loadtime = 1000;
    //<Connexion infos

    //>Pages
        const main = document.querySelector('main');
        const connected = 'translateY(-100vh) translateX(-100vw)';
        const forgetpassword = 'translateY(-100vh) translateX(100vw)';
        const register1 = 'translateY(00vh) translateX(00vw)';
        const register2 = 'translateY(00vh) translateX(-100vw)';
        const register3 = 'translateY(00vh) translateX(-200vw)';
    //<Pages

//<Const

//>Functions

    //>Connexion page

        //>Test Login
        function testlogin() { 
            let dataemail = document.querySelector('#dataemail').value
            let datapassword = document.querySelector('#datapassword').value
            if (datapassword === password && dataemail === email)
                return true;
            else
                return false;
        };
        //<Test Login
    //<Connexion page

    //>Change page

        document.querySelector('#login-submit').addEventListener('click', (e)=>{ //Log-in
            e.preventDefault();
            if (testlogin()) { //connected
                main.style.transform = connected;
                
            }else //wrong password or email
                console.log('Connection failed');
  
        });

        document.querySelector('#forgetpassword').addEventListener('click', (e)=>{ //forget password
            e.preventDefault();
            main.style.transform = forgetpassword;
        });

        document.querySelector('#register').addEventListener('click', (e)=>{ //forget password
            e.preventDefault();
            console.log('reg');
            
            main.style.transform = register1;
        });
    //<Change page
//<Functions