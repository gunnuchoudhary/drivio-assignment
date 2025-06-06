import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is the eligibility to apply for a two-wheeler loan?',
      answer:
        'To apply for a two-wheeler loan, you typically need to be between 18-65 years old, have a stable income source, and meet the minimum income criteria set by the lender.',
    },
    {
      id: 2,
      question: 'What kind of tenures are available for repayment of a two-wheeler loan?',
      answer:
        'Two-wheeler loan tenures typically range from 12 months to 60 months, depending on the lender and loan amount. You can choose a tenure that suits your repayment capacity.',
    },
    {
      id: 3,
      question: 'What is the maximum amount you can get when you apply for a two-wheeler loan?',
      answer:
        'The maximum loan amount depends on various factors including your income, credit score, and the cost of the vehicle. Generally, you can get up to 90-95% of the vehicle cost as a loan.',
    },
    {
      id: 4,
      question: 'What are the different types of interest Rates available in the market?',
      answer:
        'Two-wheeler loans typically offer fixed interest rates, which remain constant throughout the loan tenure. Some lenders may also offer floating rates that can change based on market conditions.',
    },
    {
      id: 5,
      question: 'What is an EMI Bounce and what are the charges levied?',
      answer:
        'EMI bounce occurs when your monthly installment payment fails due to insufficient funds. This typically incurs penalty charges ranging from ₹300-₹750 per bounce, depending on the lender.',
    },
    {
      id: 6,
      question: 'Why is Credit score important when applying for a loan?',
      answer:
        'Credit score reflects your creditworthiness and repayment history. A good credit score (750+) helps you get better interest rates, higher loan amounts, and faster approval.',
    },
    {
      id: 7,
      question: 'What is the process to apply for a loan?',
      answer:
        'The loan application process involves submitting required documents, filling the application form, verification by the lender, approval, and finally loan disbursal upon vehicle purchase.',
    },
    {
      id: 8,
      question: 'What is an EMI calculator?',
      answer:
        'An EMI calculator is a tool that helps you calculate your monthly installment amount based on loan amount, interest rate, and tenure. It helps you plan your finances better.',
    },
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="bg-white py-16">
      <div className="w-full px-4">
        <div className="text-center mb-5">
          <h2 className=" text-xl lg:text-2xl font-bold text-gray-800 ">
            Frequently Asked <i className="text-green-600">Questions</i>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-5 text-sm lg:text-lg">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-100 rounded-2xl overflow-hidden">
              <button
                value={faq.id}
                onClick={(e) => {
                  toggleFAQ(faq.id);
                }}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-0"
              >
                <h3 className=" font-bold text-gray-800 pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === faq.id ? 'transform rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {openFAQ === faq.id && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
