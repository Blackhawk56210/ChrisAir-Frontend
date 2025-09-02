import Banner from "../components/main-page/banner.jsx";
import New from "../components/main-page/newInventory";
import Bio from "../components/main-page/CompanyBio.jsx";
import CompanySection from "../components/contact";

export default function Home() {
  return (
    <div className="p-15 pt-20">
      <Banner />
      <New />
      <Bio />
      <CompanySection />
    </div>
  );
}
