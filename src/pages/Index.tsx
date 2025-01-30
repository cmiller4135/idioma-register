import SignupForm from "@/components/SignupForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-custom-blue to-custom-blue/90 p-6">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fadeIn">
        <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-custom-blue mb-3">Idioma-AI</h1>
          <h3 className="text-3xl font-bold text-custom-blue mb-3">Create Your Account</h3>
          <p className="text-custom-blue/70">Join us today and get started receiving messages</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Index;