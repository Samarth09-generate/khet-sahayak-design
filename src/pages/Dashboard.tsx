import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sprout, 
  Cloud, 
  Bug, 
  TrendingUp, 
  Settings, 
  ArrowLeft,
  Thermometer,
  Droplets
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "मिट्टी की सलाह",
      subtitle: "Soil Advisory",
      icon: Sprout,
      color: "bg-crop-green",
      route: "/soil",
      description: "मिट्टी की जांच करें"
    },
    {
      title: "मौसम की जानकारी",
      subtitle: "Weather Info",
      icon: Cloud,
      color: "bg-sky-blue",
      route: "/weather",
      description: "आज का मौसम"
    },
    {
      title: "कीट पहचान",
      subtitle: "Pest Detection",
      icon: Bug,
      color: "bg-warning-orange",
      route: "/pest-detection",
      description: "फोटो से पहचानें"
    },
    {
      title: "बाजार दर",
      subtitle: "Market Prices",
      icon: TrendingUp,
      color: "bg-harvest-gold",
      route: "/market-prices",
      description: "आज के भाव"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-crop-green/10">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="text-center">
            <h1 className="font-bold text-lg">Smart Crop Advisory</h1>
            <p className="text-xs text-muted-foreground">किसान डैशबोर्ड</p>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/settings")}
            className="p-2"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Weather Banner */}
      <div className="p-4">
        <Card className="feature-card bg-gradient-to-r from-sky-blue/20 to-crop-green/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">आज का मौसम • Today</p>
                <p className="text-2xl font-bold">28°C</p>
                <p className="text-sm text-muted-foreground">धूप निकली है • Sunny</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <Thermometer className="w-6 h-6 mx-auto mb-1 text-warning-orange" />
                  <p className="text-xs">28°C</p>
                </div>
                <div className="text-center">
                  <Droplets className="w-6 h-6 mx-auto mb-1 text-sky-blue" />
                  <p className="text-xs">65%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feature Cards */}
      <div className="px-4 pb-8">
        <h2 className="text-lg font-semibold mb-4">सेवाएं • Services</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card cursor-pointer" onClick={() => navigate(feature.route)}>
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{feature.subtitle}</p>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-8">
        <h2 className="text-lg font-semibold mb-4">त्वरित सेवा • Quick Actions</h2>
        
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start h-14 text-left"
            onClick={() => navigate("/pest-detection")}
          >
            <Bug className="w-5 h-5 mr-3 text-warning-orange" />
            <div>
              <p className="font-medium">कीट की फोटो लें</p>
              <p className="text-xs text-muted-foreground">Take pest photo</p>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start h-14 text-left"
            onClick={() => navigate("/market-prices")}
          >
            <TrendingUp className="w-5 h-5 mr-3 text-harvest-gold" />
            <div>
              <p className="font-medium">आज के भाव देखें</p>
              <p className="text-xs text-muted-foreground">Check today's prices</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;