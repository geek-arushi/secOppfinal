import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import BlogPage from "./pages/blog";
import BlogDetailsPage from "./templates/blog-details";
import BlogCategory from "./templates/blog-category";
import BlogTag from "./templates/blog-tag";
import BlogDate from "./templates/blog-date";
import BlogAuthor from "./templates/blog-author";
import ContactPage from "./pages/contact";
import Faq from "./pages/faq";
import HowItWorkPage from "./pages/howitwork";
import Cancer from "./pages/cancer";
import Orthopedics from "./pages/Orthopedics";
import Medical from "./pages/blog2";
import BlogDetail2 from "./containers/blogdetail2";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsAndConditions from "./pages/termscondition";
import FloatingWhatsApp from "./containers/whatsapp";
import NavScrollTop from "./components/nav-scroll-top";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import MedicalArticles from "./containers/blog2/blog2";
import BlogDetail from "./containers/blog2/BlogDetail";

// CSS Imports
import "./assets/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import "./assets/css/icofont.css";
import "./assets/css/animate.css";
import "lightgallery.js/dist/css/lightgallery.css";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavScrollTop>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Blog Section */}
          <Route path="/blog" element={<MedicalArticles />} />
          <Route path="/blog-details/:title" element={<BlogDetail />} />
          <Route path="/blog-category/:slug" element={<BlogCategory />} />
          <Route path="/blog-tag/:slug" element={<BlogTag />} />
          <Route path="/blog-date/:date" element={<BlogDate />} />
          <Route path="/blog-author/:author" element={<BlogAuthor />} />
          <Route path="/blog-details-id/:id" element={<BlogDetailsPage />} />

          {/* Main Website Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorkPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/cancer" element={<Cancer />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog-and-news" element={<Medical />} />
          <Route path="/blogdetail" element={<BlogDetail2 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </NavScrollTop>
      <FloatingWhatsApp />
    </Router>
  );
};

export default App;
