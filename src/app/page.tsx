"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HelloPage() {
  const [welcomed, setWelcomed] = useState(false);

  const features = [
    {
      title: "Modern Design",
      description: "Built with the latest web technologies and design principles for a contemporary look and feel.",
      badge: "Design"
    },
    {
      title: "Responsive Layout",
      description: "Optimized for all devices - from mobile phones to desktop computers, ensuring a great experience everywhere.",
      badge: "Mobile"
    },
    {
      title: "Fast Performance",
      description: "Engineered for speed with Next.js and optimized components to deliver lightning-fast page loads.",
      badge: "Performance"
    },
    {
      title: "Accessible",
      description: "Built with accessibility in mind, ensuring everyone can use and enjoy this beautiful interface.",
      badge: "A11y"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Welcome to Our Platform
            </Badge>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 transition-all duration-700 ${
              welcomed ? 'scale-105 text-blue-600' : ''
            }`}>
              Hello, World! 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to this beautiful, modern hello page. Experience elegant design, 
              smooth interactions, and thoughtful attention to detail.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => setWelcomed(!welcomed)}
            >
              {welcomed ? "Thanks for visiting!" : "Click to Get Welcomed"}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Welcome Message */}
        {welcomed && (
          <div className="text-center animate-in slide-in-from-bottom-4 duration-500">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">
                  🎉 Welcome Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-lg leading-relaxed">
                  Thank you for visiting our hello page! We hope you enjoy the clean design, 
                  smooth animations, and thoughtful user experience we've crafted for you.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>Modern</span>
              <span>•</span>
              <span>Responsive</span>
              <span>•</span>
              <span>Accessible</span>
              <span>•</span>
              <span>Fast</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}