import { AsciiArt } from "@/components/ascii-art"
import { Mail, Phone, MapPin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:cledsonsantos2005@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            cledsonsantos2005@gmail.com
          </a>
          <a href="tel:41998549628" className="flex items-center text-sm hover:text-primary transition-colors">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            (41) 9 9854-9628
          </a>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Curitiba, PR
          </div>
          <a
            href="https://github.com/Clebin0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/Clebin0
          </a>
        </div>
      </div>
    </div>
  )
}
