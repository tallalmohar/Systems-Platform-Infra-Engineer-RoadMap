import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Phase 1",
    subtitle: "Foundations",
    duration: "Months 1–2",
    color: "#00FF94",
    description: "Build the bedrock. Nothing else works without this.",
    note: "Do this DURING your Planview internship in parallel. 1–2 hours per day.",
    resources: [
      {
        name: "MIT 6.824 Distributed Systems",
        type: "Course",
        url: "https://pdos.csail.mit.edu/6.824/",
        priority: "CRITICAL",
        why: "The single most referenced course by engineers at frontier labs. Raft, MapReduce, fault tolerance. Start here, no exceptions.",
        hours: "40–50 hrs",
      },
      {
        name: "MIT 6.S081 Operating Systems",
        type: "Course",
        url: "https://pdos.csail.mit.edu/6.828/2021/",
        priority: "CRITICAL",
        why: "You need to understand how the OS manages memory, processes, and I/O before you can understand why GPU training infrastructure behaves the way it does.",
        hours: "30–40 hrs",
      },
      {
        name: "The Linux Command Line – William Shotts",
        type: "Book",
        url: "https://linuxcommand.org/tlcl.php",
        priority: "HIGH",
        why: "Free. Read it cover to cover. You'll be living in Linux for your entire career.",
        hours: "10–15 hrs",
      },
      {
        name: "Computer Networks: A Top Down Approach",
        type: "Book",
        url: "https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm",
        priority: "HIGH",
        why: "Multi-node training is a networking problem as much as a compute problem. Know TCP, DNS, HTTP deeply.",
        hours: "20–25 hrs",
      },
    ],
    papers: [],
    project: null,
  },
  {
    id: 2,
    title: "Phase 2",
    subtitle: "PyTorch & GPU Fundamentals",
    duration: "Months 2–3",
    color: "#FF6B35",
    description:
      "Understand the compute layer. This is what separates ML infra engineers from DevOps engineers.",
    note: "Start Karpathy's videos the moment you finish the first 3 MIT 6.824 labs.",
    resources: [
      {
        name: "Andrej Karpathy – Neural Networks: Zero to Hero",
        type: "YouTube",
        url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        priority: "CRITICAL",
        why: "Build micrograd, then nanoGPT from scratch. This teaches you what training infrastructure actually needs to support. Most MLOps people skip this and it shows.",
        hours: "20–25 hrs",
      },
      {
        name: "PyTorch Official Tutorials + Source Code",
        type: "Docs",
        url: "https://pytorch.org/tutorials/",
        priority: "HIGH",
        why: "Don't just run the tutorials. Read the PyTorch source on GitHub. Understand autograd internals, the dispatcher, how CUDA kernels get called.",
        hours: "15–20 hrs",
      },
      {
        name: "GPU MODE Discord + Lectures",
        type: "Community",
        url: "https://discord.gg/gpumode",
        priority: "HIGH",
        why: "Join immediately. CUDA and Triton kernel writing. This is where serious ML systems engineers actually hang out.",
        hours: "Ongoing",
      },
      {
        name: "NVIDIA CUDA Programming Guide",
        type: "Docs",
        url: "https://docs.nvidia.com/cuda/cuda-c-programming-guide/",
        priority: "MEDIUM",
        why: "Dense. Don't try to memorize it. Read it to understand how GPU memory, threads, and warps work. Context for everything else.",
        hours: "10–15 hrs",
      },
      {
        name: "Lilian Weng's Blog",
        type: "Blog",
        url: "https://lilianweng.github.io",
        priority: "HIGH",
        why: "OpenAI researcher. Deep technical posts on training, scaling, and infrastructure. Read every post on training and optimization.",
        hours: "Ongoing",
      },
    ],
    papers: [
      {
        name: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
      },
      {
        name: "Scaling Laws for Neural Language Models",
        url: "https://arxiv.org/abs/2001.08361",
      },
    ],
    project: null,
  },
  {
    id: 3,
    title: "Phase 3",
    subtitle: "Kubernetes & Infrastructure at Depth",
    duration: "Months 3–4",
    color: "#4ECDC4",
    description:
      "Go deep on orchestration. Not how to use it — how it actually works.",
    note: "Apply what you're learning here directly to your Planview work. Ask your team to give you Kubernetes-heavy tickets.",
    resources: [
      {
        name: "Kubernetes the Hard Way – Kelsey Hightower",
        type: "GitHub",
        url: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
        priority: "CRITICAL",
        why: "Do NOT learn Kubernetes through a managed cluster. Build it from scratch. This is the industry standard for proving you understand it.",
        hours: "15–20 hrs",
      },
      {
        name: "KubeFlow Documentation",
        type: "Docs",
        url: "https://www.kubeflow.org/docs/",
        priority: "HIGH",
        why: "ML-specific Kubernetes tooling. The bridge between your infrastructure knowledge and ML workloads.",
        hours: "10–15 hrs",
      },
      {
        name: "Volcano Scheduler – Docs & Source",
        type: "GitHub",
        url: "https://github.com/volcano-sh/volcano",
        priority: "HIGH",
        why: "What serious ML training clusters actually use for job scheduling. Read the source code, not just the docs.",
        hours: "10 hrs",
      },
      {
        name: "CNCF YouTube – KubeCon ML Infra Talks",
        type: "YouTube",
        url: "https://www.youtube.com/@cncf",
        priority: "MEDIUM",
        why: "Search KubeCon for ML infrastructure talks specifically. Engineers from Anthropic, Google, and Meta present here.",
        hours: "10–15 hrs",
      },
    ],
    papers: [],
    project: {
      number: 1,
      title: "ML Training Job Scheduler on Kubernetes",
      description:
        "Build a lightweight training job scheduler on Kubernetes. Handle job queuing, GPU resource allocation, preemption of lower-priority jobs, and automatic retry on failure. Add a dashboard showing cluster utilization and job status.",
      why: "This is literally what internal platforms at frontier labs do. Building a simplified version shows you understand the problem space, not just the tooling.",
      stack: [
        "Kubernetes",
        "Python",
        "Go (optional)",
        "Prometheus",
        "React (dashboard)",
      ],
    },
  },
  {
    id: 4,
    title: "Phase 4",
    subtitle: "Distributed Training",
    duration: "Months 4–6",
    color: "#A855F7",
    description:
      "The core of ML infrastructure at frontier labs. Most people never go this deep. You will.",
    note: "This phase is where you go from 'DevOps person who knows ML' to 'ML Infrastructure engineer.' Don't rush it.",
    resources: [
      {
        name: "Hugging Face – Distributed Training Course",
        type: "Course",
        url: "https://huggingface.co/docs/transformers/en/perf_train_gpu_many",
        priority: "CRITICAL",
        why: "Best structured resource on multi-GPU training. DDP, FSDP, pipeline parallelism. Start here.",
        hours: "15–20 hrs",
      },
      {
        name: "Megatron-LM Codebase",
        type: "GitHub",
        url: "https://github.com/NVIDIA/Megatron-LM",
        priority: "CRITICAL",
        why: "Read the actual code NVIDIA and frontier labs base large model training on. Understand tensor parallelism, pipeline parallelism, and the training loop.",
        hours: "20–30 hrs",
      },
      {
        name: "DeepSpeed Documentation + ZeRO Paper",
        type: "Docs + Paper",
        url: "https://www.deepspeed.ai/",
        priority: "HIGH",
        why: "Read the ZeRO paper on arxiv first, then the docs. Understand WHY it was designed this way before learning how to use it.",
        hours: "15 hrs",
      },
      {
        name: "Ray Documentation + Anyscale Blog",
        type: "Docs",
        url: "https://docs.ray.io/",
        priority: "HIGH",
        why: "Ray is the distributed compute backbone at many frontier labs and ML companies. Go deep on Ray Train and Ray Tune specifically.",
        hours: "15–20 hrs",
      },
      {
        name: "PyTorch FSDP – Design Docs & Tutorial",
        type: "Docs",
        url: "https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html",
        priority: "HIGH",
        why: "Understand why FSDP was built as an improvement over DDP. The design doc explains tradeoffs better than the tutorial.",
        hours: "10 hrs",
      },
    ],
    papers: [
      {
        name: "ZeRO: Memory Optimizations Toward Training Trillion Parameter Models",
        url: "https://arxiv.org/abs/1910.02054",
      },
      {
        name: "Efficient Large-Scale Language Model Training (Megatron)",
        url: "https://arxiv.org/abs/2104.04473",
      },
      {
        name: "Raft Consensus Algorithm",
        url: "https://raft.github.io/raft.pdf",
      },
    ],
    project: {
      number: 2,
      title: "Distributed Training Benchmarking Framework",
      description:
        "Train a GPT-2 scale transformer across multiple GPUs using PyTorch DDP and FSDP. Build a benchmarking tool that measures throughput (tokens/sec), GPU utilization, memory efficiency, and communication overhead. Compare DDP vs FSDP vs different parallelism strategies. Write a detailed technical blog post on your findings.",
      why: "Every ML infra team at Anthropic and OpenAI deals with this problem at massive scale. This shows you understand training bottlenecks, not just deployment.",
      stack: ["PyTorch", "DDP/FSDP", "NCCL", "Weights & Biases", "Python"],
    },
  },
  {
    id: 5,
    title: "Phase 5",
    subtitle: "Observability, Reliability & Production",
    duration: "Months 6–8",
    color: "#F59E0B",
    description:
      "Training runs fail. Your job is to detect it before it costs $100k in GPU hours.",
    note: "This phase completes your stack. After this, you have the full picture from compute to production.",
    resources: [
      {
        name: "Full Stack Deep Learning",
        type: "Course",
        url: "https://fullstackdeeplearning.com/",
        priority: "CRITICAL",
        why: "Best end-to-end MLOps curriculum. Free. Covers training to deployment with real engineering depth.",
        hours: "20–25 hrs",
      },
      {
        name: "Made With ML",
        type: "Course",
        url: "https://madewithml.com/",
        priority: "HIGH",
        why: "Structured MLOps curriculum. Strong on the production and monitoring side that most ML engineers ignore.",
        hours: "15–20 hrs",
      },
      {
        name: "Prometheus + Grafana Documentation",
        type: "Docs",
        url: "https://prometheus.io/docs/introduction/overview/",
        priority: "HIGH",
        why: "GPU and training job observability. Every serious ML infra team uses this stack. Know it well.",
        hours: "10 hrs",
      },
      {
        name: "Chip Huyen – Designing ML Systems",
        type: "Book",
        url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
        priority: "HIGH",
        why: "Best book on production ML systems. Check your university library. Covers data pipelines, monitoring, and deployment tradeoffs.",
        hours: "15–20 hrs",
      },
      {
        name: "Google SRE Book",
        type: "Book",
        url: "https://sre.google/sre-book/table-of-contents/",
        priority: "HIGH",
        why: "Free online. Apply this thinking to ML systems. Frontier lab infra teams think in SRE terms.",
        hours: "15–20 hrs",
      },
    ],
    papers: [
      {
        name: "Google's MapReduce Paper",
        url: "https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf",
      },
      {
        name: "Google's Bigtable Paper",
        url: "https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf",
      },
      {
        name: "Google's Spanner Paper",
        url: "https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf",
      },
    ],
    project: {
      number: 3,
      title: "Training Observability & Fault Detection System",
      description:
        "Instrument a full training run with custom metrics: loss curves, gradient norms, GPU memory, inter-node bandwidth. Build anomaly detection that flags diverging runs, GPU stragglers, and data pipeline bottlenecks. Auto-checkpoint before likely failure. Alert system included.",
      why: "Losing a training run due to undetected infrastructure failure is one of the most expensive problems at frontier labs. This shows you think about reliability in ML contexts — most candidates don't.",
      stack: [
        "Prometheus",
        "Grafana",
        "PyTorch",
        "Python",
        "Ray",
        "Weights & Biases",
      ],
    },
  },
];

