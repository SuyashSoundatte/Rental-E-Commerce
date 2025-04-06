// pages/vendor/BecomeSellerPage.tsx

import React, { useState } from "react"
import { Users, CreditCard, Percent, Headset, ShoppingBag } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { ChevronDown, Menu, X } from "lucide-react"
import { Carousel } from "@/components/ui/carousel"
import StickyBar from "@/components/ui/StickyBar";
const BecomeSellerPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setExpandedSection(null) // Reset expanded sections when toggling menu
  }

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }
  const components = [
    { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
    { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
    { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar." },
    { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually or semantically separates content." },
    { title: "Tabs", href: "/docs/primitives/tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time." },
    { title: "Tooltip", href: "/docs/primitives/tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
  ]

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none hover:text-blue-400">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  ))
  ListItem.displayName = "ListItem"

  const slideData = [
    {
      title: "Start Your Seller Journey",
      description: "Join thousands of successful sellers on BugBasket and reach millions of customers.",
      src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Grow Your Business",
      description: "Access powerful tools and insights to scale your business on our platform.",
      src: "https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Seamless Experience",
      description: "Our seller dashboard makes managing your products and orders effortless.",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  const sections = [
    { id: "section1", label: "Create Account" },
    { id: "section2", label: "List Products" },
    { id: "section3", label: "Storage & Shipping" },
    { id: "section4", label: "Receive Payments" },
    { id: "section5", label: "Grow Faster" },
    { id: "section6", label: "Seller App" },
    { id: "section7", label: "Help & Support" },
  ];
  


  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="w-full bg-white px-4 md:px-12 py-4 md:py-6 fixed flex items-center justify-between text-black z-50">
          <nav className="flex items-center justify-between w-full max-w-8xl mx-auto">
            {/* Desktop Navigation - hidden on mobile */}
            <div className="flex items-center gap-10">
              {/* Left - Brand Name */}
              <div className='flex items-center gap-2'>
                <div className="w-8 h-8 rounded-full bg-[#F3EE04] flex items-center justify-center">
                  <span className="text-[#027CD5] font-bold text-sm">B</span>
                </div>
                <div className="text-xl text-black">BugBasket</div>
              </div>
              <div className="hidden md:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    {/* Getting Started Dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger><h2 className="hover:text-blue-400 text-[15px]">Getting Started</h2></NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link to="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="/docs" title="Introduction">
                            Reusable components built using Radix UI and Tailwind CSS.
                          </ListItem>
                          <ListItem href="/docs/installation" title="Installation">
                            How to install dependencies and structure your app.
                          </ListItem>
                          <ListItem href="/docs/primitives/typography" title="Typography">
                            Styles for headings, paragraphs, lists, etc.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Components Dropdown */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger><h2 className="hover:text-blue-400 text-[15px]">Fees</h2></NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {components.map((component) => (
                            <ListItem key={component.title} title={component.title} href={component.href}>
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger><h2 className="hover:text-blue-400 text-[15px]">Grow</h2></NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {components.map((component) => (
                            <ListItem key={component.title} title={component.title} href={component.href}>
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Direct Link - Documentation */}
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                        Documentation
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden text-black p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu - shows when toggle is active */}
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-50 p-4 md:hidden overflow-y-auto">
                <div className="flex flex-col space-y-2">
                  {/* Getting Started Section */}
                  <div className="border rounded-md overflow-hidden">
                    <button
                      onClick={() => toggleSection('getting-started')}
                      className="w-full p-4 text-left font-medium flex justify-between items-center bg-gray-50"
                    >
                      Getting Started
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedSection === 'getting-started' ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedSection === 'getting-started' && (
                      <div className="p-2 bg-white">
                        <div className="bg-gray-50 p-4 mb-3 rounded-md">
                          <div className="font-medium">shadcn/ui</div>
                          <p className="text-sm text-gray-500">
                            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                          </p>
                        </div>
                        <Link to='/' className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Introduction</div>
                          <p className="text-sm text-gray-500">Reusable components built using Radix UI and Tailwind CSS.</p>
                        </Link>
                        <Link to='/' className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Installation</div>
                          <p className="text-sm text-gray-500">How to install dependencies and structure your app.</p>
                        </Link>
                        <Link to='/' className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Typography</div>
                          <p className="text-sm text-gray-500">Styles for headings, paragraphs, lists, etc.</p>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Components Section */}
                  <div className="border rounded-md overflow-hidden">
                    <button
                      onClick={() => toggleSection('components')}
                      className="w-full p-4 text-left font-medium flex justify-between items-center bg-gray-50"
                    >
                      Components
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedSection === 'components' ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedSection === 'components' && (
                      <div className="p-2 bg-white">
                        {components.map(component => (
                          <Link
                            key={component.title}
                            to={component.href}
                            className="block p-3 hover:bg-gray-50 rounded-md"
                          >
                            <div className="font-medium">{component.title}</div>
                            <p className="text-sm text-gray-500">{component.description}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Documentation Link */}
                  <Link to="/" className="p-4 text-left font-medium border rounded-md hover:bg-gray-50">
                    Documentation
                  </Link>

                  {/* Auth Buttons */}
                  <div className="pt-4 flex flex-col gap-2">
                    <Link to="/">
                      <Button className="w-full">Sign In</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Right - Auth Buttons - hidden on mobile */}
            <div className="hidden md:flex gap-6 items-center text-md font-medium">
              <Link to="/">
                <h1>Log In</h1>
              </Link>
              <Link to="/">
                <h1 className="bg-[#FFCD00] p-3">Start Renting</h1>
              </Link>
            </div>
          </nav>
        </div>
        {/* <hr /> */}
        <main className="">
          {/* first hero section */}
          {/* <div className="w-full mt-20 bg-cover bg-center py-12 px-4 md:px-18"
            style={{ backgroundImage: "url('https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Desktop_sell.webp')" }}>
            <h1 className="text-4xl font-semibold text-gray-900 mb-24">Rent online with BugBasket</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 bg-white shadow-lg rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-blue-500" />
                <p className="mt-2 text-sm text-gray-700">45 crore+ BugBasket users</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CreditCard className="w-8 h-8 text-blue-500" />
                <p className="mt-2 text-sm text-gray-700">7* days secure & regular payments</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Percent className="w-8 h-8 text-blue-500" />
                <p className="mt-2 text-sm text-gray-700">Low cost of renting</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Headset className="w-8 h-8 text-blue-500" />
                <p className="mt-2 text-sm text-gray-700">One-click Customer Support</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShoppingBag className="w-8 h-8 text-blue-500" />
                <p className="mt-2 text-sm text-gray-700">Access to exclusive rental deals</p>
              </div>
            </div>
          </div> */}

          {/* //2nd hero section */}
          <div className="relative overflow-hidden w-full h-fit bg-pink-400 mt-20">
            <Carousel slides={slideData} />
          </div>

          <div className="w-full h-64 bg-gray-400 ">
            <h1>Some other content</h1>
          </div>
          <div className="info">
             <StickyBar sections={sections} />;
          </div>
        </main>
      </div>
    </>
  )
}

export default BecomeSellerPage