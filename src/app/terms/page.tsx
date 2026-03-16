import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using winveo.ai, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "Description of Service",
      content: "winveo.ai provides an AI-powered platform for local businesses (such as plumbers, electricians, and sliding window shops) to create promotional video advertisements. We offer templates, AI generation tools, and hosting for these videos."
    },
    {
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account and password. You must not upload any content that is illegal, copyrighted without permission, or violates any laws. You agree to use the service only for lawful purposes."
    },
    {
      title: "Content Usage",
      content: "While you retain ownership of your business data, by using winveo.ai, you grant us a license to use, host, and display the generated videos as part of providing the service to you."
    },
    {
      title: "Payment and Pricing",
      content: "Pricing for our packs (Single Video, Starter Pack, Pro Plan) is listed on our pricing page. All payments are non-refundable unless stated otherwise. We reserve the right to change our pricing with prior notice."
    },
    {
      title: "Limitation of Liability",
      content: "winveo.ai shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly."
    },
    {
      title: "Service Availability",
      content: "We strive to provide 24/7 availability of our services but do not guarantee uninterrupted access. Maintenance and updates may occasionally limit availability."
    },
    {
      title: "Modifications to Terms",
      content: "We reserve the right to modify these terms at any time. We will notify users of any significant changes via email or through the platform."
    },
    {
      title: "Contact Information",
      content: "For any questions regarding these terms, please contact us at support@winveo.ai."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500">Effective Date: March 16, 2026</p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg pl-11">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
