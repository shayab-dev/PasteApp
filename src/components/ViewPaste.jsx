import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[66%] pl-4 border border-gray-300"
          type="text"
          placeholder="Enter title here"
          value={paste?.title || ''}
          disabled
        />

        <button
          onClick={() => {
            navigator.clipboard.writeText(paste?.content || '');
            toast.success("Copied to Clipboard");
          }}
          className="p-2 rounded-2xl mt-2 border border-blue-500 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
        >
          Copy Content
        </button>
      </div>

      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 border border-gray-300 w-full"
          value={paste?.content || ''}
          placeholder="Enter content here"
          disabled
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;