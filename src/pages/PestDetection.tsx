import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Camera, Upload, Bug, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PestDetection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResults = [
        {
          name: "एफिड • Aphids",
          confidence: 89,
          severity: "मध्यम • Medium",
          treatment: "नीम का तेल का छिड़काव • Neem oil spray",
          status: "warning"
        },
        {
          name: "पत्ती में धब्बे • Leaf Spot",
          confidence: 76,
          severity: "कम • Low", 
          treatment: "कॉपर सल्फेट का प्रयोग • Use copper sulfate",
          status: "success"
        }
      ];
      
      setAnalysisResult(mockResults);
      setIsAnalyzing(false);
      
      toast({
        title: "कीट पहचान सफल • Pest Detection Complete",
        description: "आपकी फसल की जांच पूरी हो गई • Your crop analysis is ready",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-warning-orange/10">
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
            <h1 className="font-bold text-lg">कीट पहचान</h1>
            <p className="text-xs text-muted-foreground">Pest Detection</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-warning-orange to-crop-green rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Bug className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">फसल की फोटो लें</CardTitle>
            <p className="text-sm text-muted-foreground">Take crop photo for analysis</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Image Upload Section */}
            <div className="text-center">
              {selectedImage ? (
                <div className="space-y-4">
                  <img 
                    src={selectedImage} 
                    alt="Selected crop" 
                    className="w-full h-48 object-cover rounded-xl border-2 border-dashed border-muted"
                  />
                  <div className="flex gap-2">
                    <label className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button variant="outline" className="w-full" asChild>
                        <span>
                          <Upload className="w-4 h-4 mr-2" />
                          दूसरी फोटो • Change Photo
                        </span>
                      </Button>
                    </label>
                    
                    <Button 
                      onClick={analyzeImage}
                      disabled={isAnalyzing}
                      className="btn-farm btn-farm-primary flex-1"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          जांच हो रही है...
                        </>
                      ) : (
                        <>
                          <Bug className="w-4 h-4 mr-2" />
                          जांच करें • Analyze
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-muted rounded-xl p-8 bg-muted/20">
                    <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">फोटो लें या अपलोड करें</p>
                    <p className="text-xs text-muted-foreground">Take photo or upload</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <label className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button className="btn-farm btn-farm-primary w-full" asChild>
                        <span>
                          <Camera className="w-5 h-5 mr-2" />
                          कैमरा • Camera
                        </span>
                      </Button>
                    </label>
                    
                    <label className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button variant="outline" className="w-full" asChild>
                        <span>
                          <Upload className="w-5 h-5 mr-2" />
                          अपलोड • Upload
                        </span>
                      </Button>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Analysis Results */}
            {analysisResult && (
              <div className="space-y-4">
                <h3 className="font-semibold text-center">जांच परिणाम • Analysis Results</h3>
                
                {analysisResult.map((result: any, index: number) => (
                  <Card key={index} className="border-l-4 border-l-warning-orange">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{result.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            आत्मविश्वास • Confidence: {result.confidence}%
                          </p>
                        </div>
                        {result.status === "warning" ? (
                          <AlertTriangle className="w-5 h-5 text-warning-orange" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-crop-green" />
                        )}
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <p><strong>गंभीरता • Severity:</strong> {result.severity}</p>
                        <p><strong>उपचार • Treatment:</strong> {result.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/dashboard")}
                >
                  डैशबोर्ड पर वापस जाएं • Back to Dashboard
                </Button>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <p className="text-sm font-medium mb-2">बेहतर परिणाम के लिए • For better results:</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• साफ रोशनी में फोटो लें • Take photo in good light</li>
                <li>• पत्तियों के पास से फोटो लें • Take close-up of leaves</li>
                <li>• फोटो साफ और धुंधली न हो • Keep photo clear and focused</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PestDetection;