const Input = (props) => {
   const { placeholder, type, id } = props;
   return (
      <input
         type={type}
         id={id}
         placeholder={placeholder}
         className="bg-transparent text-slate-200 outline-none py-2 w-full placeholder:text-sm"
      />
   );
};

export default Input;
