import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-5">
        <input
          className="p-2 rounded-2xl min-w-[600px] mt-5 border border-gray-300 pl-4"
          type="search"
          placeholder="Search pastes here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-col gap-5 mt-5">
          {filteredData.length > 0 ? (
            filteredData.map((paste) => (
              <div
                className="border border-gray-300 p-4 rounded-xl flex flex-col gap-2"
                key={paste?._id}
              >
                <div className="text-xl font-bold text-gray-800">{paste.title}</div>
                <div className="text-gray-600 line-clamp-3">{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly mt-2">
                  <NavLink to={`/?pasteId=${paste?._id}`}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Edit
                    </button>
                  </NavLink>
                  <NavLink to={`/pastes/${paste?._id}`}>
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                      View
                    </button>
                  </NavLink>
                  <button
                    onClick={() => handleDelete(paste?._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to Clipboard");
                    }}
                    className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Copy
                  </button>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(paste.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))
          ) : (
            <div className="text-2xl text-center w-full text-gray-400">No Pastes Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;