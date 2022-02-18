import Body1 from "../components/Body1";
import FeaturedSpecial from "../components/FeaturedSpecial";
import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ShowRome from "../components/ShowRome";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Body1 />
      <ShowRome />
      <Welcome />
      <FeaturedSpecial />
      <GoogleReviews />
      <Footer />
    </>
  )
}
