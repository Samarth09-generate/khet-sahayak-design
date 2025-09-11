import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Sprout, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SoilForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    cropType: "",
    location: "",
    soilType: "",
    lastCrop: "",
    irrigationType: "",
    area: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "मिट्टी की जांच सफल • Soil Analysis Complete",
      description: "आपकी मिट्टी की रिपोर्ट तैयार हो गई है • Your soil report is ready",
    });
    
    // Simulate analysis
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const cropTypes = [
    { value: "wheat", label: "गेहूं • Wheat" },
    { value: "rice", label: "धान • Rice" },
    { value: "cotton", label: "कपास • Cotton" },
    { value: "sugarcane", label: "गन्ना • Sugarcane" },
    { value: "maize", label: "मक्का • Maize" }
  ];

  const soilTypes = [
    { value: "clay", label: "चिकनी मिट्टी • Clay Soil" },
    { value: "sandy", label: "रेतीली मिट्टी • Sandy Soil" },
    { value: "loamy", label: "दोमट मिट्टी • Loamy Soil" },
    { value: "black", label: "काली मिट्टी • Black Soil" }
  ];

  const irrigationTypes = [
    { value: "drip", label: "ड्रिप सिंचाई • Drip Irrigation" },
    { value: "sprinkler", label: "छिड़काव • Sprinkler" },
    { value: "flood", label: "पारंपरिक • Flood Irrigation" },
    { value: "rain", label: "बारिश का पानी • Rain Water" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-crop-green/10">
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
          
          <div>
            <h1 className="font-bold text-lg">मिट्टी की जांच</h1>
            <p className="text-xs text-muted-foreground">Soil Analysis Form</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-crop-green to-soil-brown rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">फसल की जानकारी भरें</CardTitle>
            <p className="text-sm text-muted-foreground">Fill crop information</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  फसल का प्रकार • Crop Type *
                </label>
                <Select value={formData.cropType} onValueChange={(value) => setFormData({...formData, cropType: value})}>
                  <SelectTrigger className="farm-input">
                    <SelectValue placeholder="फसल चुनें • Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropTypes.map((crop) => (
                      <SelectItem key={crop.value} value={crop.value}>
                        {crop.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  स्थान • Location *
                </label>
                <Input
                  type="text"
                  placeholder="गांव/शहर का नाम • Village/City name"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="farm-input"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  मिट्टी का प्रकार • Soil Type
                </label>
                <Select value={formData.soilType} onValueChange={(value) => setFormData({...formData, soilType: value})}>
                  <SelectTrigger className="farm-input">
                    <SelectValue placeholder="मिट्टी चुनें • Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    {soilTypes.map((soil) => (
                      <SelectItem key={soil.value} value={soil.value}>
                        {soil.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  पिछली फसल • Previous Crop
                </label>
                <Input
                  type="text"
                  placeholder="पिछली बार क्या उगाया था • What was grown last time"
                  value={formData.lastCrop}
                  onChange={(e) => setFormData({...formData, lastCrop: e.target.value})}
                  className="farm-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  सिंचाई का तरीका • Irrigation Method
                </label>
                <Select value={formData.irrigationType} onValueChange={(value) => setFormData({...formData, irrigationType: value})}>
                  <SelectTrigger className="farm-input">
                    <SelectValue placeholder="सिंचाई का तरीका चुनें • Select irrigation method" />
                  </SelectTrigger>
                  <SelectContent>
                    {irrigationTypes.map((irrigation) => (
                      <SelectItem key={irrigation.value} value={irrigation.value}>
                        {irrigation.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  खेत का क्षेत्रफल • Field Area (एकड़ में • in acres)
                </label>
                <Input
                  type="number"
                  placeholder="एकड़ में क्षेत्रफल • Area in acres"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="farm-input"
                  min="0"
                  step="0.1"
                />
              </div>

              <Button 
                type="submit" 
                className="btn-farm btn-farm-primary w-full"
                disabled={!formData.cropType || !formData.location}
              >
                <Sprout className="w-5 h-5 mr-2" />
                जांच शुरू करें • Start Analysis
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SoilForm;