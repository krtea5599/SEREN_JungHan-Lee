import React, { useState } from 'react';
import { Project } from '../types.ts';
import ProjectModal from './ProjectModal.tsx';

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isEven = index % 2 === 0;

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} py-0 border-t border-black/10`}>
        <div 
          className="w-full md:w-1/2 overflow-hidden h-[300px] md:h-[600px] cursor-pointer group"
          onClick={handleOpen}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>
       
<div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-white">
  {/* 카테고리 태그 */}
  <div className="mb-4">
    <span className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1 text-[#1040DD]">
      {project.category}
    </span>
  </div>

  {/* 1. 제목: 아래 버튼과의 간격을 위해 mb-2~4 정도 부여 */}
  <h3 
    className="text-[22px] md:text-[40px] font-black uppercase tracking-tighter mb-4 leading-tight cursor-pointer hover:text-[#1040DD] transition-colors text-black"
    onClick={handleOpen}
  >
    {project.title}
  </h3>

  {/* 2. 상세보기 네모 박스 버튼: 제목 바로 아래 배치 */}
  <button 
    onClick={handleOpen}
    className="group/btn flex items-center justify-between w-full px-6 py-1.8 border-2 border-black font-black uppercase tracking-widest text-[14px] md:text-[16px] mb-4 hover:bg-black hover:text-white transition-all duration-300"
  >
    <span>상세 내용 보기</span>
    <span className="group-hover/btn:translate-x-2 transition-transform text-xl">→</span>
  </button>

  {/* 3. 설명글: 버튼 아래에 위치 */}
  <p className="text-sm md:text-base leading-relaxed opacity-80 mb-8 max-w-md font-medium">
    {project.description}
  </p>

  {/* 4. 구매/상세 링크 영역 */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 w-full">
            {project.links?.kyobo && (
             <a 
                href={project.links.kyobo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[12px] md:text-[16px] font-black uppercase tracking-widest text-white bg-[#1040DD] px-5 py-2.5 hover:bg-black transition-all text-center md:text-right"
             >
                교보문고 바로가기 →
            </a>
         )}
            
            {project.links?.web && (
              <a 
                href={project.links.web} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[14px] md:text-[18px] font-black uppercase tracking-widest text-white bg-[#1040DD] px-4 py-2 hover:bg-black transition-all"
              >
                도서 상세 정보 →
              </a>
            )}

            {project.links?.store && (
              <a 
                href={project.links.store} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-[#16a34a] border border-[#16a34a] px-4 py-2 hover:bg-[#16a34a] hover:text-white transition-all"
              >
                스마트스토어 →
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags?.map(tag => (
              <span key={tag} className="text-[9px] font-bold uppercase bg-gray-100 text-black px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default ProjectItem;