const priorityColors = {
  CRITICAL: { bg: "#FF4D4D30", border: "#FF6666", text: "#FFD4D4" },
  HIGH: { bg: "#FF8A5530", border: "#FF9C6E", text: "#FFE1D2" },
  MEDIUM: { bg: "#4ECDC430", border: "#7BE0D9", text: "#D8FBF7" },
};

export default function LearningPlan() {
  const [activePhase, setActivePhase] = useState(1);
  const [expandedResource, setExpandedResource] = useState(null);

  const phase = phases.find((p) => p.id === activePhase);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #121722 0%, #0F141F 100%)",
        minHeight: "100vh",
        fontFamily: "'Courier New', monospace",
        color: "#EAF0FA",
        padding: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid #2C3648",
          padding: "32px 40px 24px",
          background: "#121722",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            color: "#A6B1C2",
            marginBottom: "8px",
          }}
        >
          ML INFRASTRUCTURE CAREER ROADMAP
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            margin: "0 0 4px",
            color: "#FFFFFF",
            letterSpacing: "-0.5px",
          }}
        >
          0 → Frontier Lab Ready
        </h1>
        <div style={{ fontSize: "13px", color: "#B4BFD0" }}>
          8-month structured plan · 3 high-signal projects · Built for ML
          Infrastructure / Training Platform
        </div>
      </div>

      {/* Phase Nav */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #253044",
          overflowX: "auto",
          padding: "0 40px",
        }}
      >
        {phases.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePhase(p.id);
              setExpandedResource(null);
            }}
            style={{
              background: "none",
              border: "none",
              borderBottom:
                activePhase === p.id
                  ? `2px solid ${p.color}`
                  : "2px solid transparent",
              color: activePhase === p.id ? p.color : "#A6B1C2",
              padding: "16px 20px",
              cursor: "pointer",
              fontSize: "12px",
              letterSpacing: "1px",
              fontFamily: "'Courier New', monospace",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            {p.title.toUpperCase()} · {p.subtitle.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ padding: "32px 40px", maxWidth: "1000px" }}>
        {/* Phase Header */}
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "16px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: phase.color,
                letterSpacing: "-1px",
              }}
            >
              {phase.subtitle}
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "#B4BFD0",
                letterSpacing: "2px",
              }}
            >
              {phase.duration}
            </span>
          </div>
          <p
            style={{
              color: "#CCD5E3",
              fontSize: "14px",
              margin: "0 0 12px",
              lineHeight: "1.6",
            }}
          >
            {phase.description}
          </p>
          {phase.note && (
            <div
              style={{
                background: `${phase.color}10`,
                border: `1px solid ${phase.color}40`,
                borderLeft: `3px solid ${phase.color}`,
                padding: "10px 16px",
                borderRadius: "0 4px 4px 0",
                fontSize: "13px",
                color: phase.color,
              }}
            >
              ⚡ {phase.note}
            </div>
          )}
        </div>

        {/* Resources */}
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#A6B1C2",
              marginBottom: "16px",
            }}
          >
            RESOURCES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {phase.resources.map((r, i) => {
              const pc = priorityColors[r.priority];
              const isExpanded = expandedResource === i;
              return (
                <div
                  key={i}
                  onClick={() => setExpandedResource(isExpanded ? null : i)}
                  style={{
                    background: isExpanded ? "#202A3A" : "#192332",
                    border: `1px solid ${isExpanded ? "#3B4A64" : "#2B384F"}`,
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: "1px",
                        padding: "2px 6px",
                        background: pc.bg,
                        border: `1px solid ${pc.border}`,
                        color: pc.text,
                        borderRadius: "2px",
                        flexShrink: 0,
                      }}
                    >
                      {r.priority}
                    </span>
                    <span
                      style={{
                        flex: 1,
                        fontSize: "14px",
                        color: "#DDD",
                        fontWeight: "500",
                      }}
                    >
                      {r.name}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#A6B1C2",
                        letterSpacing: "1px",
                        marginRight: "4px",
                      }}
                    >
                      {r.type}
                    </span>
                    {r.hours && (
                      <span
                        style={{
                          fontSize: "10px",
                          color: "#D5DEEB",
                          background: "#2A3750",
                          padding: "2px 8px",
                          borderRadius: "2px",
                        }}
                      >
                        {r.hours}
                      </span>
                    )}
                    <span style={{ color: "#B4BFD0", fontSize: "12px" }}>
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                  {isExpanded && (
                    <div
                      style={{
                        padding: "0 16px 16px",
                        borderTop: "1px solid #31405A",
                      }}
                    >
                      <p
                        style={{
                          color: "#CCD5E3",
                          fontSize: "13px",
                          margin: "12px 0 12px",
                          lineHeight: "1.7",
                        }}
                      >
                        {r.why}
                      </p>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          color: phase.color,
                          fontSize: "12px",
                          textDecoration: "none",
                          letterSpacing: "1px",
                        }}
                      >
                        → {r.url}
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Papers */}
        {phase.papers.length > 0 && (
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#A6B1C2",
                marginBottom: "16px",
              }}
            >
              REQUIRED PAPERS — arxiv
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {phase.papers.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 16px",
                    background: "#192332",
                    border: "1px solid #2B384F",
                    borderRadius: "4px",
                    textDecoration: "none",
                    color: "#D5DEEB",
                    fontSize: "13px",
                    transition: "all 0.2s",
                  }}
                >
                  <span style={{ color: "#B4BFD0", fontSize: "10px" }}>
                    PDF
                  </span>
                  <span style={{ flex: 1 }}>{p.name}</span>
                  <span style={{ color: phase.color, fontSize: "11px" }}>
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Project */}
        {phase.project && (
          <div
            style={{
              background: `${phase.color}08`,
              border: `1px solid ${phase.color}30`,
              borderRadius: "6px",
              padding: "24px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  background: phase.color,
                  color: "#0B0F17",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  padding: "4px 10px",
                  borderRadius: "2px",
                }}
              >
                PROJECT {phase.project.number} OF 3
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#B4BFD0",
                  letterSpacing: "2px",
                }}
              >
                POST ON LINKEDIN
              </div>
            </div>
            <h3
              style={{
                color: phase.color,
                fontSize: "18px",
                margin: "0 0 12px",
                fontWeight: "700",
              }}
            >
              {phase.project.title}
            </h3>
            <p
              style={{
                color: "#CCD5E3",
                fontSize: "14px",
                margin: "0 0 16px",
                lineHeight: "1.7",
              }}
            >
              {phase.project.description}
            </p>
            <div
              style={{
                background: "#151E2D",
                border: "1px solid #2B384F",
                borderRadius: "4px",
                padding: "12px 16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#A6B1C2",
                  marginBottom: "6px",
                }}
              >
                WHY THIS SIGNALS WELL
              </div>
              <p
                style={{
                  color: "#CCD5E3",
                  fontSize: "13px",
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                {phase.project.why}
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#A6B1C2",
                  marginBottom: "8px",
                }}
              >
                STACK
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {phase.project.stack.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#1B2637",
                      border: `1px solid ${phase.color}30`,
                      color: phase.color,
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer timeline */}
      <div
        style={{
          borderTop: "1px solid #253044",
          padding: "24px 40px",
          display: "flex",
          gap: "0",
          overflowX: "auto",
        }}
      >
        {phases.map((p, i) => (
          <div
            key={p.id}
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <div
              onClick={() => setActivePhase(p.id)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                padding: "8px 16px",
                borderRadius: "4px",
                background: activePhase === p.id ? "#202A3A" : "transparent",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: activePhase === p.id ? p.color : "#B4BFD0",
                }}
              >
                {p.duration}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: activePhase === p.id ? "#EAF0FA" : "#A6B1C2",
                }}
              >
                {p.subtitle}
              </div>
              {p.project && (
                <div
                  style={{
                    fontSize: "9px",
                    color: p.color,
                    opacity: 0.6,
                    letterSpacing: "1px",
                  }}
                >
                  ▲ PROJECT {p.project.number}
                </div>
              )}
            </div>
            {i < phases.length - 1 && (
              <div
                style={{ color: "#7F8DA5", fontSize: "14px", margin: "0 4px" }}
              >
                —
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
