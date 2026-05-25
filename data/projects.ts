import { Project } from "@/types/project";

export const projects: Project[] = [

{
  id: "real-time-stock-market-pipeline",

  title: "Real-Time Market Intelligence Platform",

  description:
    "Built an end-to-end real-time market intelligence platform using Kafka, Snowflake, dbt, Airflow, and Power BI.",

  businessObjective:
    "Designed a scalable real-time analytics platform that transforms live market data into actionable business intelligence for faster operational and investment decisions.",

  highlights: [
    "Real-time Kafka event ingestion pipeline",
    "Automated dbt warehouse transformations",
    "Airflow orchestration with Docker deployment",
    "Power BI live analytics dashboards",
  ],

images: [
  "/images/projects/dashboard1.png",
  "/images/projects/dashboard2.png",
  "/images/projects/dashboard3.png",
  "/images/projects/dashboard4.png",
  "/images/projects/dashboard5.png",
  "/images/projects/DBT.png",
  "/images/projects/dbt_prompt.png",
  "/images/projects/docker.png",
  "/images/projects/kafka_UI.png",
  "/images/projects/minio.png",
  "/images/projects/pipeline_architecture.png",
  "/images/projects/pipeline_execute.png",
  "/images/projects/snowflake.png",
  "/images/projects/airflow_minio_DAG.png",
  "/images/projects/airflow_runs.png",
],


videos: [
  "/videos/pipeline-demo.mp4",
  "/videos/powerbi-demo.mp4",
],







  github:
    "https://github.com/paulETL/real-time-stock-market-pipeline",

  technologies: [
    "Kafka",
    "Snowflake",
    "dbt",
    "Airflow",
    "Docker",
    "Power BI",
    "Python",
    "SQL",
  ],
},






  {
    id: "amazon-segment-analysis",

    title: "Amazon Segment Performance Analysis",

    description:
      "End-to-end financial analytics and business intelligence project analyzing Amazon segment-level performance from 2015–2023 using SEC filings, Python-based extraction workflows, financial modeling, DAX calculations, and executive Power BI dashboard development.",

    businessObjective:
      "Designed to evaluate Amazon’s profitability structure, segment-level operational performance, and margin evolution across AWS, North America, and International business units through executive-level financial analytics and business intelligence reporting.",

    highlights: [
      "Built a complete analytics engineering workflow from raw SEC filing ingestion to executive dashboard delivery",
      "Developed Python-based extraction pipelines for parsing and transforming Amazon 10-K financial disclosures",
      "Engineered analytical datasets and KPI models for profitability, growth, and segment contribution analysis",
      "Created multi-page Power BI dashboards with advanced DAX measures and executive financial reporting",
      "Performed strategic analysis identifying AWS as Amazon’s dominant profitability engine",
      "Solved financial normalization, reconciliation, and DAX modeling challenges across multi-year datasets",
    ],

    images: [
      "/images/projects/amzn_segment_deep_dive.png",
      "/images/projects/amzn_executive_summary.png",
      "/images/projects/amzn_dashboard_overview.png",
      "/images/projects/amzn_profitability_analysis.png",
      "/images/projects/amzn_strategic_takeaways.png",
    ],

    videos: [
      "/videos/amazon_dashboard_demo.mp4",
    ],

    github:
      "https://github.com/paulETL/amazon-segment-analysis",

    technologies: [
      "Python",
      "Pandas",
      "Power BI",
      "DAX",
      "SQL",
      "Jupyter",
      "Financial Analytics",
      "Business Intelligence",
      "Data Modeling",
    ],
  }

];










