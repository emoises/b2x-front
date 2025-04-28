interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export function Input({ id, type = "text", value, onChange, placeholder, required, ...props }: InputProps) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}
