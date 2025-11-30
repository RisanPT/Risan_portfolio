import { FaDiscord, FaGithub, FaLinkedinIn, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Muhammed Risan PT",
    },
    social: {
        github: "https://github.com/RisanPT", // Update with your GitHub username
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true,
    projects: [
        {
            id: 1,
            title: "Dahab Mining",
            description: "Cross-platform cryptocurrency mining app for a UAE-based company, enabling users to invest in and manage real Bitcoin mining operations. Implemented clean architecture for scalability, Riverpod for efficient state management, and Dio for secure API integration. Integrated Ziina and DeusX payment gateways for seamless deposits and withdrawals.",
            image: "/projects/dahab-mining.webp",
            technologies: ["Flutter", "Riverpod", "Dio", "GoRouter", "GetStorage", "Ziina Payment API", "DeusX"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Syssense",
            description: "Responsive web-based user management system designed to handle timesheets, petty cash, and leave requests with four-level approval workflows. Implemented secure authentication, API integration using Dio, and state management with Riverpod. Utilized GoRouter for structured navigation and Flutter Secure Storage for session protection.",
            image: "/projects/syssense.webp",
            technologies: ["Flutter Web", "Riverpod", "Dio", "GoRouter", "Flutter Secure Storage", "Node.js"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Tron Academy",
            description: "Developed a cross-platform e-learning application similar to Udemy, offering courses in digital marketing, multimedia, and coding. Implemented real-time community features where users can join groups, chat, share files, voice notes, and images. Integrated Agora for live interactive classes and built audio/video streaming modules.",
            image: "/projects/tron-academy.webp",
            technologies: ["Flutter", "Riverpod", "Dio", "Flutter Secure Storage", "Socket.io", "Agora", "Node.js"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "HandCar",
            description: "Developed a cross-platform car service and accessories app for a UAE-based company, offering spare parts, accessories purchases, and nearby service center discovery. Implemented state management with Riverpod, secure data handling using GetStorage, and API integration through Dio. Integrated GeoLocator for real-time detection of nearby service centers.",
            image: "/projects/handcar.webp",
            technologies: ["Flutter", "Riverpod", "Dio", "GetStorage", "GeoLocator", "Python Django"],
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "Laundry Bin",
            description: "Contributed to the development of an on-demand laundry app built with Flutter, GetX, and Firebase. Worked on feature implementation, performance optimization, and API integration with backend services. Gained practical experience in MVC architecture, responsive UI design, and maintainable Flutter code practices.",
            image: "/projects/laundry-bin.webp",
            technologies: ["Flutter", "GetX", "Firebase", "MVC Architecture", "Responsive Design"],
            github: "#",
            demo: "#"
        }

    ],
    skills: [
        {
            title: "Mobile Development",
            icon: <HiCode />,
            description: "Cross-platform mobile apps",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Flutter", level: "Advanced", hot: true },
                { name: "Dart", level: "Advanced", hot: true },
                { name: "GetX", level: "Advanced" },
                { name: "Responsive Design", level: "Expert" },
                { name: "MVC Architecture", level: "Advanced" }
            ]
        },
        {
            title: "State Management & APIs",
            icon: <HiDatabase />,
            description: "State Management & Backend Integration",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Riverpod", level: "Advanced", hot: true },
                { name: "Bloc", level: "Advanced" },
                { name: "Provider", level: "Intermediate" },
                { name: "Dio", level: "Advanced", hot: true },
                { name: "Firebase", level: "Advanced" }
            ]
        },
        {
            title: "Tools & Database",
            icon: <HiCube />,
            description: "Development Tools & Storage",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Git", level: "Advanced", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Figma", level: "Intermediate" },
                { name: "ObjectBox", level: "Advanced" },
                { name: "Docker", level: "Intermediate" },
                { name: "Agile", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Flutter Developer",
            company: "TRON Digital",
            period: "Sep 2024 - Present",
            location: "Remote, UAE",
            description: "Serving as the lead Flutter developer, handling the design and development of mobile and web applications. Building and deploying major products using clean architecture and modern state management patterns.",
            responsibilities: [
                "Designing and developing mobile and web applications with Flutter",
                "Built and deployed four major products — Dahab Mining, Syssense, Handcar, and TRON Academy",
                "Utilized Riverpod, Dio, and GoRouter for efficient state management, API integration, and navigation",
                "Focused on responsive design, real-time functionality, and performance optimization"
            ],
            technologies: ["Flutter", "Riverpod", "Dio", "GoRouter", "Clean Architecture", "MVC"]
        },
        {
            position: "Jr Flutter Developer",
            company: "LevelX",
            period: "May 2023 - Aug 2024",
            location: "Kozhikode, Kerala",
            description: "Contributed to the development of cross-platform mobile applications with focus on clean code and user experience. Worked on feature implementation, API integration, and performance optimization.",
            responsibilities: [
                "Contributed to development of Laundry Bin on-demand laundry app using Flutter, GetX, and Firebase",
                "Worked on feature implementation, performance optimization, and API integration with backend services",
                "Assisted in building in-house tools including user management systems for internal operations",
                "Gained practical experience in MVC architecture, responsive UI design, and maintainable Flutter code"
            ],
            technologies: ["Flutter", "GetX", "Firebase", "API Integration", "Responsive Design"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@RisanPT",
            link: `https://github.com/RisanPT`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "risanpallithazha@gmail.com",
            link: "mailto:risanpallithazha@gmail.com"
        },
        {
            icon: <FaLinkedinIn className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Risan PT",
            link: "https://www.linkedin.com/in/muhammed-risan-pt/"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Kozhikkode,Kerala",
            link: null
        }
    ]
}