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
}

];