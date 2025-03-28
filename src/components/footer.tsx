import { Separator } from "./ui/separator"

export default function Footer() {
  return (
    <footer className="flex flex-col border-t p-5 px-20">
      <Separator className="my-5" />
      <div className="flex justify-center">
        <p className="text-muted-foreground">&copy; 2025 Damy Matuwidi</p>
      </div>
    </footer>
  )
}