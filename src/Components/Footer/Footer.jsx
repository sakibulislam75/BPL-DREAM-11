import ftrlg from "../../assets/logo-footer.png";
import shadow from  '../../assets/bg-shadow.png'

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1020] text-white mt-50 pt-28 py-10">
      
      {/* Banner (floating on top of footer) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-10/12 rounded-xl overflow-hidden bg-center bg-cover bg-[#0b1020]"
        
         style={{ backgroundImage: `url(${shadow} )`
,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-white/70" />

        {/* content */}
        <div className="relative z-10 text-center py-16 px-4">
          <h2 className="text-3xl font-bold">
            Subscribe to our Newsletter
          </h2>

          <p className="mt-2 mb-6 text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded text-black"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 font-semibold text-black rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="w-10/12 mx-auto flex flex-col items-center gap-10">

        {/* Logo */}
        <div className="text-center">
          <img src={ftrlg} alt="logo" className="w-16 mx-auto mb-2" />
          <h2 className="text-xl font-bold">🏏 BPL DREAM 11</h2>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <p className="text-gray-400">
              Build your dream cricket team, select players, and track performance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Players</li>
              <li>Selected Team</li>
              <li>Stats</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Subscribe</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-md text-black bg-white outline-none"
              />
              <button className="bg-gradient-to-r from-pink-500 to-yellow-400 px-4 py-2 rounded-r-md font-semibold">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <p className="text-xs text-gray-500 border-t border-gray-700 pt-4 w-full text-center">
          © 2026 BPL DREAM 11. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
