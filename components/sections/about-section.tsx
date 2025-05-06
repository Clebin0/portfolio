import { AsciiArt } from "@/components/ascii-art"
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison"

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
            Cledson Cleverton da Silva Santos
            <br />
            <span className="text-primary/60">Software Engineering Student</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            Hello! I'm Cledson Cleverton da Silva Santos, a Software Engineering student with internship experience in
            NOC/Support.
          </p>

          <p>
            I stand out for my dedication and determination in executing activities, collaborating in a highly committed
            way to generate results and achieve recognition.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                I have excellent communication skills, a proactive attitude, and the ability to learn quickly, working
                efficiently in a team environment.
              </p>

              <p>I'm always looking to overcome challenges and deliver my best in all activities entrusted to me.</p>

              <p>
                I have a strong desire to join the IT sector team and actively contribute with my skills and experience
                to add value to the team.
              </p>

              <p>
                In my free time, I enjoy training, reading books, and watching movies to maintain a good work-life
                balance.
              </p>
            </div>
          </div>

          <p>
            I'm passionate about technology and continuously developing my skills in software development and IT
            infrastructure.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> Curitiba, PR
              </li>
              <li>
                <span className="text-muted-foreground">Education:</span> Software Engineering, Estácio de Sá
              </li>
              <li>
                <span className="text-muted-foreground">Specialty:</span> NOC Support, IT Infrastructure
              </li>
              <li>
                <span className="text-muted-foreground">Languages:</span> Portuguese, English (Intermediate), Spanish
                (Basic)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
