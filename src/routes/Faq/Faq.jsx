import React from "react";
import transition from "../../transition";
import Navigation from "../navigation/navigation.component";
import CollapsibleQuestions from "./CollapsibleQuestions";
import { useLocation } from "react-router-dom";

const Faq = () => {
  const faqs = [
    {
      question: "Your TDL add-ons comes with Lifetime validity or Yearly Subscriptions?",
      answer:
        "All our TDL add-ons comes with truly Lifetime validity and updates",
    },
    {
      question: "How do I purchase & get the add-ons?",
      answer:
        "It’s very simple! Simply add the required module to the cart > proceed for checkout > enter your complete billing information > place order > pay online! On successful completion of payment, you will instantly get download link on the screen and well as in your email.",
    },
    {
      question: "Can i get demo before purchase?",
      answer:
        "Yes, we have placed demo videos under each modules to see how exactly it works before you purchase. We do not provide one on one demo for ready to use TDL add-ons.",
    },
    {
      question: "Will it work on Tally.ERP9 or TallyPrime?",
      answer:
        "All our TDL add-ons are compatible with both Tally versions i.e. Tally.ERP9 and TallyPrime.",
    },
    {
      question: "How do I install TDL add-ons in my Tally?",
      answer:
        "It really very simple to configure TDL add-ons in Tally, please refer below quick video and i am sure you will be able to do it.",
    },
    {
      question:
        "Will I get GST Invoice for my purchase?",
      answer:
        "Yes, you will get system generated GST invoice in your email ID immediately on successful purchase, if not found check Spam / Junk folder once.",
    },
    {
      question:
        "What if your TDL add-on doesn't work in my Tally?",
      answer:
        "It works on all Tally but in case if our TDL add-on is conflict with your existing TDL’s then you may either ask your existing TDL provider to correct it or simply place refund request with us by providing valid error screenshots.",
    },
    {
      question: "Will it work on Tally multi user license?",
      answer:
        "Yes, our add-ons works on both Tally Single User and Multi User depending upon your Tally Serial number and the price will remain same for both.",
    },
    {
      question:
        "Can I use add-ons on multiple Tally licenses?",
      answer:
        "If you have multiple Tally licenses, you will have to purchase it separately",
    },
    {
      question:
        "Will it work on multiple companies in same Tally?",
      answer:
        "Yes, all our TDL add-ons works with any of your companies running on the same Tally license. If you have separate Tally licenses, you will have to purchase it separately. ",
    },
    {
      question:
        "Will it impacts our Tally data?",
      answer:
        "No, these Tally add-ons are built securely on Tally definition language only, so it won’t impact your Tally data. However we always recommend users to take Tally backup before using any customization.  ",
    },
    {
      question:
        "How will I get License Key for TCP activation?",
      answer:
        "If you have multiple Tally licenses, you will have to purchase it separately",
    },
    {
      question:
        "How can I use same TCP & License Key in multiple companies?",
      answer:
        "By default our TDL License key is permissible to use for one company only but if you have multiple companies running on the same Tally serial number then you may request for license extension request by reverting to the same purchase email. You can even re-use or migrate the same license key by De-Activating the same key.",
    },
    {
      question:
        "How much time it will take to receive the TDL after payment?",
      answer:
        "You will receive TDL instantly along with Activation License Key in your email ID as well as the same will be found under your Account section. ",
    },
    // Add more FAQs as needed
  ];
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-white pt-12 flex flex-col items-center">
        <span className="font-normal text-xl text-zinc-500 w-full max-w-6xl mx-auto px-4">
          01
        </span>

        <h1 className="w-full max-w-6xl mx-auto px-4 text-[2.7rem] leading-[1.2] font-bold text-zinc-800 relative">
          Frequently Asked Questions
        </h1>
        <CollapsibleQuestions faqs={faqs} />
      </div>
      <hr />
    </>
  );
};

export default transition(Faq, "Faq");
