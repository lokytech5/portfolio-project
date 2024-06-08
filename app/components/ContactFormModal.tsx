import React, { useState } from 'react';
import useContactMessages from '../hooks/useContactMessages';
import LoadingSpinner from './LoadingSpinner';
import ErrorAlert from './ErrorAlert';

interface ContactFormModalProps {
  variant?: 'hero' | 'navbar';
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ variant }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { createMessage, isLoading, isError, isSuccess } = useContactMessages();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMessage(
      { email, message },
      {
        onSuccess: () => {
          setEmail('');
          setMessage('');
          setShowToast(true);
          closeModal();
          setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        },
      }
    );
  };

  const buttonClass =
    variant === 'hero'
      ? 'btn btn-primary text-lg py-3 px-6 transition-transform'
      : 'btn';

  return (
<>
      <button className={buttonClass} onClick={openModal}>Get in touch</button>
      <dialog id="contact_modal" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="relative">
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-4">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    placeholder="Your message"
                    className="textarea textarea-bordered"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormModal;
