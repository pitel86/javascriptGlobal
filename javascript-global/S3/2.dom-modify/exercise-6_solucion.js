const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let myUl = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
    let myLi = document.createElement('li');
    myLi.textContent = apps[i];
    myUl.appendChild(myLi);   
}

document.body.appendChild(myUl);