import { FaCreditCard, FaUniversity, FaMobileAlt, FaLock } from "react-icons/fa";

export default function Give() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative mt-10 py-32 text-center px-6 flex items-center justify-center">

        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/give-bg1.png')",}}
        ></div>
        {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
      Give with <span className="text-yellow-400">Faith</span>
    </h1>
    <p className="text-gray-300 text-lg">
      Your generosity helps us spread the Gospel, serve the community,
      and build God’s Kingdom.
    </p>
  </div>

</section>

      {/* SCRIPTURE SECTION */}
      <section className="bg-gray-900 py-16 text-center px-6">
        <p className="text-yellow-400 text-xl italic max-w-3xl mx-auto">
          "Each one must give as he has decided in his heart, not reluctantly
          or under compulsion, for God loves a cheerful giver."
        </p>
        <p className="text-gray-400 mt-4">— 2 Corinthians 9:7</p>
      </section>

      {/* GIVING OPTIONS */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ways to <span className="text-yellow-400">Give</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* ONLINE GIVING */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
              <FaCreditCard className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Online Giving</h3>
              <p className="text-gray-400 mb-6">
                Give securely using your debit/credit card.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                Give Now
              </button>
            </div>

            {/* BANK TRANSFER */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
              <FaUniversity className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Bank Transfer</h3>
              <p className="text-gray-400 mb-6">
                Transfer directly to our church bank account.
              </p>
              <div className="text-gray-300 text-sm space-y-1">
                <p><strong>Account Name:</strong> CMB Eden Church</p>
                <p><strong>Bank:</strong> SBI</p>
                <p><strong>Account No:</strong> XXXX XXXX XXXX</p>
                <p><strong>IFSC:</strong> SBIN000XXXX</p>
              </div>
            </div>

            {/* UPI */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300">
              <FaMobileAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">UPI</h3>
              <p className="text-gray-400 mb-6">
                Quick & easy giving through UPI.
              </p>
              <p className="bg-gray-800 p-3 rounded-lg text-yellow-400 font-semibold">
                yourchurch@upi
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="bg-gray-900 py-16 text-center px-6">
        <FaLock className="text-yellow-400 text-4xl mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-4">Secure & Confidential</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          All transactions are secure and encrypted. Your information is
          protected and handled with integrity.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-yellow-400 text-black py-16 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Thank You for Your Generosity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Because of your giving, lives are transformed and hope is restored.
        </p>
        <button className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
          Partner With Us
        </button>
      </section>

    </div>
  );
}