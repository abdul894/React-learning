function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const attribute in reactElement.attributes) {
        domElement.setAttribute(attribute, reactElement.attributes[attribute]);
    };
    container.appendChild(domElement);
}    
const reactElement = {
    type: 'a',
    attributes: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);