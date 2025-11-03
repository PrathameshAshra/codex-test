const services = [
  {
    title: 'Product Strategy & Discovery',
    description:
      'Align stakeholders, validate market fit, and design a north star architecture with collaborative workshops and rapid prototyping.',
    icon: '🧭'
  },
  {
    title: 'Full-Stack Platform Engineering',
    description:
      'Build secure, observable, and high-performing web platforms leveraging TypeScript, React, Node.js, and modern cloud services.',
    icon: '⚙️'
  },
  {
    title: 'DevOps & Cloud Modernization',
    description:
      'Transform delivery pipelines with infrastructure-as-code, automated testing, and Kubernetes/Serverless deployments.',
    icon: '☁️'
  }
];

export default function Services() {
  return (
    <section id="services" className="section section--surface">
      <div className="section__header">
        <span className="eyebrow">Solutions</span>
        <h2>Consulting that ships quality software faster</h2>
        <p>
          From technical roadmaps to ongoing delivery, DEVLOPMENT COPNSITLACYU embeds with your team to accelerate outcomes.
        </p>
      </div>
      <div className="cards">
        {services.map((service) => (
          <article key={service.title} className="card">
            <div className="card__icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
