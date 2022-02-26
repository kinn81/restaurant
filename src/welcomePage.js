export default function displayWelcome() {

    let content = document.querySelector('#content');

    let data = document.createElement('div');
    data.setAttribute('id', 'data');

    let head1 = document.createElement('h1');
    head1.textContent = 'KI\'s Amazing Pizza Restaurant';

    let head2 = document.createElement('h2');
    head2.textContent = 'What people are saying:';

    let para1 = document.createElement('p');
    para1.textContent = '"Honestly, best pizza ever! - John from Gore"';

    let para2 = document.createElement('p');
    para2.textContent = '"Better than even Pizza Hut!!" - Helen from Bluff';

    data.appendChild(head1);
    data.appendChild(head2);
    data.appendChild(para1);
    data.appendChild(para2);

    content.appendChild(data);
}