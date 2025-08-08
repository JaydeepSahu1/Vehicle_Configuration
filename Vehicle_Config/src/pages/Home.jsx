import React, { useEffect, useState, useRef } from "react";

const carImages = [
   "/home/n7.jpg",
  "/home/n6.webp",
  "/home/n2.webp",
  "/home/n3.jpg",
  "/home/n4.jpg",  
];

const partners = [
  {
    name: "BMW",
    logo: "/logos/bmw.png",
    info: "BMW is a German luxury vehicle manufacturer known for performance and innovation."
  },
  {
    name: "Tata Motors",
    logo: "/logos/tata.png",
    info: "Tata Motors is an Indian automotive giant producing cars, trucks, and electric vehicles."
  },
  {
    name: "Hyundai",
    logo: "/logos/hyundai.png",
    info: "Hyundai is a South Korean company recognized for reliable and affordable vehicles."
  },
  {
    name: "Mahindra",
    logo: "/logos/mahindra.png",
    info: "Mahindra is a leading Indian manufacturer of SUVs, tractors, and electric mobility solutions."
  },
  {
    name: "Mercedes-Benz",
    logo: "/logos/mercedes.png",
    info: "Mercedes-Benz is a global icon of luxury, engineering, and automotive excellence."
  },
  {
    name: "Toyota",
    logo: "/logos/toyota.png",
    info: "Toyota is a globally renowned Japanese automaker known for its reliability, innovation, and hybrid technology. It leads the industry in sustainable mobility with models like the Prius and advancements in hydrogen fuel cells."
  }
];

const topModelSlides = [
  ["/images/bmw-x5.jpg", "/images/bmw-x5-interior.jpg"],
  ["/images/thar.jpg", "/images/thar-interior.jpg"],
  ["/images/XEV.png", "/images/XEV_interior.jpg"]
];

const topModelInfo = [
  {
    name: "BMW X5",
    description: "A luxury SUV with powerful performance and elegant design."
  },
  {
    name: "Mahindra Thar",
    description: "A rugged off-roader built for adventure and durability."
  },
  {
    name: "Mahindra XEV 9V",
    description: "An electric SUV with futuristic features and AI-assisted driving."
  }
];

const bulkBuyers = [
  "Reliance Fleet Services",
  "Amazon Logistics India",
  "Indian Army Transport Division"
];

