const host = "alejotorres.com";
if ((host == window.location.host) && (window.location.protocol != "https:")) window.location.protocol = "https";

const verProyectos = document.querySelector('#ver-proyectos');
verProyectos.addEventListener('click', () => {
    const projects = document.querySelector('#projects');
    if (projects.offsetHeight>window.innerHeight){
        projects.scrollIntoView({ behavior: 'smooth'});
    } else {
        projects.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
});


const contactame = document.querySelector('#contactame');
contactame.addEventListener('click', () => {
    const contact = document.querySelector('#contact');
    contact.scrollIntoView({ behavior: 'smooth'});
});

const waraWeb = document.querySelector('#wara-web-button');
const waraWebURL = 'https://waragps.com';
waraWeb.addEventListener('click', () => window.open(waraWebURL, '_blank'));

const leagueMaker = document.querySelector('#league-maker-web-button');
const leagueMakerURL = '/pong';
leagueMaker.addEventListener('click', () => window.open(leagueMakerURL, '_blank'));

const homeAccountingGithub = document.querySelector('#home-accounting-github-button');
const homeAccountingGithubURL = 'https://github.com/alejotorres90/home-accounting';
homeAccountingGithub.addEventListener('click', () => window.open(homeAccountingGithubURL, '_blank'));

const picToGBCamera = document.querySelector('#pic-to-gbcamera-button');
const picToGBCameraURL = '/pic-to-gbcamera';
picToGBCamera.addEventListener('click', () => window.open(picToGBCameraURL, '_blank'));

const formSubmit = document.querySelector('#form-submit');
formSubmit.addEventListener('click', (e) => {

    e.preventDefault();

    const firstName = document.querySelector('#first-name-input').value;
    const lastName = document.querySelector('#last-name-input').value;
    const email = document.querySelector('#email-input').value;
    const subject = document.querySelector('#subject-input').value;
    const message = document.querySelector('#message-input').value;

    if (firstName != "" && lastName != "" && email != "" && subject != "" && message != "") {
        
        const contactModal = document.querySelector('#contact-modal');
        contactModal.style.visibility = 'visible';

        let alejoWebForm = {};

        alejoWebForm.name = firstName + " " + lastName;
        alejoWebForm.email = email;
        alejoWebForm.subject = subject;
        alejoWebForm.message = message;

        const jsonData = JSON.stringify(alejoWebForm);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://newsletterservice.com.ar/landing/api/alejoweb');

        xhr.onreadystatechange = function () {
            contactModal.style.visibility = 'hidden';
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert("Formulario enviado con éxito. Te contactaré a la brevedad.")
                } else {
                    alert("Tuvimos un problema enviando el formulario. Por favor, volvé a intentarlo o contactame a través de mis redes.")
                }
            }
        };
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(jsonData);

    } else {
        alert("Por favor, complete todos los campos del formulario antes de enviar.");
    }
});

const fb = document.querySelector('#fb');
const fbURL = 'https://facebook.com/alejo.torres.halo';
fb.addEventListener('click', () => window.open(fbURL, '_blank'));

const gh = document.querySelector('#gh');
const ghURL = 'https://github.com/alejotorres90';
gh.addEventListener('click', () => window.open(ghURL, '_blank'));

const linkedIn = document.querySelector('#in');
const linkedInURL = 'https://linkedin.com/in/alejotorres90';
linkedIn.addEventListener('click', () => window.open(linkedInURL, '_blank'));
