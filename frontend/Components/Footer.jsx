import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#152a1f] text-[#ffffff] py-12 w-full mt-auto mb-[0px]"
    >
      <div className="container mx-auto mb-[0px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg text-[#daa520] font-semibold mb-4">
              BLYS-FUL TASKS
            </h3>
            <p className="text-[#daa520]">Ease into Task Management</p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-row justify-between items-center ml-[3%] mr-[3%] ">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

              <span>
                <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                  About Us
                </a>
              </span>
              <br />
              <br />
              <span>
                <a
                  href="/#home-content"
                  className="text-[#daa520] hover:text-[#ffffff]"
                >
                  How It Works
                </a>
              </span>
              <br />
              <br />
              <span>
                <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                  FAQ
                </a>
              </span>
              <br />
              <br />
              <span>
                <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                  Contact
                </a>
              </span>
              <br />
              <br />
            </div>
            {/* Legal  */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <span>
                <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                  Terms of Service
                </a>
              </span>
              <br />
              <br />
              <span>
                <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                  Privacy Policy
                </a>
              </span>
              <br />
              <br />
              <span>
                <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                  Cookie Policy
                </a>
              </span>
              <br />
              <br />
            </div>
            {/* Logos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>

              <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                <Facebook size={24} /> FaceBook
              </a>
              <br />
              <br />
              <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                <Twitter size={24} /> Twitter
              </a>
              <br />
              <br />
              <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                <LinkedIn size={24} /> LinkedIn
              </a>
              <br />
              <br />
              <a href="#" className="text-[#daa520] hover:text-[#ffffff]">
                <Instagram size={24} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10px] pt-[8px] pb-[8px] border-t border-gray-700 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Blys-Ful Tasks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
