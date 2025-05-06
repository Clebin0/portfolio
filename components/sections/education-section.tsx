import { AsciiArt } from "@/components/ascii-art"

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Sociedade de Ensino Superior Estácio de Sá Ltda.</h3>
          <p className="text-sm">Bachelor's in Software Engineering</p>
          <p className="text-xs text-muted-foreground">Expected Graduation: June 2027</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Software Development</li>
              <li>Database Management</li>
              <li>Web Development</li>
              <li>Programming Logic</li>
              <li>IT Infrastructure</li>
              <li>System Analysis and Design</li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  )
}