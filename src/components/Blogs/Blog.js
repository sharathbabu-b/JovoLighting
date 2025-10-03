import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Lightingnavbar";
import FooterBottom from "../Footerbottom";
import "./blogs.css";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Fundamentals of Lighting",
      slug: "fundamentals-of-lighting",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJFTqsagGGMsFCwyGO82x4PwShFZk8T8W5nYOfqgLjpl6pcY44AWzORY8pPLaROkxxwMRAAilLK6MTNKgo3MTDMPG-Bg3HxNvEYfDAF7FcVAYoJHIcQebNwhL329O3pvLR6W1UhJZzxu5n8_f_o452aGYkI00DFxRDOalLdbBD-KbHtLW8gEQrL2A41UY8/s4032/IMG_5102.jpg",
      date: "Jul 03, 2023",
    },
    {
      id: 2,
      title: "5 Benefits of Lighting in Architecture and Interior Design",
      slug: "5-benefits-of-lighting-in-architecture-and-interior-design",
      image: "https://jovoindia.com/images/portfolio-images/Tyd-9.jpg",
      date: "Jul 06, 2023",
    },
    {
      id: 3,
      title: "The Underestimated Importance of Lighting in India",
      slug: "underestimated-importance-of-lighting-in-india",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdt1_PrKAoKTOUS3OvsWBOEQ_tQk9O1s5IMtXgk8s2aBNoagN1f9EwJR7IvTi0QBj36O9Shm7tZxTwrpLW62Iiw8vGfQiMVG42AqXR7LEMXCK9yQ_uFWuJAo2-xpNy2qof0d4DltDWyC02F2rwSQTITz4a4udMKV5Ns1w5BAQvLENCcJqq_H43609eTE48/s1792/82332BE0-6FB2-4A6C-A1FE-BD1969ED2BB7.jpeg",
      date: "May 27, 2024",
    },
    {
      id: 4,
      title: "Common Mistakes to Avoid in Home Lighting",
      slug: "common-mistakes-to-avoid-in-home-lighting",
      image: "https://jovoindia.com/images/Common%20Mistakes%20to%20Avoid%20in%20Home%20Lighting.jpg",
      date: "June 22, 2023",
    },
    {
      id: 5,
      title: "Illuminating Precision: The Iza Project by JÖVÖ INDIA",
      slug: "illuminating-precision-the-iza-project-by-jovo-india",
      image: "https://jovoindia.com/images/Illuminating-Precision.JPG",
      date: "August 04, 2024",
    },
    {
      id: 6,
      title: "Custom Lighting Designs: What Bangalore Homeowners Are Choosing",
      slug: "custom-lighting-designs-bangalore-homeowners",
      image: "https://jovoindia.com/images//Custom%20Lighting%20Designs%20What%20Bangalore%20Homeowners%20Are%20Choosing%20(1).jpg",
      date: "Aug 18, 2025",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <>
      <Navbar />

      
      <section className="section top-50 py-5 bg-black mt-5">
        <div className="container text-center overflow-hidden">
          <h1 className="display-1 mb-1 text-light ps-2">Our Blog</h1>
        </div>

       
        <div className="container m-1">
          <div className="row justify-content-center">
            <div className="col-md-8 mb-5 mt-3 px-3">
              <Link to="/blogs/fundamentals-of-lighting" className="text-decoration-none text-light">
                <div className="card blog-card border-0 shadow-lg overflow-hidden bg-dark text-white">
                  <div className="position-relative">
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJFTqsagGGMsFCwyGO82x4PwShFZk8T8W5nYOfqgLjpl6pcY44AWzORY8pPLaROkxxwMRAAilLK6MTNKgo3MTDMPG-Bg3HxNvEYfDAF7FcVAYoJHIcQebNwhL329O3pvLR6W1UhJZzxu5n8_f_o452aGYkI00DFxRDOalLdbBD-KbHtLW8gEQrL2A41UY8/s4032/IMG_5102.jpg"
                      alt="Fundamentals of Lighting"
                      className="card-img w-100 hover-zoom"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-end p-4 rounded max-w-50 justify-content-end py-3 ms-3">
                      <div className="d-flex justify-content-end align-items-center mb-2">
                        <small className="me-2">Mahesh Surasgar</small>
                        <div className="vr mx-2 bg-white"></div>
                        <small>Jun 29, 2023</small>
                      </div>
                      <h2 className="fw-bold mb-1">Fundamentals of Lighting</h2>
                      <div className="d-flex justify-content-end align-items-center">
                        <span className="me-2" >Learn more</span>
                        <span>&#x279C;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-black py-3">
        <div className="container-default mx-auto">
          <div className="row align-items-center mb-4">
            <div className="col-md-8 py-5">
              <h1 className="text-white">Latest articles</h1>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {currentPosts.map((post) => (
              <div className="col" key={post.id}>
                <Link to={`/blogs/${post.slug}`} style={{ textDecoration: "none" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded hover-zoom"
                    style={{ height: "500px", width: "100%", objectFit: "cover" }}
                  />
                  <h1 className="text-light fs-4 py-3 ms-2">{post.title}</h1>
                  <div className="text-light px-2">{post.date}</div>
                </Link>
              </div>
            ))}
          </div>

         
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination pagination-dark">
                <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                  <button
                    className="page-link bg-dark text-light border-0"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Prev
                  </button>
                </li>

                {[...Array(totalPages)].map((_, idx) => (
                  <li key={idx} className={`page-item ${currentPage === idx + 1 ? "active" : ""}`}>
                    <button
                      className="page-link bg-dark text-light border-0"
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}

                <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
                  <button
                    className="page-link bg-dark text-light border-0"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <FooterBottom />
    </>
  );
}
