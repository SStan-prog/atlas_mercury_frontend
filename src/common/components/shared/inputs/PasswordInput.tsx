interface PasswordInputProps {
  label: string;
  ID: string;
  placeholder: string;
  additionalClasses: string;
}

const PasswordInput = ({
  label,
  ID,
  placeholder,
  additionalClasses,
}: PasswordInputProps) => {
  return (
    <div className={`flex flex-col ${additionalClasses}`}>
      <label htmlFor={ID} className="mb-1 text-sm font-bold dark:text-blue-100">
        {label}
      </label>
      <input
        type="text"
        id={ID}
        placeholder={placeholder}
        className="px-1 py-2 border rounded-md dark:placeholder:text-grey-400 dark:bg-blue-800 dark:border-grey-600"
      />
    </div>
  );
};

export default PasswordInput;
