import { useTheme } from "@/hooks/useTheme";

const companies = [
  { name: "TechCorp", logo: "TC" },
  { name: "DevStudio", logo: "DS" },
  { name: "CloudOps", logo: "CO" },
  { name: "CodeBase", logo: "CB" },
  { name: "GitFlow", logo: "GF" },
  { name: "OpenDev", logo: "OD" },
];

const TrustedBy = () => {
  const { theme } = useTheme();

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Trusted by Engineering Teams Worldwide
            </h3>
            <p className="text-sm text-muted-foreground">
              Organizations using Cleaner Agent to maintain repository quality
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company) => (
              <div 
                key={company.name}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{company.logo}</span>
                </div>
                <span className="text-sm text-muted-foreground">{company.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Repositories Monitored</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">PRs Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
