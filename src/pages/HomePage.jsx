import Banner from "../components/main-page/Banner.jsx";
import New from "../components/main-page/NewInventory.jsx";
import Bio from "../components/main-page/CompanyBio.jsx";

export default function Home() {
  return (
    <div className="px-4 pt-8 sm:px-8 sm:pt-12 md:px-15 md:pt-20 relative min-h-screen">
      <Banner />
      <New />
      <Bio />
    </div>
  );
}
