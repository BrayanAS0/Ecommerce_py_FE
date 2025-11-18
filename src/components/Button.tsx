interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export default function Button({label,onClick,variant = 'primary',isLoading,className = '',...props}:ButtonProps){
const baseStyles = "px-4 py-2 rounded font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  const variants = {
    primary: "  bg-red-700  text-white hover:bg-gray-800 active:scale-95",
    secondary: "bg-white text-black border border-black hover:bg-gray-100 active:scale-95"
  };
return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} hover:cursor-pointer` }
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
}