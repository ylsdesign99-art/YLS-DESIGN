function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-floral-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">Get in touch with our team</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-floral-700 mb-6">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-floral-600"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-floral-600"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-floral-600"
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-floral-600 text-white py-2 rounded hover:bg-floral-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-floral-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-floral-700 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-floral-700 mb-2">📍 Address</h3>
              <p className="text-gray-600">123 Floral Street<br />Garden City, GC 12345</p>
            </div>
            <div>
              <h3 className="font-bold text-floral-700 mb-2">📞 Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-bold text-floral-700 mb-2">📧 Email</h3>
              <p className="text-gray-600">hello@ylsdesign.com</p>
            </div>
            <div>
              <h3 className="font-bold text-floral-700 mb-2">🕐 Hours</h3>
              <p className="text-gray-600">
                Mon - Fri: 9am - 6pm<br />
                Sat: 10am - 5pm<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
