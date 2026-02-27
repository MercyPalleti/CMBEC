import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh]">
        <img
          src="/church-new.jpg" // replace with your new church image
          alt="CMBEC Church"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Centenary Mennonite Brethren Eden Church
          </h1>
          <p className="text-gray-300 max-w-2xl">
            A legacy of faith, mission, and spiritual growth since the late 1800s.
          </p>
        </div>
      </section>


      {/* ================= HISTORY SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-10 text-center">
          Our History
        </h2>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            The roots of CMBEC trace back to the missionary work of the
            American Baptist Mission in the Ongole region during the late
            19th century. At a time when there were no organized Christian
            congregations in this area, missionaries faithfully began spreading
            the Gospel.
          </p>

          <p>
            Between 1885 and 1910, hundreds of believers were baptized and
            over 150 congregations were established across villages such as
            Vemulapadu, Gundlapalli, Devata Mudupu, Medipalli, Macharam,
            Akiveedu, and Devarkonda.
          </p>

          <p>
            The mission emphasized both evangelism and education —
            building schools, promoting literacy, and strengthening spiritual
            training for generations to come.
          </p>
        </div>
      </section>


      {/* ================= RECONSTRUCTION SECTION ================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10 text-center">
            Church Reconstruction (2012 – Present)
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="mb-6 text-lg leading-relaxed">
                In 2012, the original church building was demolished due to
                structural concerns and the need for expansion.
              </p>
              <p className="text-lg leading-relaxed">
                By God's grace and the dedication of believers, the church
                was reconstructed into a modern worship center — symbolizing
                renewal, faith, and continued growth.
              </p>
              <p className="mt-6 text-yellow-400 font-semibold">
                Construction is ongoing as we continue to strengthen our
                spiritual and physical foundation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/church-old.jpg"
                alt="Old Church"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/church-construction.jpeg"
                alt="Construction"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/church-new.jpg"
                alt="New Church"
                className="rounded-lg shadow-lg col-span-2"
              />
            </div>

          </div>
        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-10">
          Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-lg">
          <div className="bg-white shadow-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
            <p>
              To proclaim the Gospel of Jesus Christ, nurture believers,
              and serve the community through faith, education, and love.
            </p>
          </div>

          <div className="bg-gray-900 text-white shadow-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Our Vision
            </h3>
            <p>
              To be a spiritually vibrant church that impacts generations
              through worship, discipleship, and compassionate outreach.
            </p>
          </div>
        </div>
      </section>


      {/* ================= CURRENT PASTOR ================= */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-yellow-500 mb-10">
            Our Pastor
          </h2>

          <div className="bg-white shadow-2xl rounded-2xl p-8">
            <img
              src="/pastor.jpeg"
              alt="Rev P R Mathews"
              className="w-48 h-48 mx-auto object-cover rounded-full mb-6 border-4 border-yellow-400"
            />

            <h3 className="text-2xl font-bold text-gray-800">
              Rev. P. R. Mathews
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Serving as the Pastor of Centenary Mennonite Brethren Eden Church,
              Rev. P. R. Mathews is committed to spiritual growth, discipleship,
              and strengthening the faith of the congregation.
            </p>
          </div>
        </div>
      </section>


      {/* ================= LOCATION SECTION ================= */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Visit Us
        </h2>

        <p className="mb-6">
          Angadipeta, Telangana, India
        </p>

        <a
          href="https://www.google.com/maps/place/Eden+church/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          View on Google Maps
        </a>
      </section>

    </div>
  );
};

export default About;