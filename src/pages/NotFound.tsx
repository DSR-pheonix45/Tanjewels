import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold font-montserrat text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold font-montserrat text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground font-montserrat mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button variant="cta" size="lg" className="w-full">
                Return to Home
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="w-full">
                Shop Our Collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
