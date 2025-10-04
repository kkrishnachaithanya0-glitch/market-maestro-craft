import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Header = () => {
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                ShopHub
              </h1>
            </a>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pr-12 h-10 rounded-md border-input focus-visible:ring-primary"
              />
              <Button 
                size="sm" 
                className="absolute right-0 top-0 h-10 rounded-l-none bg-primary hover:bg-primary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="relative gap-2">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="hidden md:inline">Cart</span>
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="pb-3 md:hidden">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full pr-12 h-10"
            />
            <Button 
              size="sm" 
              className="absolute right-0 top-0 h-10 rounded-l-none bg-primary hover:bg-primary/90"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="border-t bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto py-2 text-sm scrollbar-hide">
            <a href="#" className="whitespace-nowrap hover:text-primary transition-colors font-medium">
              Electronics
            </a>
            <a href="#" className="whitespace-nowrap hover:text-primary transition-colors">
              Fashion
            </a>
            <a href="#" className="whitespace-nowrap hover:text-primary transition-colors">
              Home & Garden
            </a>
            <a href="#" className="whitespace-nowrap hover:text-primary transition-colors">
              Sports
            </a>
            <a href="#" className="whitespace-nowrap hover:text-primary transition-colors">
              Books
            </a>
            <a href="#" className="whitespace-nowrap hover:text-primary transition-colors">
              Toys
            </a>
            <a href="#" className="whitespace-nowrap hover:text-primary transition-colors">
              Beauty
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
