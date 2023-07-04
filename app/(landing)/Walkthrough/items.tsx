import {
  ArrowBigRight,
  Boxes,
  Braces,
  CalendarPlus,
  CheckCircle2,
  Code2,
  FileBarChart2,
  FileClock,
  GanttChartSquare,
  KanbanSquareDashed,
  LineChart,
  Slack,
  Webhook,
  Workflow,
} from "lucide-react"

export const items = [
  {
    step: 1,
    label: "Plan",
    title: (
      <>
        Create hypotheses. <br />
        Refine and schedule.
      </>
    ),
    description:
      "Coming up with a testable hypothesis sits at the very start of every experiment. Uplift supports in creating scientific hypothesis.",
    cta: "Start Planning",
    imageUrl: "/image-plan.jpg",
    color: "from-purple-600 to-purple-400",
    solidColor: "purple-500",
    textColor: "text-purple-500",
    highlights: [
      { icon: <KanbanSquareDashed />, label: "Templates" },
      { icon: <GanttChartSquare />, label: "Roadmap" },
      { icon: <CheckCircle2 />, label: "Status Updates" },
    ],
    icon: <CalendarPlus className="w-4 md:w-6" />,
  },
  {
    step: 2,
    label: "Deploy",
    title: <>Expose experiment variations in realtime with the Uplift API.</>,
    description:
      "Each experiment mappes one to one to a feature flag, named after the experiment in consistent and predictable ways. Set an experiment's status to on, set the right date range and get your experiments exposed within a clean endpoint for your client applications to consume as feature flags.",
    cta: "Start Deploying",
    imageUrl: "/image-flags.jpg",
    color: "from-amber-600 to-amber-400",
    solidColor: "amber-500",
    textColor: "text-amber-500",
    icon: <Code2 className="w-4 md:w-6" />,
    highlights: [
      { icon: <Braces />, label: "Feature Flag API" },
      { icon: <Boxes />, label: "Javascript SDK" },
      { icon: <Webhook />, label: "Webhooks" },
    ],
  },
  {
    step: 3,
    label: "Analyze",
    title: <>Metrics where they need to be.</>,
    description:
      "Your metrics are integrated into each and every experiment created. Either use Uplifts SDK to track experiment resolvements or integrate with Amplitude to import metrics. Sample Missmatch ratios inform you about the quality of your experiment.",
    cta: "Start Analyzing",
    imageUrl: "/image-analyze.jpg",
    color: "from-blue-600 to-blue-400",
    solidColor: "blue-500",
    textColor: "text-blue-500",
    icon: <LineChart className="w-4 md:w-6" />,
    highlights: [
      { icon: <FileClock />, label: "Analyses Summaries" },
      { icon: <Workflow />, label: "Tool Integration" },
    ],
  },
  {
    step: 4,
    label: "Decide",
    title: <>Discuss and evaluate. Take next steps.</>,
    description:
      "An experiment is only as good as the actions taken based on the results. Uplift supports in making and documenting the right decisions based on the results of your experiments.",
    cta: "Start Acting",
    imageUrl: "/image-act.jpg",
    color: "from-green-600 to-green-400",
    solidColor: "green-500",
    textColor: "text-green-500",
    icon: <ArrowBigRight className="w-4 md:w-6" />,
    highlights: [
      { icon: <FileBarChart2 />, label: "Report Sharing" },
      { icon: <Slack />, label: "Slack Integration" },
    ],
  },
]
