import ImageCarousel from "../Carosuel";

const images = [
  "https://st.depositphotos.com/1037987/4845/i/450/depositphotos_48459381-stock-photo-portrait-of-multi-cultural-office.jpg",
  "https://corporate.charter.com/static/5b8aa7c0a0ce1b5439d7a3b456f3f72c/27792/ChatSupport_Hero.jpg",
  "https://www.sunairjets.com/wp-content/uploads/2021/05/What-is-a-Charter-Flight.png",
];

function Bio() {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 px-2 md:px-5 border border-white bg-white/10 rounded-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white pb-3 md:pb-5">Why ChrisAir</h1>
        <div className="flex flex-col">
          <div className="w-full text-white text-base md:text-xl p-0 m-auto">
            <p>
              We at ChrisAir© take pride in being a distinguished leader in luxury aviation,
              specializing in the sale and rental of premium air
              vehicles—including state-of-the-art private jets and sophisticated
              helicopters. We’re here to redefine what it means to fly in style,
              combining cutting-edge aircraft with white-glove service that puts
              you at the center of every journey. At ChrisAir©, our mission is
              rooted in one thing: YOU. From the moment you connect with our
              concierge team to the final landing, every detail is handled with
              precision, care, and a deep understanding of your unique needs.
            </p>
            <p>
              Whether you’re looking to purchase your own aircraft or charter
              one for a special occasion, we make the process seamless,
              personal, and completely hassle-free. But we don’t just sell or
              rent jets—we build lasting relationships grounded in trust,
              discretion, and elite service. Our experienced team of aviation
              professionals is passionate about delivering excellence at every
              altitude. Whether you're flying for business, leisure, or
              something in between, we tailor every experience to reflect your
              lifestyle and vision. Because at ChrisAir©, you don’t just fly…
             <span className="italic">you soar above ordinary.</span>
            </p>
          </div>
          <div className="my-5 w-full">
            <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
              <ImageCarousel
                images={images}
                showHover={false}
                imgClassName="w-full h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bio;