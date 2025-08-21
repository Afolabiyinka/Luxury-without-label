import { Accordion, Button } from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";

export default function FAQs() {
  return (
    <div className="min-h-screen py-6 px-4 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r  bg-clip-text  mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-black rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find answers to the most common questions about our products,
            shipping, and policies.
          </p>
        </div>

        <div className="shadow-xl rounded-2xl overflow-hidden ">
          <Accordion
            defaultValue="shipping"
            className="border-none transition-transform  duration-1000 group-[transition-transform]:"
            color="primary"
            variant="gradient"
          >
            <Accordion.Item
              value="shipping"
              className="border-b border-gray-200"
            >
              <Accordion.Trigger className="px-6 py-5 flex justify-between items-center w-full hover:bg-gray-50 transition-all duration-200 group">
                <span className="text-lg font-medium text-gray-800">
                  What are the shipping options available?
                </span>
                <ChevronDown className="h-5 w-5  transition-transform duration-300 ease-in-out group-data-[open=true]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-5 bg-gradient-to-r transition-transform duration-700 ease-in-out group-data-[open=true]:ease-in">
                <p className="text-gray-600 leading-relaxed">
                  We offer standard and express shipping options. Standard
                  shipping typically takes 3-5 business days, while express
                  shipping delivers within 1-2 business days. Delivery times
                  vary by location, and all orders are trackable once shipped
                  through your account dashboard or the confirmation email.
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="sizing" className="border-b border-gray-200">
              <Accordion.Trigger className="px-6 py-5 flex justify-between items-center w-full hover:bg-gray-50 transition-all duration-200 group">
                <span className="text-lg font-medium text-gray-800">
                  How do I choose the right size?
                </span>
                <ChevronDown className="h-5 w-5  transition-transform duration-300 ease-in-out group-data-[open=true]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-5 ">
                <p className="text-gray-600 leading-relaxed">
                  Each product page includes a detailed size chart to help you
                  pick the perfect fit. We recommend measuring yourself and
                  comparing with our size guide. If you're in between sizes, we
                  recommend sizing up for comfort. Our customer service team is
                  also available to help with any specific sizing questions.
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="returns"
              className="border-b border-gray-200"
            >
              <Accordion.Trigger className="px-6 py-5 flex justify-between items-center w-full hover:bg-gray-50 transition-all duration-200 group">
                <span className="text-lg font-medium text-gray-800">
                  What is your return policy?
                </span>
                <ChevronDown className="h-5 w-5  transition-transform duration-300 ease-in-out group-data-[open=true]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-5 bg-gradient-to-r ">
                <p className="text-gray-600 leading-relaxed">
                  You can return any item within 14 days of delivery. Items must
                  be unworn, unwashed, and with original tags intact. To
                  initiate a return, simply log into your account, go to your
                  orders, and select the items you wish to return. We'll provide
                  a prepaid shipping label, and your refund will be processed
                  within 5-7 business days after we receive the returned items.
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="payment"
              className="border-b border-gray-200"
            >
              <Accordion.Trigger className="px-6 py-5 flex justify-between items-center w-full hover:bg-gray-50 transition-all duration-200 group">
                <span className="text-lg font-medium text-gray-800">
                  What payment methods do you accept?
                </span>
                <ChevronDown className="h-5 w-5  transition-transform duration-300 ease-in-out group-data-[open=true]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-5 bg-gradient-to-r">
                <p className="text-gray-600 leading-relaxed">
                  We accept all major credit cards (Visa, Mastercard, American
                  Express), PayPal, Apple Pay, and Google Pay. All payments are
                  securely processed and encrypted. For certain regions, we also
                  offer buy-now-pay-later options through Klarna and Afterpay.
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="international">
              <Accordion.Trigger className="px-6 py-5 flex justify-between items-center w-full hover:bg-gray-50 transition-all duration-200 group">
                <span className="text-lg font-medium text-gray-800">
                  Do you ship internationally?
                </span>
                <ChevronDown className="h-5 w-5  transition-transform duration-300 ease-in-out group-data-[open=true]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-5 bg-gradient-to-r from-indigo-50/30 to-purple-50/30">
                <p className="text-gray-600 leading-relaxed">
                  Yes, we ship to over 100 countries worldwide. International
                  shipping typically takes 7-14 business days, depending on the
                  destination and customs processing. Please note that
                  additional customs duties and taxes may apply depending on
                  your country's import regulations.
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <Button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
