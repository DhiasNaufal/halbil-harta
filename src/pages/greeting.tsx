import React from "react";
import { useNavigate } from 'react-router-dom';
import image from '../assets/dummy.jpg';

const Greeting: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/landing');
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover " style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center' }}>
        <div className="flex bg-neutral lg:h-3/4 lg:w-2/3 h-5/6 w-11/12 bg-opacity-85 border-8 border-item">
          <div className="flex flex-col  justify-center items-center gap-10">
            <p className="tracking-[0.75rem] font-semibold">UNDANGAN</p>

            <div className="flex flex-col xl:px-52 text-center gap-2">
              <h1 className="text-6xl text-harta-900">Halalbihalal Keluarga Besar Bani H. Tadjudin</h1>
              <p className="sm:px-10">Dengan rasa syukur dan bahagia, kami bermaksud mengundang saudara/i keluarga besar H. Tadjudin untuk berbagi kebersamaan dalam acara Halal Bihalal Idul Fitri 1445H </p>
            </div>

            <button onClick={handleNavigate} className="bg-black text-white bg-gradient-to-r from-harta to-harta-400 px-10 py-3 text-xl rounded-full border">BUKA UNDANGAN</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Greeting