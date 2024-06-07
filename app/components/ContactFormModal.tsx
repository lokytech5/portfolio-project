import React from 'react';

const ContactFormModal = () => {
  const openModal = () => {
    const modal = document.getElementById('contact_modal') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <button className="btn" onClick={openModal}>Contact</button>
      <dialog id="contact_modal" className="modal">
        <div className="modal-box">
          <form method="dialog" className="relative">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-4">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea placeholder="Your message" className="textarea textarea-bordered" rows={5} required></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ContactFormModal;
