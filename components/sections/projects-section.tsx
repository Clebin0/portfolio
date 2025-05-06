import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Personal Portfolio Website</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | HTML5       |---->| CSS3           |---->| Responsive     |
  | Structure   |     | Styling        |     | Design         |
  +-------------+     +----------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| Interactive  |<-------------+
                      | Elements     |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Portfolio     |
                      | Showcase      |
                      +---------------+
`}
          </pre>
          <p className="text-sm mb-2">
            A responsive personal portfolio website built with HTML5 and CSS3 to showcase my skills, experience, and
            projects.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: HTML5, CSS3, Responsive Design</p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">NOC Monitoring Dashboard</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
  +-------------+     +----------------+     +----------------+
  | Zabbix      |---->| Grafana        |---->| Alert          |
  | Monitoring  |     | Visualization  |     | Management     |
  +-------------+     +----------------+     +----------------+
        |                                            |
        v                                            v
  +-------------+                            +----------------+
  | System      |                            | Performance    |
  | Metrics     |                            | Reports        |
  +-------------+                            +----------------+
`}
          </pre>
          <p className="text-sm mb-2">
            A monitoring dashboard created during my NOC internship to visualize system metrics and manage alerts for
            improved infrastructure monitoring.
          </p>
          <p className="text-xs text-muted-foreground mb-2">Technologies: Zabbix, Grafana, Monitoring Tools</p>
        </div>
      </div>
    </div>
  )
}