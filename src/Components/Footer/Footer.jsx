import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
    {
        id: "1",
        title: "Home",
        link: "/#"
    },
    {
        id: "2",
        title: "About",
        link: "/#about" 
    },
    {
        id: "3",
        title: "Contact",
        link: "/#contact"
    },
    {
        id: "4",
        title: "Blog",
        link: "/#blog" 
    }
]
function Footer() {
  return (
    <>
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div className="container">
            <div className="grid grid-col-1 sm:grid-cols-3 py-4">
                {/* company details */}
                <div className="py-8 px-4">
                    <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">Metaverse</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis sequi hic asperiores aspernatur quidem.</p>
                    <br />
                    {/* contact section */}
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow/>
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt/>
                            <p>+91 9685208320</p>
                        </div>
                    </div>
                    {/* social handle */}
                    <div className="flex gap-3 mt-6 items-center">
                        <a href="#"><FaFacebook className="text-3xl hover:text-primary duration-300" /></a>
                        <a href="#"><FaInstagram className="text-3xl hover:text-primary duration-300" /></a>
                       <a href="#"> <FaLinkedin className="text-3xl hover:text-primary duration-300" /></a>
                    </div>
                </div>
                {/* Footer Links section */}
                <div className="grid grid-cols-2 sm:grid-cols-3  col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-4">Quick Links</h1>
                            <ul className="space-y-3">
                                {FooterLinks.map ((link) => (
                                    <li key={link.id} className=" hover:translate-x-1 hover:text-primary duration-300">
                                        <a className="cursor-pointer" href={link.link}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-4">Quick Links</h1>
                            <ul className="space-y-3">
                                {FooterLinks.map ((link) => (
                                    <li key={link.id} className=" hover:translate-x-1 hover:text-primary duration-300">
                                        <a className="cursor-pointer" href={link.link}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-4">Location</h1>
                            <ul className="space-y-3">
                                {FooterLinks.map ((link) => (
                                    <li key={link.id} className=" hover:translate-x-1 hover:text-primary duration-300">
                                        <a className="cursor-pointer" href={link.link}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  );
}

export default Footer;
