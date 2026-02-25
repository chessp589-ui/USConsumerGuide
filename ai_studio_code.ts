import { Shield, Mail, MapPin, Monitor, Smartphone, Apple } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">US Consumer Program Guide</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="home" className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Understanding Digital Program Eligibility in the United States</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Learn how online programs verify access and how to check your eligibility.</p>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">Online programs and digital offers often use email or ZIP code verification and regional testing to determine participation status. This guide explains the process.</p>
          <div className="mt-8">
            <a href="#devices" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Select Your Device Below to Check Current Availability
            </a>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mt-20 py-16 bg-white rounded-2xl shadow-md">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900">How Program Availability and Verification Works</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Regional Availability</h3>
                <p className="mt-2 text-gray-600">Access to certain programs can depend on your geographic location or ZIP code, as some offers are tested in specific regions.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Email or ZIP Verification</h3>
                <p className="mt-2 text-gray-600">Programs often require a valid email address or ZIP code to confirm eligibility and send participation details.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">What to Expect</h3>
                <p className="mt-2 text-gray-600">When checking eligibility, you will be directed to a third-party offer page where you may need to provide information to proceed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Device Options Section */}
        <section id="devices" className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Check Availability for Your Device</h2>
          <div className="mt-10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="#" className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <Monitor className="h-10 w-10 mx-auto text-gray-400 group-hover:text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-800">Desktop Users</h3>
              <p className="mt-2 text-sm bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg group-hover:bg-blue-700">Check Eligibility for Desktop</p>
            </a>
            <a href="#" className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <Smartphone className="h-10 w-10 mx-auto text-gray-400 group-hover:text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-800">Android Users</h3>
              <p className="mt-2 text-sm bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg group-hover:bg-blue-700">Check Eligibility on Android</p>
            </a>
            <a href="#" className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <Apple className="h-10 w-10 mx-auto text-gray-400 group-hover:text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-800">iOS Users</h3>
              <p className="mt-2 text-sm bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg group-hover:bg-blue-700">Check Eligibility on iOS</p>
            </a>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section id="trust-safety" className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">About This Guide</h2>
          <p className="mt-4 text-gray-600">This website provides informational guidance on how to navigate online program eligibility. We are not directly affiliated with the programs or offers listed. Participation requirements, terms, and availability are determined by the third-party program administrators and can vary by location and other factors.</p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">What is eligibility verification?</h3>
              <p className="mt-2 text-gray-600">Eligibility verification is the process used by online programs to confirm that a user meets specific criteria, such as location or demographic information, before granting access to a digital offer or service.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Why do offers differ by device?</h3>
              <p className="mt-2 text-gray-600">Offers can vary between desktop, Android, and iOS devices because program administrators may have different goals, user-interfaces, or technical requirements for each platform.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Is my data shared?</h3>
              <p className="mt-2 text-gray-600">This website does not collect personal information. When you click to check eligibility, you are taken to a third-party website with its own privacy policy. We encourage you to review their policy before providing any information.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-20 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>&copy; 2024 US Consumer Program Guide. All Rights Reserved.</p>
          <nav className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}