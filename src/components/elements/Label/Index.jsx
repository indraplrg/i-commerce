const Label = (props) => {
   const { title } = props;
   return (
      <label htmlFor={title} className="text-sm">
         {title}
      </label>
   );
};

export default Label;
