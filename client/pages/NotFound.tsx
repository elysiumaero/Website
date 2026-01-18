import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <div className="text-8xl md:text-9xl font-bold font-orbitron text-primary mb-4 opacity-50">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-foreground">
            System Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist in our aerospace navigation system. This might be a navigation
            error or the route has been decommissioned.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-lg transition-all"
            >
              Return to Base
            </Button>
            <Button
              onClick={() => document.getElementById("technologies")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="px-8 py-3 text-lg font-semibold rounded-lg border-primary text-primary hover:bg-primary/10"
            >
              Explore Technologies
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 opacity-30">
            <div className="inline-block text-6xl mb-4">🛰️</div>
            <p className="text-muted-foreground text-sm">Satellite signal lost for this route</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
