interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ type = "button", children, className = "", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
