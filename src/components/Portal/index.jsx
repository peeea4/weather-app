import ReactDOM from "react-dom";

const createWrapperAndAppendToBody = (wrapperId) => {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
};

export const Portal = ({ children, wrapperId = "modal-root" }) => {
    let element = document.getElementById(wrapperId);
    if (!element) {
        element = createWrapperAndAppendToBody(wrapperId);
    }
    return ReactDOM.createPortal(children, element);
};
