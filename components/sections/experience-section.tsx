import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">HR Apprentice</h3>
            <p className="text-xs text-muted-foreground">Senff Contact Ltda., Curitiba, PR | March 2022 - Present</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Efficient management of administrative documents, validation and accountability</li>
            <li>Admission and registration of new employees</li>
            <li>Promoting an organized and productive work environment</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">NOC Intern</h3>
            <p className="text-xs text-muted-foreground">Senff Contact Ltda., Curitiba, PR</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Experience in handling support tickets and resolving technical issues</li>
            <li>Working with monitoring tools like Zabbix and Grafana</li>
            <li>Developed solid problem-solving skills in IT infrastructure</li>
            <li>Collaborated with the technical team to ensure system stability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
