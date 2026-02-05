import { Project, ServiceSystem } from './types';

export const VISION_IMAGE = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2000&auto=format&fit=crop";

export const PILLARS: Project[] = [
  {
    id: 1,
    category: "SEREN BOOKS",
    title: "1. 도서 출판 및 작가 양성",
    description: "콘텐츠의 시작점. 전자책을 단순한 출판물이 아닌 브랜드와 교육, 사업으로 확장되는 출발점으로 설계합니다..",
    fullDescription: "세렌은 전자책을 단순한 출판물이 아닌 브랜드와 교육, 사업으로 확장되는 출발점으로 설계합니다. 개인의 경험과 지식을 정리해 작가가 되고, 콘텐츠를 만들고, 스스로 확장 가능한 구조를 갖추도록 돕습니다.",
    achievements: [
      "세렌북스 출판사 운영 및 ISBN 발급 시스템 구축",
      "교보문고 eBook 유통 및 자체 쇼핑몰/스마트스토어 운영",
      "대표 저작물: 《제재돌-중문편》 제주마을아카이빙동화",
      "《AI특허출원혁명》 시리즈 (1~3권)",
      "《전자책 쓰는 전자책(전자전)》 워크북 및 퍼널 연계"
    ],
    image: "https://i.ifh.cc/5hNobA.jpg",
    tags: ["AI Publishing", "eBook", "ISBN System"]
    links: {
      web: "https://serenbooks.co.kr/18/?idx=31"
  },
  {
    id: 2,
    category: "SEREN LABS",
    title: "2. AI 특허 출원 자동화",
    description: "아이디어의 자산화 / 세렌은 아이디어가 사라지지 않도록 지식재산으로 전환하는 구조를 연구합니다.",
    fullDescription: "세렌은 아이디어가 사라지지 않도록 지식재산으로 전환하는 구조를 연구합니다. 자체개발한 <특허명세서자동작성기>를 통해 아이디어 → 구조화 → 명세 → 출원까지 이어지는 실행 중심의 자동화 시스템을 설계하고 있습니다.",
    features: [
      "KIPRIS 연동 실시간 특허 검색 시스템",
      "AI 기반 명세서 및 청구항 자동 생성 기능 개발",
      "가출원(임시출원) 전략을 통한 빠른 아이디어 선점 지원"
    ],
    image: "https://i.ifh.cc/lcmmLb.jpg",
    tags: ["Patent AI", "KIPRIS API", "Legal Tech"]
     links: {
      kyobo: "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000011932990"
  },
  {
    id: 3,
    category: "EDUCATION",
    title: "3. SEREN School",
    description: "배움을 실행으로 연결 / SEREN School은 지식이 ‘아는 것’에 머무르지 않도록 설계된 교육 프로젝트입니다.",
    fullDescription: "학습자는 AI와 함께 '자신의 경험과 아이디어' 그리고 '배움'이 지식에 머무르지 않고, 콘텐츠·브랜드·지식재산으로 확장하는 과정을 경험합니다.",
    achievements: [
      "평생학습 수강생 대상 '나만의 콘텐츠, 브랜딩하는 방법' 과정 운영",
      "'나만의 아이디어, 첫 특허 캠페인' 진행 예정",
      "전자책-강의-워크북으로 이어지는 체계적인 교육 시스템"
    ],
    image: "https://i.ifh.cc/RlVkBz.jpg",
    tags: ["Education", "Parenting", "Workshops"]
  },
  {
    id: 4,
    category: "IP & LOCAL",
    title: "4. 제주 지역 활성화 프로젝트",
    description: "지역 활성화 / 구조 설계의 관점을 지역과 공동체로 확장합니다.",
    fullDescription: "제주 지역의 자원과 이야기를 기반으로 교육·콘텐츠·체험이 결합된 지속 가능한 로컬 프로젝트를 기획합니다.",
    features: [
      "제주 성읍1리 마을만들기: 체험형 관광 콘텐츠 설계",
      "JEJAEDOL(제재돌): 현무암 세계관 기반 캐릭터 IP 개발",
      "현무암 창의융합 STEAM 교육프로그램 개발 / 교구재 및 동화, 굿즈 라인업 확장",
      "마을 소득 모델 및 로컬 브랜딩 전략 수립"
    ],
    image: "https://i.ifh.cc/b2DYTd.jpg",
    tags: ["Local Brand", "Character IP", "Jeju"]
  },
  {
    id: 5,
    category: "LIFESTYLE",
    title: "5. 세렌 토탈 홈케어 & 브랜드화",
    description: "세렌은 실제 운영 경험을 바탕으로 서비스가 브랜드와 상품으로 확장되는 구조를 실험합니다.",
    fullDescription: "홈케어 사업을 시작으로 제품, 콘텐츠, 브랜드로 이어지는 실전 기반의 비즈니스 모델을 구축하고 있습니다",
    achievements: [
      "프리미엄 침구 브랜드 'SERENHOME' 런칭",
      "자체 개발 '기능성 청소 장갑' 개발 중 (특허 연계)",
      "호텔식 관리 및 수납정리 서비스 전문 노하우 자산화",
    ],
    image: "https://i.ifh.cc/44Z3zj.jpg",
    tags: ["Lifestyle", "Brand Goods", "Homecare"]
  }
];

export const SYSTEMS: ServiceSystem[] = [];