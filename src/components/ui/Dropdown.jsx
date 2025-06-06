import React, { useState } from 'react';

export default function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="text-gray-900  font-semibold hover:text-green-600 hover:italic flex flex-center ">
        <span className='px-1'> {label}</span>
       
        <img src="/images/caret-down.svg" alt="▼" className='w-2 '/>
      </div>

      {open && (
        <ul className="absolute  bg-white border rounded-2xl shadow w-48 z-20 hover:opacity-100">
          {items.map((item, index) => (
            <li
              key={index}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600
                 transition:all  duration-200 ease "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
