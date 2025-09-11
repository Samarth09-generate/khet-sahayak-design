import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, TrendingUp, TrendingDown, Search, MapPin, Calendar } from "lucide-react";

const MarketPrices = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const marketData = [
    {
      crop: "गेहूं • Wheat",
      price: "₹2,150",
      unit: "प्रति क्विंटल • per quintal",
      change: "+5.2%",
      trend: "up",
      market: "दिल्ली मंडी • Delhi Mandi"
    },
    {
      crop: "धान • Rice",
      price: "₹1,890",
      unit: "प्रति क्विंटल • per quintal", 
      change: "+2.1%",
      trend: "up",
      market: "लुधियाना मंडी • Ludhiana Mandi"
    },
    {
      crop: "कपास • Cotton",
      price: "₹5,750",
      unit: "प्रति क्विंटल • per quintal",
      change: "-1.8%",
      trend: "down",
      market: "अहमदाबाद मंडी • Ahmedabad Mandi"
    },
    {
      crop: "गन्ना • Sugarcane",
      price: "₹320",
      unit: "प्रति क्विंटल • per quintal",
      change: "+0.8%",
      trend: "up",
      market: "मेरठ मंडी • Meerut Mandi"
    },
    {
      crop: "मक्का • Maize",
      price: "₹1,650",
      unit: "प्रति क्विंटल • per quintal",
      change: "+3.4%",
      trend: "up",
      market: "इंदौर मंडी • Indore Mandi"
    },
    {
      crop: "सरसों • Mustard",
      price: "₹4,200",
      unit: "प्रति क्विंटल • per quintal",
      change: "-2.3%",
      trend: "down",
      market: "जयपुर मंडी • Jaipur Mandi"
    },
    {
      crop: "चना • Chickpea",
      price: "₹4,850",
      unit: "प्रति क्विंटल • per quintal",
      change: "+1.5%",
      trend: "up",
      market: "नागपुर मंडी • Nagpur Mandi"
    },
    {
      crop: "आलू • Potato",
      price: "₹1,200",
      unit: "प्रति क्विंटल • per quintal",
      change: "+4.2%",
      trend: "up",
      market: "आगरा मंडी • Agra Mandi"
    }
  ];

  const filteredData = marketData.filter(item =>
    item.crop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-harvest-gold/10">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="flex items-center p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="p-2 mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex-1">
            <h1 className="font-bold text-lg">बाजार दर</h1>
            <p className="text-xs text-muted-foreground">Market Prices</p>
          </div>
          
          <div className="text-right text-xs text-muted-foreground">
            <Calendar className="w-4 h-4 inline mr-1" />
            आज • Today
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="फसल खोजें • Search crops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 farm-input"
          />
        </div>

        {/* Market Summary */}
        <Card className="mb-6 bg-gradient-to-r from-harvest-gold/20 to-crop-green/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-harvest-gold" />
              आज का बाजार • Today's Market
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-crop-green">75%</p>
                <p className="text-xs text-muted-foreground">बढ़ते दाम • Rising Prices</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-harvest-gold">8</p>
                <p className="text-xs text-muted-foreground">मुख्य फसलें • Main Crops</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price List */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg mb-4">आज के भाव • Today's Prices</h2>
          
          {filteredData.map((item, index) => (
            <Card key={index} className="feature-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{item.crop}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {item.market}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold">{item.price}</span>
                      {item.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-crop-green" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.unit}</p>
                    <span className={`text-xs font-medium ${
                      item.trend === "up" ? "text-crop-green" : "text-destructive"
                    }`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Tips */}
        <Card className="mt-6 bg-muted/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">बाजार सुझाव • Market Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-crop-green rounded-full mt-2 flex-shrink-0"></span>
                गेहूं और मक्का की दरें बढ़ रही हैं • Wheat and maize prices are rising
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-harvest-gold rounded-full mt-2 flex-shrink-0"></span>
                कपास की कीमत में गिरावट • Cotton prices are declining
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 flex-shrink-0"></span>
                बेचने का अच्छा समय • Good time to sell crops
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center mt-6 text-xs text-muted-foreground">
          <p>अंतिम अपडेट • Last updated: आज सुबह 9:00 बजे • Today 9:00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;