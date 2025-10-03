import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogList = [
    {
      title: "Fundamentals of Lighting",
      date: "Jul 03, 2023",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJFTqsagGGMsFCwyGO82x4PwShFZk8T8W5nYOfqgLjpl6pcY44AWzORY8pPLaROkxxwMRAAilLK6MTNKgo3MTDMPG-Bg3HxNvEYfDAF7FcVAYoJHIcQebNwhL329O3pvLR6W1UhJZzxu5n8_f_o452aGYkI00DFxRDOalLdbBD-KbHtLW8gEQrL2A41UY8/s4032/IMG_5102.jpg",
      slug: "fundamentals-of-lighting"
    },
    {
      title: "5 Benefits of Lighting in Architecture and Interior Design",
      date: "Jul 06, 2023",
      image: "https://jovoindia.com/images/portfolio-images/Tyd-9.jpg",
      slug:"5-benefits-of-lighting-in-architecture-and-interior-design"
    },
    {
      title: "The Underestimated Importance of Lighting in India",
      date: "May 27, 2024",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdt1_PrKAoKTOUS3OvsWBOEQ_tQk9O1s5IMtXgk8s2aBNoagN1f9EwJR7IvTi0QBj36O9Shm7tZxTwrpLW62Iiw8vGfQiMVG42AqXR7LEMXCK9yQ_uFWuJAo2-xpNy2qof0d4DltDWyC02F2rwSQTITz4a4udMKV5Ns1w5BAQvLENCcJqq_H43609eTE48/s1792/82332BE0-6FB2-4A6C-A1FE-BD1969ED2BB7.jpeg",
      link: "/blog3"
    },
    {
      title: "Common Mistakes to Avoid in Home Lighting",
      date: "Jun 22, 2023",
      image: "https://jovoindia.com/images/Common%20Mistakes%20to%20Avoid%20in%20Home%20Lighting.jpg",
      link: "/blog4"
    },
    {
      title: "Top LED Lighting Trends in 2025 for Modern Homes",
      date: "July 26, 2025",
      image: "https://jovoindia.com/images/top-led-lighting-trends-in-2025-for-modern-homes.png",
      link: "/blog5"
    },
  ];


  const sortedBlogList = [...blogList].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="bg-black py-1">
      <div className="container-fluid">
        
        <div className="row align-items-center mb-4 py-5 ms-1">
          <div className="col-md-8 py-5 px-4 ms-0">
            <h1 className="text-white mb-0 ms-2">Browse our articles & news</h1>
          </div>
          
          <div className="col-md-3 text-md-end mt-md-2 ms-2">
            <Link to="/blog">
            <button className="btn bg-dark btn-outline-light text-white rounded-pill btn-lg py-3 px-4">
              Browse all articles
            </button>
            </Link>
          </div>
        </div>

    
        <div className="ms-2 row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
         {sortedBlogList.map((blog, index) => (
  <div className="col" key={index}>
    <Link to={`/blogs/${blog.slug}`}>
      <img
        src={blog.image}
        alt={blog.title}
        className="img-fluid rounded hover-img"
        style={{ height: '400px', objectFit: 'cover', width: '100%' }}
      />
      <h1 className="text-light fs-4 py-3">{blog.title}</h1>
      <div className="text-light px-5">—— {blog.date}</div>
    </Link>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
