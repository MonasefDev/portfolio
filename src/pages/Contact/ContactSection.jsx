import { useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w5ce9yi",
        "template_p0hrog9",
        form.current,
        "AuwZqJsSVhQMM2NRQ",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div id="left" className="border-right flex w-full flex-col">
      {/* windows tab desktop */}

      {/*  text */}
      <div className="lg:border-right flex h-full w-full overflow-hidden">
        <div className="no-scroll flex h-full w-full items-center justify-center overflow-scroll p-4">
          <form
            id="contact-form"
            className="text-sm"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col">
              <label className="mb-3">_name:</label>
              <input
                type="text"
                id="name-input"
                name="user_name"
                placeholder="name"
                className="mb-5 p-2 placeholder-slate-600"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-3">_email:</label>
              <input
                type="email"
                id="email-input"
                name="user_email"
                placeholder="email"
                className="mb-5 p-2 placeholder-slate-600"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-3">_message:</label>
              <textarea
                id="message-input"
                name="message"
                placeholder="message"
                className="placeholder-slate-600"
                required
              />
            </div>
            <button id="submit-button" type="submit" className="px-4 py-2">
              submit-message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
