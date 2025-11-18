import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, Briefcase, User, ShoppingCart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home", icon: Home },
    { path: "/testimony", label: "Testimony", icon: MessageSquare },
    { path: "/services", label: "Services", icon: Briefcase },
    { path: "/profile", label: "Profile", icon: User },
    { path: "https://wa.me/62895325633487", label: "Order", icon: ShoppingCart },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-20">
          {links.map((link) => (
            link.path.startsWith("http") ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center w-1/5 transition-colors ${
                  link.label === "Order" // Assuming "Order" is always the external link
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <link.icon size={24} />
                <span className="text-xs mt-1">{link.label}</span>
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center w-1/5 transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <link.icon size={24} />
                <span className="text-xs mt-1">{link.label}</span>
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;