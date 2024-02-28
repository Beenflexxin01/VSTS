import { useState } from "react";

function Features() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handler = (index) => {
    if (activeAccordion === index) {
      return setActiveAccordion(null);
    }

    setActiveAccordion(index);
  };

  const allFeatures = [
    {
      id: 1,
      featureTitle: "Industry Expertise",
      featureDesc:
        "   Our faculty comprises of experienced industry professionals who bring a wealth of practical knowledge and insights to the training programs, ensuring their relevance to real-world challenges.",
    },
    {
      id: 2,
      featureTitle: "Customized Solutions",
      featureDesc:
        "We understand that each business is unique, and we offer tailored training solutions that address your specific needs and goals, whether you are a small boutique, an hotel, or a large resort.",
    },
    {
      id: 3,
      featureTitle: "Practial Approach",
      featureDesc:
        "Our programs emphasizes practical application, providing participants with hands-on exercises, case studies, and simulations that reflect real-life hospitality scenarios.",
    },
    {
      id: 4,
      featureTitle: "Networking Opportunities",
      featureDesc:
        "Our training institute serves as a hub for industry professionals, allowing you to connect and collaborate with like minded individuals, share best practices, and build valuable relationships.",
    },
    {
      id: 5,
      featureTitle: "Ongoing Support",
      featureDesc:
        "Our committment to your success does not end with the completion of a program. We provide post-training support, resources and guidance to help you implement what you have learned and achieve sustainable results.",
    },
    {
      id: 6,
      featureTitle: "Flexibility and Convenience",
      featureDesc:
        "We offer flexible training options, including on-site sessions, online coruses, and blended learning formats, allowing you to choose the delivery method that best suits your schedule and prefernces.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="features">
          <h2 className="secondary-header">Why Choose Us?</h2>
          <div className="grid-3 grid--3">
            {allFeatures &&
              allFeatures.map((allFeatures, toggle) => (
                <>
                  <div key={allFeatures.id} className="feature-section">
                    <div onClick={() => handler(toggle)} className="title">
                      <h3 className="tertiary-header">
                        {allFeatures.featureTitle}
                      </h3>
                      <span className="add-btn">
                        {activeAccordion === toggle ? "-" : "+"}
                      </span>
                    </div>
                    <div className="details">
                      <p
                        className={
                          activeAccordion === toggle
                            ? "content show"
                            : "content"
                        }>
                        {allFeatures.featureDesc}
                      </p>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
