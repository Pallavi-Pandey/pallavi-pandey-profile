import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"


import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Briefcase,
    Calendar,
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
        icon: <Calendar size={20} />,
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
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/*image*/}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[500px] h-[500px]
                    bg-no-repeat relative' imgSrc='/about/developer.png' />
                    </div>
                    {/*tabs*/}
                    <div className='flex-1'>
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">
                                            Delivering Unmatched Service Quality for Over a Decade
                                        </h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            I specialize in crafting intuitive, user-friendly websites that blend creativity with functionality. With a deep understanding of the latest web technologies and design principles, I strive to create digital experiences that engage and inspire. Whether you're looking to build a new website from scratch or revamp an existing one, my goal is to help you achieve your vision with precision and excellence.
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                <div 
                                                className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    qualifications info
                                </TabsContent>
                                <TabsContent value="skills">skills info</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About