import React from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

type Props = {
  text: string;
};

const Todo: React.FC<Props> = ({ text }): JSX.Element => {
  const [showModal, setShowModal] = React.useState<boolean>();

  const showModalHandler = (): void => {
    setShowModal(true);
  };

  const closeModalHandler = (): void => {
    setShowModal(false);
  };

  return (
    <div className='card'>
      <h2>{text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
};

export default Todo;
