import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, variant = 'default' }) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, title, description, variant };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast, toasts, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const toast = (options) => {
  // Função global para toast - implementação simplificada
  console.log('Toast:', options);
  
  // Criar elemento de toast temporário
  const toastEl = document.createElement('div');
  toastEl.className = 'fixed top-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg z-50 max-w-sm';
  toastEl.innerHTML = `
    <div class="font-semibold">${options.title}</div>
    <div class="text-sm text-muted-foreground mt-1">${options.description}</div>
  `;
  
  document.body.appendChild(toastEl);
  
  setTimeout(() => {
    if (document.body.contains(toastEl)) {
      document.body.removeChild(toastEl);
    }
  }, 5000);
};

