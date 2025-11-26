import Container from '../components/container';
import { AspectRatio } from '../components/ui/aspect-ratio';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { Separator } from '../components/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
  IconMailShare,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'Revolve',
      description:
        'A trusty web-app which cycles through and recommends items, activities or events based on the last time you used them.',
      technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
      link: 'https://github.com/dmatuwidi/revolve',
      link_description: 'View on GitHub',
      image: '/revolve.webp',
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal portfolio website built with Next.js and Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS'],
      link: '/',
      link_description: "You're here!",
      image: '/background-small.webp',
    },
    {
      title: 'Esce for VSCode',
      description:
        'A sleek, comforting bluesteel dark mode theme for Visual Studio Code.',
      technologies: ['Theme'],
      link: 'https://marketplace.visualstudio.com/items?itemName=dmatuwidi.esce&ssr=false#overview',
      link_description: 'Go to marketplace',
      image: '/esce.webp',
    },
    {
      title: 'AI Flashcards SaaS App',
      description:
        'AI-powered flashcards web-app. Handled AI integration, coordinated front-end design.',
      technologies: ['Next.js', 'Stripe', 'Firebase', 'Google Gemini', 'Clerk'],
      link: 'https://github.com/dmatuwidi/flashcards-saas',
      link_description: 'View on GitHub',
      image: '/flashcards.webp',
    },
    {
      title: 'AI Chat Bot Web-app',
      description:
        'Customer service support agent. Integrated and optimised AI back-end, coordinated front-end efforts.',
      technologies: ['Next.js', 'Firebase', 'Google Gemini'],
      link: 'https://github.com/MateuszNiedbalski/Chat-Bot',
      link_description: 'View on GitHub',
      image: '/chatbot.webp',
    },
  ];

  const languages = [
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'C++',
    'HTML / CSS',
  ];

  const frameworks = [
    'Next.js',
    'Express.js',
    'Tailwind CSS',
    'Bootstrap',
    'Django',
    'React',
    'Node.js',
  ];

  const databases = ['PostgreSQL', 'SQLite', 'Firebase'];

  const experiences = [
    {
      title: 'Peer Active Learning Assistant',
      company: 'University of Surrey',
      description: [
        'Assisted weekly computer lab sessions for second-year Computer Science students, enhancing their understanding of advanced programming concepts and problem-solving skills.',
        'Provided personalized support and mentorship, fostering a collaborative learning environment that encouraged student engagement and academic growth.',
      ],
      date: 'September 2025 - Present',
      skills: ['Communication', 'Leadership', 'Teamwork', 'Mentoring'],
    },
    {
      title: 'Software Engineering Fellow',
      company: 'Headstarter AI',
      description: [
        'Proficiently built and deployed 5 AI projects in 5 weeks, followed agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment.',
        'Worked collaboratively to develop an interactive customer support agent with an integrated custom RAG pipeline using Gemini and Pinecone.',
      ],
      date: 'July 2024 - September 2024',
      skills: ['AI', 'Next.js', 'Firebase', 'Clerk', 'Teamwork', 'Leadership'],
    },
    {
      title: 'Customer Team Member',
      company: 'Co-op',
      description: [
        'Attentively responded to customer inquiries and resolved complaints efficiently.',
        'Communicated with team members to manage and replenish shop inventory.',
        'Ensured excellent store presentation while maintaining a high level of security awareness.',
      ],
      date: 'September 2023 - January 2025',
      skills: [
        'Teamwork',
        'Attention to detail',
        'Customer Service',
        'Communication',
        'Problem-solving',
      ],
    },
  ];

  return (
    <div className="relative z-0 bg-[url('/background-small.webp')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:z-[-5] before:bg-linear-to-b before:from-white/0 before:to-white/100 before:to-50% before:content-[''] lg:bg-[url('/background.webp')]">
      <Container className="space-y-20 py-10 pt-30 md:pt-60">
        {/* About Section */}
        <section id="about" className="space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            Hi, I&apos;m <br />
            <span className="font-semibold text-secondary-foreground">
              Damy Matuwidi
            </span>
          </h1>
          <p className="mt-5 text-xl text-wrap break-words md:text-2xl">
            I&apos;m a penultimate year Computer Science student currently
            studying at the{' '}
            <span className="font-medium">University of Surrey.</span>
          </p>
          <p className="text-md mt-5 text-wrap break-words sm:text-lg">
            I&apos;m an emerging software engineer with hands-on experience in
            Artificial Intelligence, Cybersecurity, and Full-stack Web
            Development. With my comprehensive understanding of software
            development principles, I can quickly master new technologies, shown
            by my academic work and personal projects. I&apos;m committed to
            delivering quality, innovative solutions and excited to contribute
            to cutting-edge technological advancements.
          </p>
          <div className="flex items-center space-x-10">
            <a
              href="https://www.linkedin.com/in/damymatuwidi"
              className="rounded-lg bg-white/50 p-1 transition-all duration-200 hover:bg-white/30 hover:text-primary/70"
              aria-label="Visit Damy Matuwidi's LinkedIn profile!"
            >
              <IconBrandLinkedin size={30} />
            </a>
            <a
              href="https://www.github.com/dmatuwidi"
              className="rounded-lg bg-white/50 p-1 transition-all duration-200 hover:bg-white/30 hover:text-primary/70"
              aria-label="Visit Damy Matuwidi's GitHub profile!"
            >
              <IconBrandGithub size={30} />
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  className="rounded-lg bg-white/50 p-1 hover:bg-white/30"
                  aria-label="Send an email to Damy Matuwidi!"
                >
                  <a
                    href="mailto:dmatuwdi@gmail.com"
                    className="transition-all duration-200 hover:text-primary/70"
                    aria-label="Send an email to Damy Matuwidi!"
                  >
                    <IconMailShare size={30} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">
                    {' '}
                    <span className="underline">dmatuwidi@gmail.com</span> - if
                    mailto links don&apos;t work!
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
        <Separator />

        {/* Projects Section */}
        <section id="projects" className="space-y-10 px-5">
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Projects
          </h2>
          <Carousel>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="flex h-full flex-col justify-between">
                    <CardHeader className="space-y-2">
                      <AspectRatio ratio={1 / 1}>
                        <Image
                          src={project.image}
                          fill={true}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          alt="Project Image"
                          className="rounded-lg shadow-lg shadow-black/15"
                        />
                      </AspectRatio>
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <div className="space-x-2">
                        {project.technologies.map((technology, index) => (
                          <Badge key={index}>{technology}</Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="justify-end">
                      <Link href={project.link}>
                        <Button className="cursor-pointer">
                          {project.link_description} <IconExternalLink />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </Carousel>
        </section>
        <Separator />

        {/* Skills Section */}
        <section id="skills" className="space-y-10">
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Skills
          </h2>
          <Tabs
            defaultValue="languages"
            className="mx-auto w-full max-w-5xl overflow-hidden"
          >
            <TabsList className="h-fit w-full sm:space-x-5">
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
              <div className="pt-5 sm:p-5 lg:p-20">
                <ul className="grid grid-cols-3 gap-5">
                  {languages.map((language, index) => (
                    <li key={index} className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <p
                          className="font-medium sm:text-xl"
                          id={`language_` + index}
                        >
                          {language}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="frameworks">
              <div className="pt-5 sm:p-5 lg:p-20">
                <ul className="grid grid-cols-3 gap-5">
                  {frameworks.map((framework, index) => (
                    <li key={index} className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <p
                          className="font-medium sm:text-xl"
                          id={`framework_` + index}
                        >
                          {framework}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="databases">
              <div className="pt-5 sm:p-5 lg:p-20">
                <ul className="grid grid-cols-3 gap-5">
                  {databases.map((database, index) => (
                    <li key={index} className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <p
                          className="font-medium sm:text-xl"
                          id={`database_` + index}
                        >
                          {database}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        <Separator />

        {/* Experience Section */}
        <section id="experience" className="space-y-10">
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Experience
          </h2>
          <div className="flex flex-col justify-center space-y-5">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className="w-full max-w-4xl self-center overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                  <CardDescription className="text-base">
                    <span className="font-medium">{experience.company}</span>
                    <br />
                    {experience.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 pl-5">
                    {experience.description.map((point) => (
                      <li key={point} className="list-disc text-base">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col self-start">
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} className="h-7 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
            <div className="flex flex-col items-center space-y-2">
              <a
                href="cv.pdf"
                className="flex items-center space-x-2 self-center pt-10 transition-all duration-200 hover:text-primary/70"
              >
                <h3 className="text-lg">View full CV </h3>
                <IconExternalLink size={20} />
              </a>
              <p className="text-base text-muted-foreground">
                Updated Nov 26, 2025
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
