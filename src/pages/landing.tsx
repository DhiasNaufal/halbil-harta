import React from "react";
import image from '../assets/dummy.jpg';
import yaz from "../assets/yazz.png"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Autocomplete, TextField } from '@mui/material';


const Landing: React.FC = () => {
  const information = [
    { icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />, text: '2 Syawal 1445H' },
    { icon: <LocationOnIcon sx={{ fontSize: 40 }} />, text: 'Kamandara Resto' },
    { icon: <AccessTimeIcon sx={{ fontSize: 40 }} />, text: '09.00 s/d Selesai' }
  ];
  const options = ['Hadir', 'InsyaAllah', 'Pasti Hadir'];
  return (
    <>
      <main className="bg-neutral min-h-screen  flex flex-col items-center justify-center">

        <div className="container" >

          <section className="py-12">
            <div className="flex flex-col  justify-center items-center gap-10">
              <p className="tracking-[0.75rem] font-semibold text-xs md:text-sm">ASSALAMUALAIKUM</p>

              <div className="flex flex-col xl:px-52 text-center gap-2">
                <h1 className="md:text-6xl text-4xl px-5 md:px-0 text-harta-900">Halalbihalal Keluarga Besar Bani H. Tadjudin</h1>
                <p className="sm:px-10 text-xs md:text-lg px-4">Dengan rasa syukur dan bahagia, kami bermaksud mengundang saudara/i keluarga besar H. Tadjudin untuk berbagi kebersamaan dalam acara Halal Bihalal Idul Fitri 1445H </p>
              </div>

              <a href="#doa" className="bg-black  text-white bg-gradient-to-r from-harta to-harta-400 md:px-10 md:py-3 md:text-xl text-sm px-5 py-2 rounded-full border">SCROLL</a>
            </div>
          </section>

          <section>
            <img src={image} alt="" />
          </section>

          <section id="doa" className="py-24">
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-harta-900 text-4xl">Bismillah</h1>
              <p className="sm:text-5xl text-3xl lg:px-72 text-center">يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ</p>
              <p className="lg:px-72 text-center text-xs sm:text-sm">“Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa”</p>
              <p className="lg:px-72 text-center text-xs sm:text-sm">(Al-Baqarah:183)</p>
            </div>
          </section>

          <section className="pb-24">
            <div className="bg-item text-white md:flex justify-between p-10">
              <div className="flex flex-col gap-8 ">
                <h1 className="md:text-6xl text-5xl">Waktu & Tempat</h1>

                <div className="flex flex-col gap-4 p-4 items-start">
                  {information.map((section, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {section.icon}
                      <p className="text-2xl">{section.text}</p>
                    </div>
                  ))}
                </div>

              </div>
              <div id="map" className="pt-4">
                <iframe
                  className="rounded-lg md:h-[300px] w-full h-[250px] md:w-[600px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.07480033003!2d108.18294827523063!3d-7.345497472261193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f576472cd6eff%3A0x4c89dc9ced4f9045!2sKamandara%20Resto!5e0!3m2!1sid!2sid!4v1711012840927!5m2!1sid!2sid"  ></iframe>
              </div>
            </div>
          </section>

          <section id="showcase">
            <div className="flex flex-col items-center justify-center">
              <h1>Kelaurga Harta</h1>
              <p>Masih tanda tanya ?</p>
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
      <section id="rsvp" className="">
        <div className="bg-item text-center text-white flex flex-col items-center gap-7 py-12">
          <h1>RSVP</h1>
          <div className="sm:w-1/3 w-11/12 bg-white rounded-xl">
            <Autocomplete

              id="tags-outlined"
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"

                  placeholder="Keluarga Besar"
                />
              )}
            />
          </div>
          <div className="sm:w-1/3 w-11/12 bg-white rounded-xl">
            <Autocomplete

              id="tags-outlined"
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"

                  placeholder="Kehadiran"
                />
              )}
            />
          </div>
          <button className="bg-black text-white bg-gradient-to-r from-harta to-harta-400 px-8 py-2 text-lg rounded-full border">Submit</button>
        </div>
      </section>
      <footer className="bg-item py-2 text-white text-center flex items-center justify-center gap-2 border-t-2">
        <img src={yaz} width={30} />
        © 2024 Copyright by Yazz
      </footer>
    </>

  )
}
export default Landing