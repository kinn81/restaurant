import displayWelcome from './welcomePage';
import displayMenu from './menu';
import displayContact from './contactPage';
import './style.css';

let content = document.querySelector('#content')
displayWelcome();

//Add event listeners for tabbed browsing
let links = Array.from(document.querySelectorAll('a'));
links.forEach((a) => {
    a.addEventListener('click', (e) => {
        removeAllChildNodes(content);
        if (e.target.id == 'home') {
            displayWelcome();
        } else if (e.target.id == 'menu') {
            displayMenu();
        } else if (e.target.id == 'contact') {
            displayContact();
        }
    });
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


