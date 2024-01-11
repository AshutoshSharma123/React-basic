
function customRender(reactElem, container) {
    const domElem = document.createElement(reactElem.type)
    domElem.innerHTML = reactElem.childern
    domElem.setAttribute('href', reactElem.props.href)
    domElem.setAttribute('target', reactElem.props.target)
    container.appendChild(domElem)
}

const reactElem = {
    type: 'a',
    props: {
        href: "http://google.com"
    target: "_blank"
    },
    childern: "click me to visit google"

}
const mainContainer = document.getElementById("#root")
customRender(reactElem, mainContainer)