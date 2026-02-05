import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed mb-12 text-center">          
          <span className="font-black text-[#FFFFFF]">세렌은<br />아이디어를<br />
           '말로만' 설명하지 않습니다.</span><br />
          <br />
          직접 <span className="font-black text-[#FFFFFF]">실행</span>하고,<br />
          <span className="font-black text-[#FFFFFF]">구조</span>로 만들고,<br />
          다시 다음 <span className="font-black text-[#FFFFFF]">실험</span>으로 <span className="font-black text-[#FFFFFF]">확장</span>합니다.<br />
          <br />
          당신의 생각이 <span className="font-black text-[#FFFFFF]">브랜드</span>가 되는 과정,<br />
          그 설계의 시작에 <br /><span className="font-black text-[#FFFFFF]">세렌</span>이 함께합니다.
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#3B82F6] shadow-xl">
            <img 
              src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
              alt="(주)세렌" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="text-sm font-black uppercase tracking-widest text-[#3B82F6]">(주)세렌</span>
          <span className="text-[10px] opacity-60 uppercase tracking-[0.15em] mt-2">
            Experience Designer & 1-Person Brand Strategist
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;