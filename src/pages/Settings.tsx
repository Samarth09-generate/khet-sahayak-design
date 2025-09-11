import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { 
  ArrowLeft, 
  Settings as SettingsIcon, 
  Languages, 
  Volume2, 
  Bell, 
  User,
  HelpCircle,
  LogOut,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState("hindi");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    toast({
      title: newLanguage === "hindi" 
        ? "भाषा बदल गई • Language Changed" 
        : "Language Changed • भाषा बदल गई",
      description: newLanguage === "hindi"
        ? "हिंदी भाषा सेट की गई • Hindi language set"
        : "English language set • अंग्रेजी भाषा सेट की गई",
    });
  };

  const handleVoiceToggle = () => {
    setVoiceEnabled(!voiceEnabled);
    toast({
      title: voiceEnabled 
        ? "आवाज बंद की गई • Voice Disabled" 
        : "आवाज चालू की गई • Voice Enabled",
      description: voiceEnabled
        ? "आवाज सुविधा बंद की गई • Voice feature disabled"
        : "आवाज सुविधा चालू की गई • Voice feature enabled",
    });
  };

  const settingsItems = [
    {
      title: "प्रोफाइल • Profile",
      icon: User,
      action: () => {},
      description: "व्यक्तिगत जानकारी • Personal information"
    },
    {
      title: "सूचनाएं • Notifications", 
      icon: Bell,
      action: () => setNotifications(!notifications),
      description: "पुश सूचनाएं • Push notifications",
      toggle: true,
      value: notifications
    },
    {
      title: "सहायता • Help",
      icon: HelpCircle,
      action: () => {},
      description: "मदद और सहायता • Help and support"
    }
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
            <h1 className="font-bold text-lg">सेटिंग्स</h1>
            <p className="text-xs text-muted-foreground">Settings</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* User Profile Section */}
        <Card className="mb-6 bg-gradient-to-r from-crop-green/20 to-harvest-gold/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-crop-green to-harvest-gold rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">राज किसान</h3>
                <p className="text-sm text-muted-foreground">Raj Farmer</p>
                <p className="text-xs text-muted-foreground">+91 9876543210</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center">
              <Languages className="w-5 h-5 mr-2 text-crop-green" />
              भाषा • Language
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Button
                variant={language === "hindi" ? "default" : "outline"}
                onClick={() => handleLanguageChange("hindi")}
                className="flex-1"
              >
                <Globe className="w-4 h-4 mr-2" />
                हिंदी
              </Button>
              <Button
                variant={language === "english" ? "default" : "outline"}
                onClick={() => handleLanguageChange("english")}
                className="flex-1"
              >
                <Globe className="w-4 h-4 mr-2" />
                English
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Voice Settings */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center">
              <Volume2 className="w-5 h-5 mr-2 text-sky-blue" />
              आवाज सुविधा • Voice Feature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">आवाज सहायता • Voice Assistant</p>
                <p className="text-sm text-muted-foreground">
                  आवाज में सलाह सुने • Listen to advice in voice
                </p>
              </div>
              <Switch
                checked={voiceEnabled}
                onCheckedChange={handleVoiceToggle}
              />
            </div>
            
            {voiceEnabled && (
              <div className="mt-4 pt-4 border-t">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "आवाज परीक्षण • Voice Test",
                      description: "आवाज सुविधा सही तरीके से काम कर रही है • Voice feature is working properly",
                    });
                  }}
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  आवाज परीक्षण • Test Voice
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Other Settings */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center">
              <SettingsIcon className="w-5 h-5 mr-2 text-harvest-gold" />
              अन्य सेटिंग्स • Other Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {settingsItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                
                {item.toggle ? (
                  <Switch
                    checked={item.value}
                    onCheckedChange={item.action}
                  />
                ) : (
                  <Button variant="ghost" size="sm" onClick={item.action}>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Logout */}
        <Card>
          <CardContent className="p-4">
            <Button 
              variant="outline" 
              className="w-full text-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={() => {
                toast({
                  title: "लॉग आउट • Logged Out",
                  description: "आप सफलतापूर्वक लॉग आउट हो गए • You have been logged out successfully",
                });
                setTimeout(() => navigate("/"), 1500);
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              लॉग आउट • Logout
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="text-center mt-8 text-xs text-muted-foreground">
          <p>Smart Crop Advisory v1.0</p>
          <p>किसानों के लिए बनाया गया • Made for farmers</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
