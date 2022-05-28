type Props = {
  text: string;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ text, onClose }): JSX.Element => {
  return (
    <div className='modal'>
      <p>{text}</p>
      <button className='btn btn--alt' onClick={onClose}>
        Cancel
      </button>
      <button className='btn' onClick={onClose}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
