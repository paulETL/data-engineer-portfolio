import Image from "next/image";

const categories = [
  {
    title: "Languages & Core",
    items: [
      { name: "Python", icon: "/stack/python.svg" },
      { name: "SQL", icon: "/stack/mysql.svg" },
      { name: "SQLAlchemy", icon: "/stack/sqlalchemy.svg" },
      { name: "Bash", icon: "/stack/gnubash.svg" },
      { name: "Pandas", icon: "/stack/pandas-svgrepo-com.svg" },
      { name: "PySpark", icon: "/stack/spark-svgrepo-com.svg" },
    ],
  },

  {
    title: "Streaming & Messaging",
    items: [
      { name: "Kafka", icon: "/stack/apachekafka.svg" },
      { name: "Spark", icon: "/stack/apachespark.svg" },
      { name: "Redpanda", icon: "/stack/redpanda.svg" },
      { name: "Zookeeper", icon: "/stack/apache_zookeeper-ar21.svg" },
    ],
  },

  {
    title: "Data Engineering",
    items: [
      { name: "Airflow", icon: "/stack/apacheairflow.svg" },
      { name: "dbt", icon: "/stack/dbt-svgrepo-com.svg" },
      { name: "Docker", icon: "/stack/docker-svgrepo-com.svg" },
      { name: "Terraform", icon: "/stack/terraform-16-svgrepo-com.svg" },
      { name: "Git", icon: "/stack/git-svgrepo-com.svg" },
    ],
  },

  {
    title: "Warehousing & Lakehouse",
    items: [
      { name: "Snowflake", icon: "/stack/snowflake.svg" },
      { name: "Databricks", icon: "/stack/databricks-svgrepo-com.svg" },
      { name: "MinIO", icon: "/stack/minio.svg" },
      { name: "Azure SQL", icon: "/stack/azure-sql.svg" },
      { name: "S3", icon: "/stack/aws-s3-svgrepo-com.svg" },
      { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
    ],
  },

  {
    title: "Cloud & Platform",
    items: [
      { name: "AWS", icon: "/stack/aws-svgrepo-com.svg" },
      { name: "Azure", icon: "/stack/azure-svgrepo-com.svg" },
      { name: "Azure Data Factory", icon: "/stack/data-factories.svg" },
    ],
  },

  {
    title: "Scraping & Automation",
    items: [
      { name: "Selenium", icon: "/stack/selenium-svgrepo-com.svg" },
      { name: "Scrapy", icon: "/stack/scrapy.svg" },
      { name: "Requests", icon: "/stack/pull-requests-svgrepo-com.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
          Technologies
        </p>

        <h2 className="text-5xl font-black text-white">
          My Tech Stack
        </h2>
      </div>

      <div className="space-y-14">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-6 text-2xl font-bold text-white">
              {category.title}
            </h3>

            <div className="grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-7">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-violet-500/40 hover:bg-violet-500/5"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="h-6 w-6 object-contain"
                    />
                  </div>

                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
