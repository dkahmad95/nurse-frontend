import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "lucide-react"; // Make sure to import the icons from heroicons

interface CollapsibleFormProps {
  title: string;
  children: React.ReactNode;
  completion?: boolean | null
}

const CollapsibleForm: React.FC<CollapsibleFormProps> = ({ title, children, completion }) => {
  const [showForm, setShowForm] = useState(false);


  return (
    <div className="w-full">
      <div className="shadow-md flex flex-row justify-between items-center bg-white border-2 rounded-xl p-8 gap-4 h-11">
        <div className="flex flex-col">
        <span className={`font-semibold text-xs md:text-sm ${completion ? ' text-green-700': 'text-red-700' }`}>{completion ? 'Completed!' : 'Not Completed!'}</span>
        <span className="font-bold text-lg md:text-xl">{title}</span>
        </div>
        {showForm ? (
          <MinusCircleIcon
            className="h-6 w-6 text-[#052533] cursor-pointer"
            onClick={() => setShowForm(!showForm)}
          />
        ) : (
          <PlusCircleIcon
            className="h-6 w-6 text-[#052533] cursor-pointer"
            onClick={() => setShowForm(!showForm)}
          />
        )}
      </div>
      {showForm && children}
    </div>
  );
};

export default CollapsibleForm;
