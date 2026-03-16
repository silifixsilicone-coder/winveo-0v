import { CreditCard, CheckCircle2, History } from 'lucide-react';

export default function BillingPage() {
  const plans = [
    { title: 'Single Video', price: '₹500', credits: 1, popular: false },
    { title: 'Starter Pack', price: '₹2000', credits: 5, popular: true },
    { title: 'Pro Plan', price: '₹3500', credits: 10, popular: false }
  ];

  const history = [
    { id: 'INV-001', date: 'Oct 01, 2024', plan: 'Starter Pack', amount: '₹2000', status: 'Paid' },
    { id: 'INV-002', date: 'Sep 15, 2024', plan: 'Single Video', amount: '₹500', status: 'Paid' }
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Billing & Subscription</h1>
        <p className="text-gray-500">Manage your credits, view current plan, and billing history.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-brand-orange rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-brand-orange/20">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[150%] bg-orange-400/50 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-2 rounded-xl">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold">Current Status</h2>
            </div>
            
            <p className="text-orange-50 mb-1">Active Plan</p>
            <h3 className="text-3xl font-extrabold mb-6">Starter Pack</h3>
            
            <div className="flex items-end justify-between border-t border-orange-400/50 pt-6">
              <div>
                <p className="text-orange-50 mb-1">Remaining Credits</p>
                <p className="text-4xl font-extrabold">8 <span className="text-lg font-medium text-orange-50">videos</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need more credits?</h3>
          <p className="text-gray-500 mb-6 line-clamp-2">Top up your account by purchasing additional video generation credits. Unused credits never expire.</p>
          <button className="bg-gray-900 text-white w-full py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg">
            View Pricing Plans
          </button>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Purchase Credits</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white rounded-3xl p-6 border ${plan.popular ? 'border-brand-orange shadow-xl shadow-brand-orange/10' : 'border-gray-200 shadow-sm'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h4 className="text-lg font-medium text-gray-500 mb-2">{plan.title}</h4>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                  <span className="text-sm font-medium text-gray-800">{plan.credits} Video Generation{plan.credits > 1 ? 's' : ''}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                  <span className="text-sm text-gray-600">No watermark</span>
                </li>
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition text-sm ${plan.popular ? 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/20' : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100'}`}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <History className="h-5 w-5 text-gray-400" />
          Payment History
        </h3>
        
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                <th className="py-4 px-6 font-medium text-gray-600">Invoice</th>
                <th className="py-4 px-6 font-medium text-gray-600">Date</th>
                <th className="py-4 px-6 font-medium text-gray-600">Plan</th>
                <th className="py-4 px-6 font-medium text-gray-600 relative">Amount</th>
                <th className="py-4 px-6 font-medium text-gray-600 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{item.date}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-medium">{item.plan}</td>
                  <td className="py-4 px-6 text-sm text-gray-900 font-bold">{item.amount}</td>
                  <td className="py-4 px-6 text-sm text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
