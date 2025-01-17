import CategoriesAhmed from "@/components/CategoriesAhmed";
import CompaniesSlider from "@/components/CompaniesSlider";
import FeaturedPAhmed from "@/components/FeaturedPAhmed";
import HeroSection from "@/components/HeroSection";
import MostLatestBlogs from "@/components/MostLatestBlog";
import LatestProducts from "@/components/LatestProducts";
import PB from "@/components/PB";
import PP from "@/components/PP";
import SubscribeMainComponent from "@/components/SubscribeMainComponent";
import Suppc from "@/components/Suppc";
import TrendingPr from "@/components/TrendingPr";


export default function Home() {
  return (
   <>
    <HeroSection />
    <FeaturedPAhmed />
    <LatestProducts />
    <Suppc />
    <PP />
    <TrendingPr />
    <PB />
    <CategoriesAhmed />
    <SubscribeMainComponent />
    <CompaniesSlider />
    <MostLatestBlogs />
   </>
  );
}
