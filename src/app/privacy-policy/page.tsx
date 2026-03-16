import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to winveo.ai. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
    },
    {
      title: "Information We Collect",
      content: "We collect basic user information such as name, email address, and video creation preferences. This information is collected when you sign up, create a video, or interact with our services to ensure we provide the best possible experience tailored to your business needs."
    },
    {
      title: "How We Use Information",
      content: "We use your information to provide and maintain our service, notify you about changes, allow you to participate in interactive features, and provide customer support. Your video preferences help our AI generate relevant promotional content for your local business."
    },
    {
      title: "Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier."
    },
    {
      title: "Data Security",
      content: "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security."
    },
    {
      title: "Third-Party Services",
      content: "We may employ third-party companies and individuals to facilitate our service (e.g., Firebase for authentication and database management). These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
    },
    {
      title: "User Rights",
      content: "You have the right to access, update or delete the information we have on you. Whenever made possible, you can access, update or request deletion of your personal data directly within your account settings section."
    },
    {
      title: "Contact Information",
      content: "If you have any questions about this Privacy Policy, please contact us at support@winveo.ai."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: March 16, 2026</p>
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
