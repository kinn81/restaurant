export default function displayContact() {
    let content = document.querySelector('#content');

    let data = document.createElement('div');
    data.setAttribute('id', 'data');

    let head1 = document.createElement('h1');
    head1.textContent = 'Contact';
    
    let address = document.createElement('p');;
    address.textContent = '7 Pizza Street, Auckand, NZ 1011';

    let phone = document.createElement('p');;
    phone.textContent = '(09) 847 2345';

    data.appendChild(head1);
    data.appendChild(address);
    data.appendChild(phone);
        
    content.appendChild(data);
}