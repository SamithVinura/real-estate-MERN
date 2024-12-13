import React from "react";

const ContactUs = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Contact Us</h1>
      <p className="mb-4 text-slate-700">
        If you have any questions or need assistance, feel free to reach out to
        us. We are here to help you!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address Section */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Our Office
          </h2>
          <p className="text-slate-700">
            SL Real Estate
            <br />
            123 Main Street
            <br />
            Colombo, Sri Lanka
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Contact Details
          </h2>
          <p className="text-slate-700">
            Phone:{" "}
            <a
              href="tel:+94123456789"
              className="text-blue-600 hover:underline"
            >
              +94 123 456 789
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:info@slrealestate.com"
              className="text-blue-600 hover:underline"
            >
              info@slrealestate.com
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Working Hours
        </h2>
        <p className="text-slate-700">
          Monday - Friday: 9:00 AM - 6:00 PM
          <br />
          Saturday: 10:00 AM - 4:00 PM
          <br />
          Sunday: Closed
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
