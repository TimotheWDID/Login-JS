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
        const interfacelogged = document.querySelector('#connected');
        const login = 'translateY(-100vh) translateX(00vw)';
        const logged = 'translateY(-100vh) translateX(-100vw)';
        const forgetpassword1 = 'translateY(-100vh) translateX(100vw)';
        const forgetpassword2 = 'translateY(-100vh) translateX(200vw)';
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
            let goto = item.dataset.go;
                
                switch (goto) {
                    case 'logged':
                        if (testlogin()){
                            main.style.transform = logged;
                            interfacelogged.style.display = 'flex';                            
                        }
                        else
                            console.log('Connexion failed');
                            
                        break;

                    case 'login':
                        main.style.transform = login;
                        break;

                    case 'reload':
                        window.location.reload()
                        break;
                        
                    case 'forgetpassword1':
                        main.style.transform = forgetpassword1;
                        break;

                    case 'forgetpassword2':
                       
                        main.style.transform = forgetpassword2;
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

//<Functions