
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-card rounded-2xl shadow-xl w-full max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <Button
                variant="ghost"
                className="absolute top-4 right-4"
                onClick={onClose}
              >
                X
              </Button>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
