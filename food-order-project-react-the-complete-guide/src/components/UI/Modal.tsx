import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalOverlay } from './UIStyles';

const portalElement = document.getElementById('overlays');

interface Props {
    onClick: () => void;
}

const Modal: React.FC<Props> = ({ children, onClick }) => {
    return (
        <Fragment>
            {portalElement
                ? createPortal(<Backdrop onClick={onClick} />, portalElement)
                : null}
            {portalElement
                ? createPortal(
                      <ModalOverlay>{children}</ModalOverlay>,
                      portalElement
                  )
                : null}
        </Fragment>
    );
};

export default Modal;
