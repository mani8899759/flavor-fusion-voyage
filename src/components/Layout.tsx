
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SearchBar } from "./SearchBar";
import { ChefBot } from "./ChefBot";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearchClick={toggleSearch} />
      {isSearchVisible && <SearchBar onClose={() => setIsSearchVisible(false)} />}
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChefBot />
    </div>
  );
};

export default Layout;
