import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Workflow, Shield, Download, Target, Map, Puzzle, Clock } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "@/components/ThemeToggle";

const sections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "how-it-works", label: "How It Works", icon: Workflow },
  { id: "permissions", label: "Permissions & Security", icon: Shield },
  { id: "installation", label: "Installation", icon: Download },
  { id: "behavior", label: "Behavior & Scope", icon: Target },
  { id: "extensibility", label: "Extensibility", icon: Puzzle },
  { id: "status", label: "Project Status", icon: Clock },
  { id: "roadmap", label: "Roadmap", icon: Map },
];

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logo-white.png" : "/logo-blue.png";

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </Link>
            <div className="h-6 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-3">
              <img 
                src="/logo-white.png" 
                alt="Cleaner Agent" 
                className="h-8 w-auto object-contain" 
              />
              <span className="font-semibold text-lg text-primary-foreground">Documentation</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-card border-r border-border overflow-y-auto hidden lg:block">
          <nav className="p-4 space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Getting Started
            </div>
            {sections.slice(0, 5).map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              );
            })}
            
            <div className="px-3 py-2 mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Advanced
            </div>
            {sections.slice(5).map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile navigation */}
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-card border-b border-border z-40 overflow-x-auto">
          <div className="flex p-2 gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 lg:ml-64 pt-4 lg:pt-0">
          <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
            {/* Hero */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={logoSrc} 
                  alt="Cleaner Agent" 
                  className="h-16 w-auto object-contain" 
                />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Cleaner Agent</h1>
                  <p className="text-lg text-muted-foreground">Complete Documentation</p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Version:</strong> Early Development &nbsp;•&nbsp; 
                  <strong className="text-foreground">Last Updated:</strong> January 2026 &nbsp;•&nbsp;
                  <strong className="text-foreground">License:</strong> MIT
                </p>
              </div>
            </div>

            {/* Overview */}
            <section id="overview" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Cleaner Agent</strong> is a GitHub App designed to provide assistive automation for repository maintenance, organization, and quality control across GitHub organizations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rather than enforcing rigid rules, Cleaner Agent focuses on <strong className="text-foreground">observability</strong>, <strong className="text-foreground">guidance</strong>, and <strong className="text-foreground">hygiene</strong>, helping teams identify common issues and maintain consistency without disrupting existing workflows.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The app is <strong className="text-foreground">domain-agnostic</strong> and can be installed on new or legacy repositories, regardless of programming language or technology stack.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🔍 Observability</h4>
                    <p className="text-sm text-muted-foreground">Monitor repository activity and identify patterns that may indicate quality issues.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">💡 Guidance</h4>
                    <p className="text-sm text-muted-foreground">Provide actionable suggestions without blocking or enforcing strict policies.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🧹 Hygiene</h4>
                    <p className="text-sm text-muted-foreground">Keep repositories clean and organized with automated labeling and categorization.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Workflow className="h-8 w-8 text-primary" />
                How It Works
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cleaner Agent operates by subscribing to GitHub events and analyzing repository context to determine whether any predefined maintenance or quality checks apply.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Subscribed Events</h3>
                <div className="bg-card border border-border rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Pull Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Issues</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Issue Comments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Pull Request Reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Push Events</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">Repository Events</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Agent Actions</h3>
                <p className="text-muted-foreground mb-4">Based on the analysis, the agent may perform the following actions:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Post informational comments</strong> — Provide context and suggestions directly on PRs and issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Suggest improvements</strong> — Highlight missing elements or potential enhancements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Apply or update labels</strong> — Automatically categorize and organize repository items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Flag items for human review</strong> — Escalate complex situations to maintainers</span>
                  </li>
                </ul>

                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> All actions are performed using the GitHub Apps permission model, ensuring limited and explicit access to repository resources.
                  </p>
                </div>
              </div>
            </section>

            {/* Permissions & Security */}
            <section id="permissions" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Permissions & Security
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cleaner Agent follows the <strong className="text-foreground">principle of least privilege</strong>, requesting only the permissions necessary for its operation.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Required Permissions</h3>
                <div className="bg-card border border-border rounded-lg overflow-hidden mb-6">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Permission</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Access Level</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-sm text-foreground">Repository Metadata</td>
                        <td className="px-4 py-3 text-sm"><span className="bg-green-500/10 text-green-600 px-2 py-0.5 rounded text-xs">Read</span></td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Access repository information</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-foreground">Issues</td>
                        <td className="px-4 py-3 text-sm"><span className="bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded text-xs">Read/Write</span></td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Comment and label issues</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-foreground">Pull Requests</td>
                        <td className="px-4 py-3 text-sm"><span className="bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded text-xs">Read/Write</span></td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Comment and label PRs</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-foreground">Contents</td>
                        <td className="px-4 py-3 text-sm"><span className="bg-green-500/10 text-green-600 px-2 py-0.5 rounded text-xs">Read</span></td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Analyze code when required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Security Model</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🔐 App-Based Auth</h4>
                    <p className="text-sm text-muted-foreground">Uses GitHub's secure App authentication with App ID and installation tokens.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">⏱️ Short-Lived Tokens</h4>
                    <p className="text-sm text-muted-foreground">Credentials expire quickly, minimizing exposure window.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🚫 No Code Execution</h4>
                    <p className="text-sm text-muted-foreground">Does not clone repositories or execute any code.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">📝 No File Modification</h4>
                    <p className="text-sm text-muted-foreground">Does not modify source files unless explicitly designed.</p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Security First:</strong> Cleaner Agent is designed with security as a core principle. We never store sensitive data and all communication is encrypted using TLS 1.3.
                  </p>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Download className="h-8 w-8 text-primary" />
                Installation
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cleaner Agent is installed directly from GitHub as an App. The installation process is straightforward and takes less than 2 minutes.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Installation Steps</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Click Install on GitHub</h4>
                      <p className="text-sm text-muted-foreground">Navigate to the Cleaner Agent GitHub App page and click the Install button.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Select Organization or Account</h4>
                      <p className="text-sm text-muted-foreground">Choose the GitHub organization or personal account where you want to install the app.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Choose Repositories</h4>
                      <p className="text-sm text-muted-foreground">Select which repositories Cleaner Agent should operate on.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Confirm Permissions</h4>
                      <p className="text-sm text-muted-foreground">Review and approve the requested permissions to complete the installation.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Installation Options</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">All Repositories</h4>
                    <p className="text-sm text-muted-foreground">Install on all current and future repositories in the organization.</p>
                    <span className="inline-block mt-2 text-xs bg-muted px-2 py-1 rounded">Best for full adoption</span>
                  </div>
                  <div className="bg-card border border-primary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Select Repositories</h4>
                    <p className="text-sm text-muted-foreground">Choose specific repositories for targeted installation.</p>
                    <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">Recommended for initial adoption</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Behavior & Scope */}
            <section id="behavior" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Behavior & Scope
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cleaner Agent is designed to be <strong className="text-foreground">non-intrusive</strong>. It supports your workflow without getting in the way.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Cleaner Agent Does NOT Do</h3>
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">✕</span>
                      <span className="text-muted-foreground">Does not block merges</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">✕</span>
                      <span className="text-muted-foreground">Does not enforce policies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">✕</span>
                      <span className="text-muted-foreground">Does not replace human code review</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">✕</span>
                      <span className="text-muted-foreground">Does not modify source code</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-destructive">✕</span>
                      <span className="text-muted-foreground">Does not make autonomous decisions</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Cleaner Agent DOES</h3>
                <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-muted-foreground">Provides early feedback on PRs and issues</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-muted-foreground">Performs repository hygiene checks</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-muted-foreground">Offers operational suggestions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-muted-foreground">Automates labeling and categorization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-muted-foreground">Flags items for human review</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Human Control:</strong> All decisions remain under human control. Cleaner Agent acts as a supportive agent, not a replacement for your team's judgment.
                  </p>
                </div>
              </div>
            </section>

            {/* Extensibility */}
            <section id="extensibility" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Puzzle className="h-8 w-8 text-primary" />
                Extensibility
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The architecture of Cleaner Agent is built with extensibility as a core principle, ensuring it can evolve alongside the needs of different organizations.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Extensibility Features</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🔧 Incremental Rules</h4>
                    <p className="text-sm text-muted-foreground">Add new rules incrementally without disrupting existing behavior.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🏢 Organization-Specific</h4>
                    <p className="text-sm text-muted-foreground">Optional organization-specific behavior and customization.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🔄 Workflow Integration</h4>
                    <p className="text-sm text-muted-foreground">Future expansion into deeper automation workflows.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">📊 Custom Metrics</h4>
                    <p className="text-sm text-muted-foreground">Define custom metrics and thresholds for your organization.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Plugin Architecture (Coming Soon)</h3>
                <p className="text-muted-foreground mb-4">
                  We're working on a plugin architecture that will allow organizations to create custom rules and behaviors:
                </p>
                <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-muted-foreground">{`// Example plugin structure (planned)
export default {
  name: 'custom-pr-check',
  events: ['pull_request.opened'],
  handler: async (context) => {
    // Your custom logic here
    return context.comment('Custom check passed!');
  }
}`}</pre>
                </div>
              </div>
            </section>

            {/* Project Status */}
            <section id="status" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                Project Status
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-yellow-500 text-yellow-950 text-xs font-bold px-2 py-1 rounded">EARLY DEVELOPMENT</span>
                  </div>
                  <p className="text-muted-foreground">
                    Cleaner Agent is currently in early development. Features and behaviors are expected to evolve as the project matures and as feedback is collected from real-world usage.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Current Capabilities</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">●</span>
                    <span className="text-muted-foreground">PR and Issue monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">●</span>
                    <span className="text-muted-foreground">Automated labeling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">●</span>
                    <span className="text-muted-foreground">Informational comments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-600">●</span>
                    <span className="text-muted-foreground">Basic hygiene checks (in progress)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-muted-foreground">○</span>
                    <span className="text-muted-foreground">Custom rules (planned)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-muted-foreground">○</span>
                    <span className="text-muted-foreground">Plugin system (planned)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">Get Involved</h3>
                <p className="text-muted-foreground mb-4">
                  We welcome feedback, bug reports, and feature requests. Join our community to help shape the future of Cleaner Agent.
                </p>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Map className="h-8 w-8 text-primary" />
                Roadmap
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our roadmap outlines the planned development milestones for Cleaner Agent. This is subject to change based on community feedback and priorities.
                </p>

                <div className="space-y-6">
                  {/* Q1 2026 */}
                  <div className="relative pl-8 border-l-2 border-primary pb-6">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">Q1 2026</h3>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Current</span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Core functionality implementation</li>
                        <li>• GitHub App installation flow</li>
                        <li>• Basic PR and Issue monitoring</li>
                        <li>• Automated labeling system</li>
                        <li>• Initial documentation</li>
                      </ul>
                    </div>
                  </div>

                  {/* Q2 2026 */}
                  <div className="relative pl-8 border-l-2 border-muted pb-6">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-muted rounded-full border-2 border-background" />
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Q2 2026</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Advanced hygiene checks</li>
                        <li>• Organization-level configuration</li>
                        <li>• Custom rule definitions</li>
                        <li>• Dashboard for monitoring</li>
                        <li>• API for external integrations</li>
                      </ul>
                    </div>
                  </div>

                  {/* Q3 2026 */}
                  <div className="relative pl-8 border-l-2 border-muted pb-6">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-muted rounded-full border-2 border-background" />
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Q3 2026</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Plugin system beta</li>
                        <li>• Workflow automation</li>
                        <li>• Integration with CI/CD pipelines</li>
                        <li>• Analytics and reporting</li>
                        <li>• Multi-repository insights</li>
                      </ul>
                    </div>
                  </div>

                  {/* Q4 2026 */}
                  <div className="relative pl-8 border-l-2 border-muted">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-muted rounded-full border-2 border-background" />
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Q4 2026 & Beyond</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Plugin marketplace</li>
                        <li>• AI-powered suggestions</li>
                        <li>• Enterprise features</li>
                        <li>• Self-hosted option</li>
                        <li>• Community contributions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t border-border pt-8 mt-16">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  © 2026 Cleaner Agent. All rights reserved.
                </p>
                <Link to="/" className="text-sm text-primary hover:underline">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
