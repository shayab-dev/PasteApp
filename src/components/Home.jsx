import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    if (!title.trim() && !value.trim()) return;

    const paste = {
      title: title.trim(),
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <main className="w-full min-h-[calc(100vh-4rem)] bg-slate-900 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Top Control Bar: Title & Action Button */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 h-12 px-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
          />

          <button
            onClick={createPaste}
            className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 whitespace-nowrap"
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>
        </div>

        {/* Content Card (Mac Window Style) */}
        <div className="w-full rounded-2xl border border-slate-800 bg-slate-950/60 shadow-2xl overflow-hidden">
          {/* Card Window Header */}
          <div className="h-10 px-4 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-slate-500 font-mono">Editor</span>
          </div>

          {/* Text Area */}
          <textarea
            value={value}
            placeholder="Write or paste your code/notes here..."
            onChange={(e) => setValue(e.target.value)}
            rows={18}
            className="w-full p-4 bg-transparent text-slate-100 placeholder-slate-600 font-mono text-sm focus:outline-none resize-none leading-relaxed"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;