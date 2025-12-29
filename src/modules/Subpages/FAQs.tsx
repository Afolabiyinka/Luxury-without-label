import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQs() {
  return (
    <div className="min-h-screen py-6 px-4 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r  bg-clip-text  mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-black rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find answers to the most common questions about our products,
            shipping, and policies.
          </p>
        </div>

        <div className="">
          <Accordion className="w-full">
            <AccordionItem value="shipping">
              <AccordionTrigger>
                <span className="text-lg font-medium text-gray-800">
                  What are the shipping options available?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 leading-relaxed">
                  We offer standard and express shipping options. Standard
                  shipping typically takes 3-5 business days, while express
                  shipping delivers within 1-2 business days. Delivery times
                  vary by location, and all orders are trackable once shipped
                  through your account dashboard or the confirmation email.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sizing">
              <AccordionTrigger>
                <span className="text-lg font-medium text-gray-800">
                  How do I choose the right size?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-5 ">
                <p className="text-gray-600 leading-relaxed">
                  Each product page includes a detailed size chart to help you
                  pick the perfect fit. We recommend measuring yourself and
                  comparing with our size guide. If you're in between sizes, we
                  recommend sizing up for comfort. Our customer service team is
                  also available to help with any specific sizing questions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns">
              <AccordionTrigger>
                <span className="text-lg font-medium text-gray-800">
                  What is your return policy?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 leading-relaxed">
                  You can return any item within 14 days of delivery. Items must
                  be unworn, unwashed, and with original tags intact. To
                  initiate a return, simply log into your account, go to your
                  orders, and select the items you wish to return. We'll provide
                  a prepaid shipping label, and your refund will be processed
                  within 5-7 business days after we receive the returned items.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment">
              <AccordionTrigger>
                <span className="text-lg font-medium text-gray-800">
                  What payment methods do you accept?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 leading-relaxed">
                  We accept all major credit cards (Visa, Mastercard, American
                  Express), PayPal, Apple Pay, and Google Pay. All payments are
                  securely processed and encrypted. For certain regions, we also
                  offer buy-now-pay-later options through Klarna and Afterpay.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="international">
              <AccordionTrigger>
                <span className="text-lg font-medium text-gray-800">
                  Do you ship internationally?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we ship to over 100 countries worldwide. International
                  shipping typically takes 7-14 business days, depending on the
                  destination and customs processing. Please note that
                  additional customs duties and taxes may apply depending on
                  your country's import regulations.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <Button size={`lg`}>Contact Support</Button>
        </div>
      </div>
    </div>
  );
}
