import melogImage from '../images/melog.jpg';

export interface Project {
    id: number;
    title: string;
    period: string;
    description: string;
    detailedDescription: string;
    techStack: string[];
    features: string[];
    githubLink: string;
    demoLink: string;
    image?: string;
}

export interface Experience {
    id: number;
    period: string;
    role: string;
    company: string;
    descriptions: string[];
}

export interface Education {
    id: number;
    period: string;
    institution: string;
    degree: string;
    major: string;
}

export interface Certificate {
    id: number;
    date: string;
    name: string;
    issuer: string;
}

export interface Activity {
    id: number;
    period: string;
    name: string;
    role: string;
    description?: string;
}

export interface Award {
    id: number;
    name: string;
    date: string;
    organizer: string;
    grade: string;
}

export const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
];

// 프로젝트 데이터
export const projects: Project[] = [
    {
        id: 1,
        title: "Melog",
        period: "2024.01 - 2024.03",
        description: "Rust와 Axum으로 구축된 백엔드와 React 기반의 메이플스토리 정보 검색 서비스입니다.",
        detailedDescription: `
        Melog는 메이플스토리 유저들을 위한 전적 검색 및 캐릭터 정보 조회 서비스입니다. 
        기존 서비스들의 느린 응답 속도를 개선하기 위해 Rust(Axum)를 도입하여 백엔드 성능을 최적화했습니다.
        단순한 정보 조회를 넘어, 사용자의 성장을 시각화하여 보여주는 그래프 기능을 제공하는 것을 목표로 개발되었습니다.
      `,
        techStack: ["Rust", "Axum", "TypeScript", "React.js", "Vite", "Tailwind CSS"],
        features: [
            "Nexon Open API 연동을 통한 실시간 캐릭터 정보 조회",
            "Rust의 비동기 런타임(Tokio)을 활용한 고성능 API 서버 구축",
            "React Query를 이용한 서버 상태 관리 및 캐싱 전략 수립",
            "반응형 디자인을 적용하여 모바일 및 데스크탑 환경 지원"
        ],
        githubLink: "https://github.com/lmsbin/melog",
        demoLink: "#",
        image: melogImage,
    }
];

// 경력
export const experiences: Experience[] = [
    {
        id: 1,
        period: "2023.05 ~ 2025.06",
        role: "검색 엔진 개발자",
        company: "와이즈넛",
        descriptions: [
            "다양한 OS에서 활용가능한 검색 엔진 개발",
            "대용량 데이터 처리 및 인덱싱 성능 개선"
        ]
    },
    {
        id: 2,
        period: "2025.07 ~",
        role: "게임 서버 개발자",
        company: "위메이드 넥스트",
        descriptions: [
            "미르 IP 게임 서버 개발"
        ]
    },
];

// 교육
export const educations: Education[] = [
    {
        id: 1,
        period: "2016.03 - 2022.02",
        institution: "서원대학교",
        major: "컴퓨터공학과",
        degree: "학사 졸업"
    }
];

// 자격증 데이터
export const certificates: Certificate[] = [
    {
        id: 1,
        date: "2022.06",
        name: "정보처리기사",
        issuer: "한국산업인력공단"
    }
];

// 수상 내역 데이터
export const awards: Award[] = [
    {
        id: 1,
        name: "2019 서원코딩페스티벌",
        date: "2019.11.15",
        organizer: "서원대학교",
        grade: "3등"
    },
    {
        id: 2,
        name: "2020 서원코딩페스티벌",
        date: "2020.11.20",
        organizer: "서원대학교",
        grade: "대상"
    },
    {
        id: 3,
        name: "2021 서원코딩페스티벌",
        date: "2021.07.16",
        organizer: "서원대학교",
        grade: "최우수상"
    },
    {
        id: 4,
        name: "2021 2차 서원코딩페스티벌",
        date: "2021.11.19",
        organizer: "서원대학교",
        grade: "대상"
    },
    {
        id: 5,
        name: "2022 Woori 코딩 페스티벌",
        date: "2022.09.23",
        organizer: "우리FIS",
        grade: "특별상"
    }
]

// 외부활동 데이터
export const activities: Activity[] = [
    {
        id: 1,
        period: "2022.05 ~",
        name: "백준 온라인 저지 문제 출제 위원",
        role: "출제진",
        description: "11개의 대회에서 문제 출제 및 검수"
    },
    {
        id: 2,
        period: "2024.03 ~",
        name: "블로그 스터디",
        role: "운영진",
        description: "주 1회 개발 관련 블로그 포스팅"
    }
];