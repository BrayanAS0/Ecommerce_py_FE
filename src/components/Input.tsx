import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string; 
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="text-sm font-bold text-gray-700">
        {label}
      </label>
      <input 
        className={`border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...props} 
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};