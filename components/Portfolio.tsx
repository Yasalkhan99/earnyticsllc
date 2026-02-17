import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "SavingsHub4U",
      category: "Blog & Deals Website",
      image: "/images/screencapture-savingshub4u-2026-02-17-22_43_30.png",
      link: "#"
    },
    {
      title: "AvailCouponCode",
      category: "Coupon Platform",
      image: "/images/screencapture-availcouponcode-2026-02-17-22_37_56.png",
      link: "#"
    },
    {
      title: "MimeCode",
      category: "E-Commerce Store",
      image: "/images/screencapture-mimecode-2026-02-17-22_36_22.png",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium mb-2 uppercase tracking-wide">
            Our Recent Works
          </p>
          <h2 className="text-4xl font-bold">Our Portfolios</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-6 bg-gradient-to-br from-white/5 to-transparent">
                <p className="text-orange-500 text-sm mb-2 font-medium">{item.category}</p>
                <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
