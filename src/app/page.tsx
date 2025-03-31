import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [{
    title: "Esce for VSCode",
    description: "A sleek, comforting bluesteel dark mode theme for Visual Studio Code.",
    technologies: ["Theme"],
    link: "https://marketplace.visualstudio.com/items?itemName=dmatuwidi.esce&ssr=false#overview",
    image: "/esce.png"
  }, {
    title: "AI Flashcards SaaS App",
    description: "AI-powered flashcards web-app. Handled AI integration, coordinated front-end design.",
    technologies: ["Next.js", "Stripe", "Firebase", "Google Gemini", "Clerk"],
    link: "ttps://github.com/dmatuwidi/flashcards-saas",
    image: "/flashcards.jpg"
  }, {
    title: "AI Chat Bot Web-app",
    description: "Customer service support agent. Integrated and optimised AI back-end, coordinated front-end efforts.",
    technologies: ["Next.js", "Firebase", "Google Gemini"],
    link: "https://github.com/MateuszNiedbalski/Chat-Bot",
    image: "/chatbot.jpg"
  }];

  const languages = [{
    name: "Python",
    progress: 90
  }, {
    name: "Java",
    progress: 70
  }, {
    name: "JavaScript",
    progress: 80
  }, {
    name: "TypeScript",
    progress: 80
  }, {
    name: "C++",
    progress: 60
  }, {
    name: "HTML",
    progress: 85
  }, {
    name: "CSS",
    progress: 85
  }];

  return (
    <div className="md:space-y-10">
      <section id="about" className="py-20 md:py-40 px-10 sm:px-20 lg:p-40 lg:py-80 space-y-5 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat relative z-0 before:content-[''] before:bg-linear-to-b before:from-white/0 before:to-white/100 before:absolute before:inset-0 before:z-[-5]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl pt-10 md:pt-20 xl:pt-30">
          Hi, I'm <span className="text-secondary-foreground font-semibold">Damy Matuwidi</span>
        </h1>
        <p className="text-xl md:text-2xl mt-5 break-words text-wrap">
          I'm a penultimate year Computer Science student currently studying at the <span className="font-medium">University of Surrey.</span>
        </p>
        <p className="text-md sm:text-lg mt-5 break-words text-wrap">
          I'm an emerging software engineer with hands-on experience in Artificial Intelligence and Full-stack Web Development with a comprehensive understanding of software development principles. I can quickly master new technologies, shown by my academic work and personal projects. I'm commited to delivering quality, innovative solutions and excited to contribute to cutting-edge technological advancements.
        </p>
      </section>
      <section id="projects" className="py-20 lg:py-40 space-y-10 px-10 sm:px-20">
        <h2 className="text-3xl lg:text-5xl font-semibold px-30 sm:px-0 md:px-20 py-10">
          Projects
        </h2>
        <Carousel>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-8">
                <Card className="flex flex-col h-full justify-between">
                  <CardHeader className="space-y-2">
                    <AspectRatio ratio={12 / 9}>
                      <Image src={project.image} fill={true} alt="Project Image" className="rounded-md" />
                    </AspectRatio>
                    <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
                    <div>
                      {project.technologies.map((technology, index) => (
                        <Badge key={index} className="mr-2">{technology}</Badge>
                      ))}
                    </div>
                    <CardDescription className="text-lg">{project.description}</CardDescription>
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
      <section id="skills" className="py-20 md:py-40 px-10 sm:px-20 lg:p-40 space-y-5">
        <h2 className="text-5xl font-semibold">Skills</h2>
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
          </TabsList>
          <TabsContent value="languages">
            <div className="p-20 px-60">
              <ul className="grid grid-cols-2 gap-15">
                {languages.map((language, index) => (
                  <li key={index} className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-medium">{language.name}</p>
                      <p className="text-xl font-semibold">{language.progress}%</p>
                    </div>
                    <Progress value={language.progress} />
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
