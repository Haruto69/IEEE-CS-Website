import React, { useState, useRef, useEffect } from 'react';

/**
 * GlassSelect
 * - Replaces a native <select> to allow a glassmorphism-styled dropdown.
 * - Keeps a hidden <input> so FormData from an enclosing <form> includes the selected value (name prop).
 * - Light, accessible (basic) keyboard support: Enter/Escape to open/close.
 */
const GlassSelect = ({ name, options = [], placeholder = 'Select...', required = false, className = '' }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState(placeholder);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  function toggleOpen() {
    setOpen((v) => !v);
  }

  function onSelect(opt) {
    setValue(opt.value);
    setLabel(opt.label);
    setOpen(false);
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((v) => !v);
    }
    if (e.key === 'Escape') setOpen(false);
  }

  return (
    <div ref={rootRef} className={`relative w-full ${className}`}>
      {/* Hidden input so native form submission works */}
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        className={
          'w-full text-left p-3 rounded-md bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:outline-none glass flex items-center justify-between mb-1'
        }
      >
        <span className="truncate">{label}</span>
        <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="mt-2 w-full max-h-60 overflow-auto rounded-md glass border border-white/10 shadow-lg p-2 space-y-1"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              onClick={() => onSelect(opt)}
              className={`cursor-pointer px-3 py-2 rounded-md text-white hover:bg-white/5 ${value === opt.value ? 'bg-white/6' : ''}`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GlassSelect;
