import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"


import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calender,
    Briefcase,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Pallavi Pandey',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'pallavipandey181@gmail.com',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Delhi, India',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '(+91) 880 029 1012',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'B.S in Data Science',
    },
    {
        icon: <Calender size={20} />,
        text: 'Born on 28 Feb, 2001',
    },

]

const qualificationData = [
    {
        title: 'eduaction',
        data: [
            {
                University: 'Indian Institute of Technology',
                qualification: 'Bachelor of Science',
                Year: '2021 - 2024',
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Indian Institute of Technology',
                role: 'Internship',
                Year: '2023(Jan) - 2023(Sep)',
            },
            {
                company: 'VayuShastra, Research Park',
                role: 'Wen Developer',
                Year: '2023(Aug) - 2023(Nov)',
            },
            {
                company: 'Magizh Technologies',
                role: 'Python Developer',
                Year: '2024(Jan) - Present',
            }
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS, Bootstrap, JavaScript',
            },
            {
                name: 'Full Stack Development',
            },
            {
                name: 'Python, Other Frameworks',
            },
            {
                name: 'Docker, Azure, Deployment',
            },
            {
                name: 'Git & Github'
            }
        ],
    },

    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ]
    }
]

const About = () => {
    const
    return (
        <div>About</div>
    )
}

export default About