type Props = {
  onClick: () => void;
};

const Backdrop: React.FC<Props> = ({ onClick }): JSX.Element => {
  return <div className='backdrop' onClick={onClick} />;
};

export default Backdrop;
