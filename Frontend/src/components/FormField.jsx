import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  handlechange,
  value,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name}
         className="block text-sm font-medium text-gray-900"
        
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button 
          type="button"
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
          onClick={handleSurpriseMe} 
          >
          Surprise Me!
          </button>
        )}

      </div>

      <input
       type={type}
       placeholder={placeholder}
       id={name}
       name={name}
       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
       value={value}
       required
       onChange={handlechange}
      >

      </input>






    </div>
  );
};

export default FormField;
