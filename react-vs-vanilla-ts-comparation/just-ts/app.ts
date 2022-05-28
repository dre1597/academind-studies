const button: HTMLButtonElement = document.querySelector(
  'button'
) as HTMLButtonElement;

let modal: HTMLDivElement | null;
let backdrop: HTMLDivElement | null;

const showModalHandler = (): void => {
  if (modal) return;

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText: HTMLParagraphElement = document.createElement('p');
  modalText.textContent = 'Are you sure?';

  const modalCancelAction: HTMLButtonElement = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn--alt';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction: HTMLButtonElement =
    document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);
};

const closeModalHandler = (): void => {
  modal?.remove();
  modal = null;

  backdrop?.remove();
  backdrop = null;
};

button.addEventListener('click', showModalHandler);
