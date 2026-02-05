
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-black px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-xs">
          <p className="text-[10px] font-black uppercase leading-tight tracking-tighter opacity-40">
            Ideas to Structure. Structure to Brand.
          </p>
        </div>
        
       {/* 중앙: 카피라이트 및 제작 정보 (세로 정렬 유지) */}
        <div className="flex flex-col md:items-center space-y-1">          
          <span className="text-[10px] font-bold uppercase opacity-60">
            Designed & Operated by Junghan Lee
          </span>
          <p className="text-[9px] font-bold uppercase opacity-40 tracking-widest">
            © 2024 SEREN. All rights reserved.
          </p>
        </div>
        
        {/* 오른쪽: SNS 링크 */}
        <div className="flex space-x-6">
  <a 
    href="https://www.instagram.com/serenjunghan" // 여기에 인스타그램 주소를 넣어주세요
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[10px] font-bold uppercase hover:opacity-50 transition-opacity tracking-widest"
  >
    Instagram
  </a>
  <a 
    href="" // 유튜브 주소도 동일하게 적용 가능합니다
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[10px] font-bold uppercase hover:opacity-50 transition-opacity tracking-widest"
  >
    Youtube
  </a>
</div>
      </div>
    </footer>
  );
};

export default Footer;