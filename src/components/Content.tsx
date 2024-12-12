import React from 'react';

const Content = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <div className="flex flex-col md:flex-row items-start justify-between">

        <div className="flex-1 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md transform -translate-y-4">
            <p className="text-purple-500 font-bold">#01 About Me</p>
            <p>
                Kami adalah perusahaan yang berkomitmen untuk memberikan solusi inovatif di bidang [sebutkan bidang, misalnya: teknologi, pemasaran, dll.]. Dengan pengalaman lebih dari [jumlah tahun] tahun, kami telah membantu berbagai klien mencapai tujuan mereka melalui pendekatan yang berfokus pada kualitas dan kepuasan pelanggan. Misi kami adalah untuk terus berinovasi dan memberikan nilai tambah kepada setiap klien.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-purple-500 font-bold">#03 Team</p>
            <p>
                Tim kami terdiri dari para profesional yang ahli di bidangnya, dengan latar belakang yang beragam dan pengalaman yang luas. Kami percaya bahwa keberhasilan perusahaan kami bergantung pada kolaborasi dan sinergi antar anggota tim. Setiap anggota tim berkontribusi dengan keahlian unik mereka untuk menciptakan solusi yang efektif dan memenuhi kebutuhan klien kami.
            </p>
          </div>
        </div>


        <div className="hidden md:flex justify-center items-center mx-4 ">
          <div className="w-1 bg-white h-72 "></div>
        </div>

        <div className="flex-1 space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md transform translate-y-4 mt-4"> {/* Menambahkan mt-4 */}
                  <p className="text-purple-500 font-bold">#02 Service</p>
                  <p>
                       Kami menawarkan berbagai layanan yang dirancang untuk memenuhi kebutuhan klien kami. Dari [sebutkan layanan utama, misalnya: konsultasi, pengembangan perangkat lunak, pemasaran digital, dll.], kami berkomitmen untuk memberikan solusi yang efektif dan inovatif. Tim ahli kami bekerja sama dengan klien untuk memahami kebutuhan mereka dan memberikan hasil yang melebihi harapan.
                  </p>
              </div>
        </div>

        </div>
      </div>

  );
};

export default Content;

