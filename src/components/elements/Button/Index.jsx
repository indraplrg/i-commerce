const Button = (props) => {
   const { children, style } = props;
   return (
      <button type="submit" className={`${style} py-1`}>
         {children}
      </button>
   );
};

export default Button;
