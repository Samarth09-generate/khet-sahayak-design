import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (phone.length >= 10) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-harvest-gold/10 to-crop-green/20 flex flex-col">
      {/* Header */}
      <div className="text-center pt-12 pb-8 px-6">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-crop-green to-harvest-gold rounded-2xl flex items-center justify-center mb-4">
            <Sprout className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Smart Crop Advisory</h1>
          <p className="text-lg text-muted-foreground">किसानों के लिए स्मार्ट सलाह • Smart advice for farmers</p>
        </div>
        
        {/* Features Preview */}
        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto mb-8">
          <div className="flex items-center gap-3 bg-card/80 rounded-xl p-4">
            <div className="w-10 h-10 bg-crop-green/20 rounded-lg flex items-center justify-center">
              <Sprout className="w-5 h-5 text-crop-green" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">मिट्टी की जांच</p>
              <p className="text-xs text-muted-foreground">Soil Analysis</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card/80 rounded-xl p-4">
            <div className="w-10 h-10 bg-sky-blue/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-sky-blue" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">कीट पहचान</p>
              <p className="text-xs text-muted-foreground">Pest Detection</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card/80 rounded-xl p-4">
            <div className="w-10 h-10 bg-harvest-gold/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-harvest-gold" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">बाजार दर</p>
              <p className="text-xs text-muted-foreground">Market Prices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="flex-1 px-6 pb-8">
        <Card className="max-w-sm mx-auto">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">शुरू करें • Get Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">मोबाइल नंबर • Mobile Number</label>
              <Input
                type="tel"
                placeholder="अपना मोबाइल नंबर डालें"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="farm-input text-center"
                maxLength={10}
              />
            </div>
            
            <Button 
              onClick={handleLogin}
              disabled={phone.length < 10}
              className="btn-farm btn-farm-primary w-full"
            >
              <Sprout className="w-5 h-5 mr-2" />
              प्रवेश करें • Enter
            </Button>
            
            <p className="text-xs text-center text-muted-foreground px-4">
              आपकी जानकारी सुरक्षित है • Your information is secure
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;