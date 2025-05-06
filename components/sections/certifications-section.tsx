import { AsciiArt } from "@/components/ascii-art"
import { Award, Trophy, Flag } from "lucide-react"

export function CertificationsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="certifications" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Technical Skills
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">HTML5 & CSS3</p>
                <p className="text-xs text-muted-foreground">Web Development Fundamentals</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Python & C#</p>
                <p className="text-xs text-muted-foreground">Programming Languages</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">SQL & Power BI (Basic)</p>
                <p className="text-xs text-muted-foreground">Data Management & Visualization</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            Hobbies & Interests
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Training & Physical Fitness</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Reading Books</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Watching Movies</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Flag className="h-4 w-4 mr-2" />
            Professional Development
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Continuous learning in Software Engineering</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <p>Developing IT infrastructure monitoring skills</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
