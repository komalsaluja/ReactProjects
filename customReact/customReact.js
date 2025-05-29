function customRender(reactElement, container) {
   /* // Create the DOM element based on the type
    const domElement = document.createElement(reactElement.type);
    // Set the properties on the DOM element
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    domElement.setAttribute('rel', reactElement.props.rel);
    // Append the DOM element to the container
    container.appendChild(domElement);  */


    const domElement = document.createElement(reactElement.type)
    // Set the properties on the DOM element
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
}
    // Append the DOM element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a', // 'a' for anchor tag
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)