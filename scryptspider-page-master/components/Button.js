const Button = ({ children }) => {
  return (
    <div className='button'>
      <button type='submit' className='btn'>
        {children}
      </button>
    </div>
  );
};

export default Button;
