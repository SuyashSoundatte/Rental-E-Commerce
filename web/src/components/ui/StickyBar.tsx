import React, { useEffect, useState} from "react";
import { ChevronRight, ShoppingBag, CreditCard, TrendingUp, Smartphone, HelpCircle, UserPlus } from "lucide-react";

interface Section {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface StickyBarProps {
  sections: Section[];
}

const StickyBar: React.FC<StickyBarProps> = ({ }) => {
  // Add icons to sections
  const sections = [
    { id: "section1", label: "Create Account", icon: <UserPlus className="w-5 h-5" /> },
    { id: "section2", label: "List Products", icon: <ShoppingBag className="w-5 h-5" /> },
    { id: "section3", label: "Storage & Shipping", icon: <ChevronRight className="w-5 h-5" /> },
    { id: "section4", label: "Receive Payments", icon: <CreditCard className="w-5 h-5" /> },
    { id: "section5", label: "Grow Faster", icon: <TrendingUp className="w-5 h-5" /> },
    { id: "section6", label: "Seller App", icon: <Smartphone className="w-5 h-5" /> },
    { id: "section7", label: "Help & Support", icon: <HelpCircle className="w-5 h-5" /> },
  ];

  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Setup intersection observer to detect active section
  useEffect(() => {
    const observerOptions = { 
      root: null, 
      rootMargin: "-20% 0px -80% 0px", 
      threshold: [0.1, 0.5] 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section when clicking navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(id);
      if (window.innerWidth < 768) {
        setIsMobileOpen(false);
      }
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-3 shadow-lg z-50"
        onClick={toggleMobileMenu}
      >
        <ChevronRight className={`w-6 h-6 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Sidebar Navigation */}
      <div className={`
        md:w-64 bg-white md:sticky md:top-24 md:self-start md:h-screen
        fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        overflow-y-auto shadow-md md:shadow-none
      `}>
        <nav className="py-6">
          <ul className="space-y-1">
            {sections.map(({ id, label, icon }) => (
              <li key={id} className="px-4">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 text-left relative ${
                    activeSection === id ? 'text-blue-500 font-medium' : 'text-gray-700'
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                  {activeSection === id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-md"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 md:pl-8 pt-4 md:pt-6">
        {sections.map(({ id, label }) => {
          // Special content for Storage & Shipping section
          if (id === "section3") {
            return (
              <section key={id} id={id} className="pb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Storage & Shipping</h2>
                <div className="pb-4 mb-8 border-b border-blue-500 w-12"></div>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Congratulations on receiving your first order! When it comes to shipping your products to 
                    customers, BugBasket understands the importance of fast and reliable delivery in secure 
                    packaging.
                  </p>
                  
                  <p className="text-gray-700">We provide two fulfilment options for you to choose from:</p>
                  
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="text-blue-500">✓</div>
                      <p className="text-gray-700">Fulfilment by BugBasket (FBB)</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="text-blue-500">✓</div>
                      <p className="text-gray-700">Non Fulfilment by BugBasket (NFBB)</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    Consider the fulfilment option that best suits your needs and preferences to ensure timely 
                    and secure delivery of your products to BugBasket customers.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Fulfilment by BugBasket (FBB)</h3>
                  
                  <div className="md:flex gap-6 items-start">
                    <div className="md:w-3/5">
                      <p className="text-gray-700">
                        Eliminate worries about storage, packing, shipping, and delivery by leveraging BugBasket's 
                        Fulfilment by BugBasket (FBB) service. FBF offers a comprehensive solution that handles all 
                        your shipping needs under one roof. With FBF, you can entrust BugBasket to efficiently manage 
                        the entire process, from storing your products to expertly packing and shipping them to customers. 
                        Enjoy a hassle-free experience and focus on growing your business while BugBasket takes care of the logistics.
                      </p>
                      
                      <div className="space-y-3 mt-6">
                        <div className="flex items-center gap-2">
                          <div className="text-blue-500">✓</div>
                          <p className="text-gray-700">Pick-up from seller location to BugBasket warehouse</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/5 mt-6 md:mt-0">
                      <div className="bg-gray-100 rounded-lg p-2 aspect-video flex items-center justify-center">
                        <div className="text-center">Video content placeholder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          
          // Generic content for other sections
          return (
            <section key={id} id={id} className="pb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{label}</h2>
              <div className="pb-4 mb-8 border-b border-blue-500 w-12"></div>
              
              <div className="prose max-w-none">
                <p>
                  This is the content for the {label} section. Replace this placeholder content with the actual information.
                </p>
                <p className="mt-4">
                  Each section should contain relevant information that helps sellers understand this step of the process.
                </p>
              </div>
            </section>
          );
        })}
        
        {/* Go to Top Button */}
        <div className="flex justify-end pb-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600"
          >
            <span>Go to Top</span>
            <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;