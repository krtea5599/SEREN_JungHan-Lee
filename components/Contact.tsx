
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 실제 연동을 위해서는 Apps Script의 '웹 앱' URL이 필요합니다. 
  // 현재 입력된 시트 주소는 직접 POST 대상이 될 수 없습니다.
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbznbkTljaq6lPJN-RNw47WYfAM6odujtU0Ol8GS706zy8c6tZH7heiX5JX-3U7SurSz/exec"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    const payload = {
      ...formData,
      date: new Date().toLocaleString('ko-KR'),
      sheetId: '18sq-OcXTNNsfVsR4zKru6pLNUJHW3hux0I_i4RQo00c'
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setStatus('success');
      // 초기화 시 기존 name, contact, message 키를 정확히 유지해야 합니다.
      setFormData({ name: '', contact: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-[#FFFFFF] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="relative z-10 flex flex-col leading-none tracking-tighter uppercase font-black">
               <span className="text-6xl md:text-[90px] text-black mb-1">
                CONTACT
               </span>
                <span className="text-6xl md:text-[90px] text-outline mt-1">
                SEREN
                </span>
          </h2>
         <p className="text-lg md:text-xl font-medium leading-relaxed text-black/80 tracking-tight mt-6">
            세렌과 함께 아이디어를 구조로,<br />
            구조를 브랜드로 확장하고 싶은 분들의 연락을 기다립니다.<br />
          
          </p>
        </div>
        
        <form className="flex flex-col space-y-8 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col group">
            <label className="text-[10px] font-bold uppercase mb-2 group-focus-within:opacity-100 opacity-60 transition-opacity">이름*</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              className="bg-transparent border-b border-black py-2 outline-none text-sm font-medium"
              placeholder="이름을 입력해주세요"
            />
          </div>
          <div className="flex flex-col group">
            <label className="text-[10px] font-bold uppercase mb-2 group-focus-within:opacity-100 opacity-60 transition-opacity">전화번호*</label>
            <input 
              required
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              type="text" 
              className="bg-transparent border-b border-black py-2 outline-none text-sm font-medium"
              placeholder="연락 가능한 번호를 입력해주세요"
            />
          </div>
          <div className="flex flex-col group">
            <label className="text-[10px] font-bold uppercase mb-2 group-focus-within:opacity-100 opacity-60 transition-opacity">문의 내용*</label>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="bg-transparent border-b border-black py-2 outline-none text-sm font-medium resize-none"
              placeholder="문의 내용을 간단히 남겨주세요"
            />
          </div>

<div className="flex flex-col gap-4 mt-8 mb-8">
  {/* 필수 동의 항목 */}
  <label className="flex items-start gap-3 cursor-pointer group">
    <input 
      type="checkbox" 
      required
      name="agreement"
      className="w-5 h-5 mt-1 border-2 border-black appearance-none checked:bg-[#1040DD] checked:border-[#1040DD] transition-all duration-200 cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
    />
    <span className="text-sm md:text-base text-black/80 group-hover:text-black">
      개인정보 수집 및 이용에 동의합니다. 문의 응대 및 세렌의 서비스·콘텐츠 안내를 위한 마케팅 정보 제공에 활용될 수 있습니다. <span className="text-[#1040DD] font-bold">(필수)</span>
    </span>
  </label>
</div>
          <div className="flex flex-col items-center gap-6 w-full">
            <button 
              type="submit"
              disabled={status === 'loading'}
              className={`self-start px-12 py-4 text-[12px] font-bold uppercase tracking-[0.2em] rounded-full border border-black transition-all ${
                status === 'loading' 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-white hover:text-black w-full md:w-auto' // 모바일에선 꽉 차게, 데스크톱에선 적당하게
              }`}
            >
              {status === 'loading' ? 'Sending...' : '문의 보내기'}

            </button>
            
            {status === 'success' && (
              <p className="text-sm font-bold text-green-600 uppercase tracking-wider animate-pulse">
                문의해 주셔서 감사합니다.<br />
                남겨주신 내용을 바탕으로 세렌이 연락드리겠습니다.<br />
                세렌에 관심 가져주셔서 감사합니다.<br />
              </p>
            )}
            {status === 'error' && (
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
                전송 중 오류가 발생했습니다. (Web App URL 확인 필요)
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