const customerReviews = [
  {
    name: "Rajeev from Reliance",
    comment: "The vehicles are reliable and economical for our fleet. Great service!"
  },
  {
    name: "Anita from Amazon Logistics",
    comment: "Delivery operations became smoother with their electric vans."
  },
  {
    name: "Colonel Sharma, Indian Army",
    comment: "The durability and performance exceed expectations in harsh terrain."
  }
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [hoveredModelIndex, setHoveredModelIndex] = useState(null);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const hoverTimeout = useRef(null);
  const slideshowTimer = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % carImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = partner => {
    hoverTimeout.current = setTimeout(() => {
      setSelectedPartner(partner);
    }, 250);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setSelectedPartner(null);
  };

  const startSlideshow = index => {
    setHoveredModelIndex(index);
    setSlideshowIndex(0);
    slideshowTimer.current = setInterval(() => {
      setSlideshowIndex(prev => (prev + 1) % topModelSlides[index].length);
    }, 1000);
  };

  const stopSlideshow = () => {
    clearInterval(slideshowTimer.current);
    setHoveredModelIndex(null);
    setSlideshowIndex(0);
  };

  return (
    <div style={{ width: "100vw", display: "flex", flexDirection: "column" }}>
      {/* Top Background Image */}
      <div
        style={{
          height: "80vh",
          width: "100%",
          backgroundImage: `url(${carImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out"
        }}
      />

      {/* Collaboration Section */}
      <div
        style={{
          flex: "1",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "2rem",
          backgroundColor: "#f5f5f5"
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#222" }}>
          Our Collaboration
        </h1>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingBottom: "1rem"
          }}
        >
          {partners.map(partner => {
            const isSelected = selectedPartner?.name === partner.name;
            return (
              <div
                key={partner.name}
                style={{
                  width: isSelected ? "300px" : "100px",
                  height: isSelected ? "200px" : "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#333",
                  padding: "1rem",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  position: "relative"
                }}
                onMouseEnter={() => handleMouseEnter(partner)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    width: isSelected ? "60px" : "50px",
                    height: isSelected ? "60px" : "50px",
                    objectFit: "contain",
                    marginBottom: "0.5rem"
                  }}
                />
                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{partner.name}</div>

                {isSelected && (
                  <div
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.85rem",
                      color: "#555",
                      textAlign: "center"
                    }}
                  >
                    {partner.info}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Selling Model Section */}
      <div
        style={{
          width: "100%",
          padding: "2rem",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderTop: "1px solid #ddd"
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#222" }}>
          Our Top Selling Model of this Year
        </h1>

        {/* Car Images */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingBottom: "1rem"
          }}
        >
          {topModelSlides.map((images, index) => (
            <img
              key={index}
              src={
                hoveredModelIndex === index
                  ? images[slideshowIndex]
                  : images[0]
              }
              alt={`Top Model ${index + 1}`}
              onMouseEnter={() => startSlideshow(index)}
              onMouseLeave={stopSlideshow}
              style={{
                width: "450px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transform: hoveredModelIndex === index ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease"
              }}
            />
          ))}
        </div>

        {/* Car Info */}
        <div style={{ maxWidth: "700px", textAlign: "center", marginBottom: "2rem" }}>
          {hoveredModelIndex !== null ? (
            <>
              <h2 style={{ color: "#444", marginBottom: "0.5rem" }}>
                {topModelInfo[hoveredModelIndex].name}
              </h2>
              <p style={{ fontSize: "1rem", color: "#666" }}>
                {topModelInfo[hoveredModelIndex].description}
              </p>
            </>
          ) : (
            <>
              <h2 style={{ color: "#444", marginBottom: "0.5rem" }}>
                About Our Company
              </h2>
              <p style={{ fontSize: "1rem", color: "#666" }}>
                We are a leading automotive brand committed to innovation, sustainability, and customer satisfaction. Our journey spans decades of excellence in design, engineering, and global partnerships.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Bulk Buyers Section */}
      <div
        style={{
          width: "100%",
          padding: "2rem",
          backgroundColor: "#f0f8ff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderTop: "1px solid #ccc"
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#222" }}>
          Our Happy Customers
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "#555",
            marginBottom: "1.5rem",
            maxWidth: "600px",
            textAlign: "center"
          }}
        >
          Our vehicles are chosen by leading organizations for their reliability,
          performance, and value. Here are some of our proud partners:
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "2rem"
          }}
        >
          {bulkBuyers.map((buyer, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "1rem 1.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                fontSize: "1rem",
                color: "#333",
                minWidth: "200px",
                textAlign: "center"
              }}
            >
              {buyer}
            </div>
          ))}
        </div>

        {/* Customer Reviews Carousel */}
        <h2 style={{ color: "#222", marginBottom: "1rem" }}>Customer Reviews</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}
        >
          <button
            onClick={() =>
              setCurrentReview((prev) =>
                prev === 0 ? customerReviews.length - 1 : prev - 1
              )
            }
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "1.2rem"
            }}
          >
            &#8592;
          </button>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              maxWidth: "400px",
              textAlign: "center"
            }}
          >
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "0.8rem" }}>
              “{customerReviews[currentReview].comment}”
            </p>
            <p style={{ fontWeight: "bold", color: "#333" }}>
              — {customerReviews[currentReview].name}
            </p>
          </div>

          <button
            onClick={() =>
              setCurrentReview((prev) =>
                prev === customerReviews.length - 1 ? 0 : prev + 1
              )
            }
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "1.2rem"
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
