import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
  IconMailShare,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Esce for VSCode",
      description:
        "A sleek, comforting bluesteel dark mode theme for Visual Studio Code.",
      technologies: ["Theme"],
      link: "https://marketplace.visualstudio.com/items?itemName=dmatuwidi.esce&ssr=false#overview",
      image: "/esce.png",
    },
    {
      title: "AI Flashcards SaaS App",
      description:
        "AI-powered flashcards web-app. Handled AI integration, coordinated front-end design.",
      technologies: ["Next.js", "Stripe", "Firebase", "Google Gemini", "Clerk"],
      link: "ttps://github.com/dmatuwidi/flashcards-saas",
      image: "/flashcards.jpg",
    },
    {
      title: "AI Chat Bot Web-app",
      description:
        "Customer service support agent. Integrated and optimised AI back-end, coordinated front-end efforts.",
      technologies: ["Next.js", "Firebase", "Google Gemini"],
      link: "https://github.com/MateuszNiedbalski/Chat-Bot",
      image: "/chatbot.jpg",
    },
  ];

  const languages = [
    {
      name: "Python",
      progress: 90,
    },
    {
      name: "Java",
      progress: 70,
    },
    {
      name: "JavaScript",
      progress: 80,
    },
    {
      name: "TypeScript",
      progress: 80,
    },
    {
      name: "C++",
      progress: 60,
    },
    {
      name: "HTML / CSS",
      progress: 85,
    },
  ];

  const frameworks = [
    {
      name: "Next.js",
      progress: 80,
    },
    {
      name: "Express.js",
      progress: 60,
    },
    {
      name: "Tailwind CSS",
      progress: 80,
    },
    {
      name: "Bootstrap",
      progress: 70,
    },
    {
      name: "Django",
      progress: 80,
    },
  ];

  const databases = [
    {
      name: "PostgreSQL",
      progress: 60,
    },
    {
      name: "SQLite",
      progress: 80,
    },
    {
      name: "Firebase",
      progress: 75,
    },
  ];

  const experiences = [
    {
      title: "Software Engineering Fellow",
      company: "Headstarter AI",
      description: [
        "Proficiently built and deployed 5 AI projects in 5 weeks, followed agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment.",
        "Worked collaboratively to develop an interactive customer support agent with an integrated custom RAG pipeline using Gemini and Pinecone.",
      ],
      date: "July 2024 - September 2024",
      skills: ["AI", "Next.js", "Firebase", "Clerk", "Teamwork", "Leadership"],
    },
    {
      title: "Customer Team Member",
      company: "Co-op",
      description: [
        "Attentively responded to customer inquiries and resolved complaints efficiently.",
        "Communicated with team members to manage and replenish shop inventory.",
        "Ensured excellent store presentation while maintaining a high level of security awareness",
      ],
      date: "September 2023 - January 2025",
      skills: [
        "Teamwork",
        "Attention to detail",
        "Customer Service",
        "Communication",
        "Problem-solving",
      ],
    },
  ];

  return (
    <div>
      <section
        id="about"
        className="py-20 md:py-40 px-10 sm:px-20 lg:p-40 lg:py-80 space-y-5 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat relative z-0 before:content-[''] before:bg-linear-to-b before:from-white/0 before:to-white/100 before:absolute before:inset-0 before:z-[-5]"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl pt-10 md:pt-20 xl:pt-30">
          Hi, I&apos;m{" "}
          <span className="text-secondary-foreground font-semibold">
            Damy Matuwidi
          </span>
        </h1>
        <p className="text-xl md:text-2xl mt-5 break-words text-wrap">
          I&apos;m a penultimate year Computer Science student currently
          studying at the{" "}
          <span className="font-medium">University of Surrey.</span>
        </p>
        <p className="text-md sm:text-lg mt-5 break-words text-wrap">
          I&apos;m an emerging software engineer with hands-on experience in
          Artificial Intelligence and Full-stack Web Development with a
          comprehensive understanding of software development principles. I can
          quickly master new technologies, shown by my academic work and
          personal projects. I&apos;m commited to delivering quality, innovative
          solutions and excited to contribute to cutting-edge technological
          advancements.
        </p>
        <div className="flex space-x-2 sm:space-x-5 items-center">
          <a
            href="https://www.linkedin.com/in/damymatuwidi"
            className="bg-white/50 hover:bg-white/30 p-1 rounded-lg hover:text-primary/70 transition-all duration-200"
          >
            <IconBrandLinkedin size={30} />
          </a>
          <a
            href="https://www.github.com/dmatuwidi"
            className="bg-white/50 hover:bg-white/30 p-1 rounded-lg hover:text-primary/70 transition-all duration-200"
          >
            <IconBrandGithub size={30} />
          </a>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="bg-white/50 hover:bg-white/30 p-1 rounded-lg">
                <a
                  href="mailto:dmatuwdi@gmail.com"
                  className="hover:text-primary/70 transition-all duration-200"
                >
                  <IconMailShare size={30} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">
                  {" "}
                  <span className="underline">dmatuwidi@gmail.com</span> - if
                  mailto links don&apos;t work!
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
      <section
        id="projects"
        className="py-20 lg:px-40 space-y-10 px-15 sm:px-20"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-center lg:px-20">
          Projects
        </h2>
        <Carousel>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="flex flex-col h-full justify-between">
                  <CardHeader className="space-y-2">
                    <AspectRatio ratio={12 / 9}>
                      <Image
                        src={project.image}
                        fill={true}
                        alt="Project Image"
                        className="rounded-md"
                      />
                    </AspectRatio>
                    <CardTitle className="text-2xl md:text-3xl">
                      {project.title}
                    </CardTitle>
                    <div>
                      {project.technologies.map((technology, index) => (
                        <Badge key={index} className="mr-2">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                    <CardDescription className="text-lg">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="justify-end">
                    <Link href={project.link}>
                      <Button className="cursor-pointer">
                        See more <IconExternalLink />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section
        id="skills"
        className="py-20 md:py-40 px-10 sm:px-20 lg:px-40 space-y-5 mb-25"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Skills
        </h2>
        <Tabs
          defaultValue="languages"
          className="w-full max-w-5xl mx-auto overflow-hidden h-100"
        >
          <TabsList className="w-full h-fit sm:space-x-5">
            <TabsTrigger value="languages" className="text-sm sm:text-lg">
              Languages
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="text-sm sm:text-lg">
              Frameworks
            </TabsTrigger>
            <TabsTrigger value="databases" className="text-sm sm:text-lg">
              Databases
            </TabsTrigger>
          </TabsList>
          <TabsContent value="languages">
            <div className="sm:p-5 pt-15 lg:p-20">
              <ul className="grid grid-cols-2 gap-5 sm:gap-15">
                {languages.map((language, index) => (
                  <li key={index} className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="sm:text-xl font-medium">{language.name}</p>
                      <p className="sm:text-xl font-semibold">
                        {language.progress}%
                      </p>
                    </div>
                    <Progress value={language.progress} />
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="frameworks">
            <div className="sm:p-5 pt-15 lg:p-20">
              <ul className="grid grid-cols-2 gap-5 sm:gap-15">
                {frameworks.map((framework, index) => (
                  <li key={index} className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="sm:text-xl font-medium">{framework.name}</p>
                      <p className="sm:text-xl font-semibold">
                        {framework.progress}%
                      </p>
                    </div>
                    <Progress value={framework.progress} />
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="databases">
            <div className="sm:p-5 pt-15 lg:p-20">
              <ul className="grid grid-cols-2 gap-5 sm:gap-15">
                {databases.map((database, index) => (
                  <li key={index} className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="sm:text-xl font-medium">{database.name}</p>
                      <p className="sm:text-xl font-semibold">
                        {database.progress}%
                      </p>
                    </div>
                    <Progress value={database.progress} />
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <section
        id="experience"
        className="py-20 px-10 sm:px-20 lg:px-40 space-y-5"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Experience
        </h2>
        <div className="flex flex-col space-y-5 justify-center">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="w-full max-w-4xl overflow-hidden self-center"
            >
              <CardHeader>
                <CardTitle className="text-xl">{experience.title}</CardTitle>
                <CardDescription className="text-base">
                  {experience.company}
                  <br />
                  {experience.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="pl-5 space-y-2">
                  {experience.description.map((point) => (
                    <li key={point} className="text-base list-disc">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col self-start">
                <div className="flex space-x-2 space-y-2 flex-wrap">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} className="text-sm h-7">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
          <a
            href="cv.pdf"
            className="self-center pt-10 flex items-center space-x-2 hover:text-primary/70 transition-all duration-200"
          >
            <h3 className="text-lg">View full CV </h3>
            <IconExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
