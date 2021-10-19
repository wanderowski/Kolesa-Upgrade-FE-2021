import '../css/style.css';

const appElement = document.querySelector('#app');

const titleFn = (name = 'Kolesa Upgrade') => name;

const title = titleFn();

console.log(title);

appElement.innerHTML = `
    <h1>Hello, ${titleFn()}!</h1>
`;

appElement.addEventListener('click', () => {
    console.log('App Clicked!');
});

document.querySelector('#app').innerHTML = `
  <h1>Hello, Dauren Beisenkhanov!</h1>
`;
