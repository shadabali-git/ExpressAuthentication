import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between p-4">

                <div className="text-xl font-bold text-primary"> Keep Secret  </div>
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                cn(
                                    "text-base font-medium transition duration-200",
                                    isActive
                                        ? "text-primary underline decoration-2 underline-offset-4"
                                        : "text-gray-600 hover:text-primary"
                                )
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>


                <div className="hidden md:flex space-x-4">
                    <Button variant="outline" size="sm">
                        Log In
                    </Button>
                    <Button size="sm">Sign Up</Button>
                </div>

                {/* Mobile Menu (Hamburger) */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon">
                        {/* Add an icon, e.g., a hamburger menu icon */}
                        <span className="sr-only">Toggle Menu</span>☰
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
