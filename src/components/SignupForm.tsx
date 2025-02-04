import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignupForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    smsPhone: "",
    whatsappPhone: "",
    password: "",
    category: "",
    termsAccepted: false,
    consentGiven: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically handle the signup logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast({
        title: "Success!",
        description: "Your account has been created successfully.",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-appear space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-custom-blue">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          className="input-focus-ring bg-white/50 border-custom-blue/20"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-custom-blue">Company Name (Optional)</Label>
        <Input
          id="companyName"
          name="companyName"
          type="text"
          className="input-focus-ring bg-white/50 border-custom-blue/20"
          value={formData.companyName}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="smsPhone" className="text-custom-blue">SMS Phone Number</Label>
        <Input
          id="smsPhone"
          name="smsPhone"
          type="tel"
          placeholder="x xxx xxx xxxx"
          className="input-focus-ring bg-white/50 border-custom-blue/20"
          value={formData.smsPhone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsappPhone" className="text-custom-blue">WhatsApp Phone Number (Optional)</Label>
        <Input
          id="whatsappPhone"
          name="whatsappPhone"
          type="tel"
          placeholder="x xxx xxx xxxx"
          className="input-focus-ring bg-white/50 border-custom-blue/20"
          value={formData.whatsappPhone}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-custom-blue">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          className="input-focus-ring bg-white/50 border-custom-blue/20"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* <div className="space-y-2">
        <Label htmlFor="category" className="text-custom-blue">Category (Optional)</Label>
        <Input
          id="category"
          name="category"
          type="text"
          className="input-focus-ring bg-white/50 border-custom-blue/20"
          value={formData.category}
          onChange={handleInputChange}
        />
      </div> */}

      <div className="space-y-4">
        {/* <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.termsAccepted}
            onCheckedChange={() => handleCheckboxChange("termsAccepted")}
            className="checkbox-custom"
          />
          <Label htmlFor="terms" className="text-sm text-custom-blue/80">
            I agree to these{" "}
            <a href="#" className="text-custom-red hover:underline">
              Terms and Conditions
            </a>
            .
          </Label>
        </div> */}

        <div className="flex items-center space-x-2">
          <Checkbox
            id="consent"
            checked={formData.consentGiven}
            onCheckedChange={() => handleCheckboxChange("consentGiven")}
            className="checkbox-custom"
          />
          <Label htmlFor="consent" className="text-sm text-custom-blue/80">
            By checking the checkbox, I consent to receive text messages.
          </Label>
         
        </div>
        <h3>By signing up, you agree to receive text messages from us. Message and data rates may apply. Reply STOP to unsubscribe.</h3>
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
        disabled={isLoading || !formData.termsAccepted || !formData.consentGiven}
      >
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}