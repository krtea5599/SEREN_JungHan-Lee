import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-[#F9F9F9] flex flex-col items-start pt-24 pb-20 px-6 md:px-12 overflow-hidden relative">
      {/* Header Typography - Aligned Left */}
      <div className="w-full max-w-7xl flex flex-col items-start text-left">
        <h1 className="flex flex-col items-start leading-[0.85] tracking-tighter uppercase font-black animate-fadeIn">
          <span className="text-6xl md:text-[140px] text-black">SEREN</span>
          <span className="text-6xl md:text-[140px] text-outline">COMPANY</span>
        </h1>
        
        {/* Introduction Line - Aligned Left & Optimized for Mobile */}
        <div className="mt-8 mb-12 animate-fadeIn w-full">
          <p className="text-base md:text-2xl font-normal tracking-tight text-black/80 text-left leading-relaxed max-w-3xl">
            <span className="font-black text-[#1040DD]">안녕하세요.</span><br />
            <span className="font-black text-black/90">AI</span>와 <span className="font-black text-black/90">구조 설계</span>를 기반으로 
            <span className="font-black text-black/90">브랜드</span>를 구축하는<br />
            1인 창작자 <span className="font-black text-[#1040DD]">이정한</span>입니다.<br />
            <br />
            저는 <span className="font-black text-black/90">아이디어</span>를 단순한 기획에 머무르지 않고,<br />
            <span className="font-black text-black/90">실행</span> 가능한 <span className="font-black text-black/90">시스템</span>으로 설계해<br />
            <span className="font-black text-black/90">콘텐츠</span>, <span className="font-black text-black/90">교육</span>, <span className="font-black text-black/90">지식재산</span>, <span className="font-black text-black/90">사업</span>으로 확장해 왔습니다.<br />
            <br />
            혼자서도 <span className="font-semibold text-black/90">브랜드</span>를 만들 수 있는 시대,<br />
            <span className="font-black text-[#1040DD]">세렌</span>은 그 방법을 <span className="font-black text-black/90">직접 설계</span>하고 <span className="font-black text-black/90">실험</span>합니다.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl relative flex flex-col items-start">
        {/* Founder Portrait - Left Aligned */}
        <div className="w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden flex items-center justify-start relative z-0">
          <img 
            src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
            alt="주식회사 세렌" 
            className="w-auto h-full object-contain object-left animate-fadeIn"
          />               
        </div>
        <div className="w-full mt-4 flex justify-start"> 
           <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/80 text-left leading-relaxed border-l-2 border-[#1040DD] pl-3">
             <span className="opacity-65 font-medium text-[9px] md:text-[10px]">Founder & Brand Architect</span><br />
             Junghan Lee
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;