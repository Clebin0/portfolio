import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Programming Languages & Tools</h3>
          <div className="space-y-2">
            <SkillBar name="HTML5" percentage={85} />
            <SkillBar name="CSS3" percentage={80} />
            <SkillBar name="Python" percentage={60} />
            <SkillBar name="C#" percentage={60} />
            <SkillBar name="SQL" percentage={60} />
            <SkillBar name="Power BI" percentage={60} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">IT Infrastructure & Support</h3>
          <div className="space-y-2">
            <SkillBar name="Zabbix" percentage={75} />
            <SkillBar name="Grafana" percentage={75} />
            <SkillBar name="Ticket Management" percentage={85} />
            <SkillBar name="Problem Solving" percentage={80} />
            <SkillBar name="Technical Support" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Languages</h3>
          <div className="space-y-2">
            <SkillBar name="Portuguese" percentage={100} />
            <SkillBar name="English" percentage={60} />
            <SkillBar name="Spanish" percentage={40} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Soft Skills</h3>
          <div className="space-y-2">
            <SkillBar name="Communication" percentage={90} />
            <SkillBar name="Teamwork" percentage={85} />
            <SkillBar name="Proactivity" percentage={90} />
            <SkillBar name="Quick Learning" percentage={85} />
            <SkillBar name="Problem Solving" percentage={80} />
            <SkillBar name="Dedication" percentage={95} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} skill level: ${percentage}%`}
        />
      </div>
    </div>
  )
}
