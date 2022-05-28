import styled, { keyframes } from 'styled-components';

export const Card = styled.div`
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    background-color: white;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    & label {
        font-weight: bold;
        margin-right: 1rem;
    }

    & input {
        width: 3rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        font: inherit;
        padding-left: 0.5rem;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

const SlideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-3rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 20vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: ${SlideDown} 300ms ease-out forwards;

    @media (min-width: 768px) {
        width: 40rem;
        left: calc(50% - 20rem);
    }
`;
