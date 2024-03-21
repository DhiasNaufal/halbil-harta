import React from "react";
import image from '../assets/dummy.jpg';

const Landing: React.FC = () => {
  return (
    <main className="bg-neutral min-h-screen  flex flex-col items-center justify-center">

      <div className="container" >
        <section>

          <div className="flex flex-col  justify-center items-center gap-10">
            <p className="tracking-[0.75rem] font-semibold">UNDANGAN</p>

            <div className="flex flex-col xl:px-52 text-center gap-2">
              <h1 className="text-6xl text-harta-900">Halalbihalal Keluarga Besar Bani H. Tadjudin</h1>
              <p className="sm:px-10">Dengan rasa syukur dan bahagia, kami bermaksud mengundang saudara/i keluarga besar H. Tadjudin untuk berbagi kebersamaan dalam acara Halal Bihalal Idul Fitri 1445H </p>
            </div>

            <button className="bg-black text-white bg-gradient-to-r from-harta to-harta-400 px-10 py-3 text-xl rounded-full border">SCROLL</button>
          </div>

        </section>

        <section>
          <img src={image} alt="" />
        </section>

        <section id="doa">
          <div className="flex flex-col justify-center items-center ">
            <h1>Bismillah</h1>
            <p className="text-4xl">يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ</p>
            <p>“Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa”</p>
            <p>(Al-Baqarah:183)</p>
          </div>
        </section>

        <section>
          <div className="bg-item text-white flex justify-between p-4">
            <div id="information">
              <h1>Waktu & Tempat</h1>
              <div>
                <p>2 Syawal 1445H</p>
              </div>
              <div>
                <p>2 Syawal 1445H</p>
              </div>
              <div>
                <p>2 Syawal 1445H</p>
              </div>
            </div>
            <div id="map">
              <iframe
                className="rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.07480033003!2d108.18294827523063!3d-7.345497472261193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f576472cd6eff%3A0x4c89dc9ced4f9045!2sKamandara%20Resto!5e0!3m2!1sid!2sid!4v1711012840927!5m2!1sid!2sid" width="600" height="450" ></iframe>
            </div>
          </div>
        </section>

        <section id="showcase">
          <div className="flex flex-col items-center justify-center">
            <h1>Kelaurga Harta</h1>
            <img src={image} alt="" width={600} />
          </div>
        </section>

        <section>
          <div>
            <h1>Keluarga Nama</h1>
            <img src={image} alt="" width={600} />
          </div>
        </section>
        <section>
          <div className="flex flex-col items-end">
            <h1>Keluarga Nama</h1>
            <img src={image} alt="" width={600} />
          </div>
        </section>
      </div >

    </main>

  )
}
export default Landing