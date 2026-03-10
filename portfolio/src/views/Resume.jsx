import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'animate.css';

function Resume() {
    const experienceData = [
        {
            year: "2022 - Present",
            title: "Web Developer",
            company: "Outrise Technologies (Fonicom Limited)",
            description: "Experienced Web Developer (4+ years) specializing in building scalable, responsive web applications using ReactJS. Focused on clean UI, usability, and performance optimization."
        },
    ];

    const educationData = [
        {
            year: "2018 - 2021",
            title: "Bachelor of Computer applications",
            description: "Focused on core computer science topics, including programming, data structures, algorithms, databases, and web development. Gained hands-on experience in software development and problem-solving."
        },
    ];

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/portfolio/Inthrajithvijayan_2026-updated_resume.pdf";
        link.download = "inthrajithvijayan-resume.pdf";
        link.click();
    };

    return (
        <div className="wrapper">
            <section className="about">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="md:text-[68px] font-bold sm:text-2xl font-bold">Resume</h1>
                        <p className="mt-5 fs-13">Home / <span className="text-custom">Resume</span></p>
                    </div>
                </div>
                <div className="mt-10 fs-13 mx-3 md:mx-0">
                    <span className="title-shadow">ABOUT ME</span>
                    <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center items-center md:justify-center md:items-center">
                        <div className="flex justify-start items-start">
                            <span className="w-30 h-30 inline-block rounded-full">
                                <img
                                    src="/portfolio/inthrajith.jpg"
                                    alt="Inthrajith"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <div className="">
                                <p>Hello! I’m Inthrajith vijayan. Web Developer. I have experience in web application developing, also I am good at wordpress.</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex gap-5 md:flex-row flex-col">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <span className="text-custom">Name:</span>
                                            <span>Inthrajith vijayan</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-custom">Citizenship:</span>
                                            <span>India</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <span className="text-custom">Age:</span>
                                            <span>25</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-custom">Residence:</span>
                                            <span>Puducherry</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <span className="text-custom">Job:</span>
                                            <span>Web Developer</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-custom">Email:</span>
                                            <span>inthrajithvijayan47@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <Button type='button' className="btn" onClick={handleDownload}>Download Resume</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resume mt-[5rem] mx-3 md:mx-0">
                <div className="timeline fs-13 flex flex-col md:flex-row">
                    <div className="section">
                        <span className="title-shadow">EXPERIENCE</span>
                        <div className="timeline-content">
                            {experienceData.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <span className="year">{item.year}</span>
                                    <div className="details">
                                        <h3>{item.title} - {item.company}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="section">
                        <span className="title-shadow">EDUCATION</span>
                        <div className="timeline-content">
                            {educationData.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <span className="year">{item.year}</span>
                                    <div className="details">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="skill mt-[5rem] fs-13 mx-3 md:mx-0">
                <span className="title-shadow">SKILLS</span>
                <div className="mt-5">
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2 md:w-100">
                                <div className="flex justify-between">
                                    <span className="">ReactJS</span>
                                    <span className="">90%</span>
                                </div>
                                <Progress value={90} />
                            </div>
                            <div className="flex flex-col gap-2 md:w-100">
                                <div className="flex justify-between">
                                    <span className="">NodeJS</span>
                                    <span className="">90%</span>
                                </div>
                                <Progress value={90} />
                            </div>
                            <div className="flex flex-col gap-2 md:w-100">
                                <div className="flex justify-between">
                                    <span className="">PHP</span>
                                    <span className="">80%</span>
                                </div>
                                <Progress value={80} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2 md:w-100">
                                <div className="flex justify-between">
                                    <span className="">MySQL</span>
                                    <span className="">90%</span>
                                </div>
                                <Progress value={90} />
                            </div>
                            <div className="flex flex-col gap-2 md:w-100">
                                <div className="flex justify-between">
                                    <span className="">MongoDB</span>
                                    <span className="">80%</span>
                                </div>
                                <Progress value={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="knowledge mt-[5rem] fs-13 mx-3 md:mx-0">
                <span className="title-shadow">KNOWLEDGE</span>
                <div className="mt-5">
                    <div className="flex md:justify-between md:flex-row flex-col">
                        <div className="flex flex-col gap-2 w-100">
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Stripe API</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />PayPal API</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />ODoo API</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Postman API</span>
                        </div>
                        <div className="flex flex-col gap-2 w-100">
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />AWS S3</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Wasabi S3</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Blackblaze S3</span>
                        </div>
                        <div className="flex flex-col gap-2 w-100">
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Kafka JS</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Celery JS</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />PHP Resque</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Redis</span>
                        </div>
                        <div className="flex flex-col gap-2 w-100">
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Jenkins</span>
                            <span className="flex"><CheckIcon className="h-4 w-4 text-custom mr-2" />Git & Gitlab</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume