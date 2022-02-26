import img1 from './item1.png';
import img2 from './item2.png';
import img3 from './item3.png';

export default function displayMenu() {
    let content = document.querySelector('#content');

    let data = document.createElement('div');
    data.setAttribute('id', 'data');

    let head1 = document.createElement('h1');
    head1.textContent = 'Menu';
    
    //Create menu items
    let container1 = getMenuItem(img1, 'OK Pizza', 'An OK pizza. Cheap, but still OK', '$2.50')
    let container2 = getMenuItem(img2, 'Good Pizza', 'A good pizza. Good, but not amazing', '$5.50')
    let container3 = getMenuItem(img3, 'AMAZZZING Pizza!!', 'The reason customers come back. Simply amazing', '$33.50')

    data.appendChild(head1);
    data.appendChild(container1);
    data.appendChild(container2);
    data.appendChild(container3);
    
    content.appendChild(data);
}

function getMenuItem(img, title, blurb, price) {
    let container = document.createElement('div');
    container.classList.add('menuItem');

    let image = new Image();
    image.src = img;

    let textBox = document.createElement('div');
    
    let itemName = document.createElement('h2');
    itemName.textContent = title;

    let itemDescription = document.createElement('p');
    itemDescription.textContent = blurb;

    let itemPrice = document.createElement('h4');
    itemPrice.textContent = price;

    textBox.appendChild(itemName);
    textBox.appendChild(itemDescription);
    textBox.appendChild(itemPrice);

    container.appendChild(image);
    container.appendChild(textBox);

    return container;
}