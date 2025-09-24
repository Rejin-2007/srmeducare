import React, { useState } from "react";

const Terms = () => {
  const [language, setLanguage] = useState("english");

  const content = {
    english: {
      title: "OUR TERMS AND CONDITIONS",
      sections: [
        {
          title: "Classes and Doubt Clarification",
          content: "Daily classes are provided at 7:00 PM as video/audio recordings via Telegram. Doubts arising during self-study within the next 24 hours should be clarified personally through WhatsApp at that time."
        },
        {
          title: "Tests and Corrections",
          content: "After attempting the daily test provided via a link, immediately send a screenshot of the marks. The imposition for mistakes should be submitted within one week."
        },
        {
          title: "Mandatory Responses",
          content: "To ascertain compliance with points 1 and 2, it is mandatory to respond to all messages and calls given daily."
        },
        {
          title: "Student's Responsibility",
          content: "Not watching the provided classes or not utilizing the service is solely the student's fault. The institution should not incur any financial liability due to this."
        },
        {
          title: "Payment Schedule",
          content: "Payments must be made on the dates specified in the payment agreement."
        },
        {
          title: "Book Cost and Penalty for Non-Completion of Payment",
          content: "Since the books provided free on the assurance of timely course payment cannot be taken back later, if for any reason the payment cannot be completed, the total cost of the books must be paid compulsorily within the first three weeks. Additionally, a fine of 1500 rupees must be paid."
        },
        {
          title: "Legal Action",
          content: "Those who violate the terms will be subject to legal action."
        }
      ]
    },
    malayalam: {
      title: "നമ്മുടെ നിബന്ധനകളും വ്യവസ്ഥകളും",
      sections: [
        {
          title: "ക്ലാസുകളും സംശയനിവാരണവും",
          content: "എല്ലാ ദിവസവും വൈകുന്നേരം 7:00 മണിക്ക് വീഡിയോ/ഓഡിയോ റെക്കോർഡ്‌സ് ആയിട്ടാണ് ക്ലാസുകൾ ടെലഗ്രാം വഴി നൽകുന്നത്. പിന്നീട് വരുന്ന 24 മണിക്കൂറുകൾക്കുള്ളിൽ സ്വന്തം ഇഷ്ടപ്രകാരം പഠിക്കുമ്പോൾ ഉണ്ടാകുന്ന സംശയങ്ങൾ അന്നേരം തന്നെ വാട്‌സ്ആപ്പ് വഴി പേഴ്‌സണലായി ചോദിച്ച് മനസ്സിലാക്കേണ്ടതാണ്."
        },
        {
          title: "ടെസ്റ്റുകളും തെറ്റുതിരുത്തലുകളും",
          content: "എല്ലാ ദിവസവും ലിങ്ക് വഴി തരുന്ന ടെസ്റ്റ് ചെയ്താൽ ഉടൻ മാർക്കിന്റെ സ്ക്രീൻഷോട്ട് അയയ്ക്കുക. തെറ്റുകളുടെ ഇമ്പോസിഷൻ ഒരാഴ്‌ചക്കുള്ളിൽ അയയ്ക്കുക."
        },
        {
          title: "നിർബന്ധിത മറുപടികൾ",
          content: "മുകളിൽ പറഞ്ഞ രണ്ട് കാര്യങ്ങളും കൃത്യമായി ചെയ്യുന്നുണ്ടോ ഇല്ലയോ എന്നറിയാൻ എല്ലാ ദിവസവും നൽകുന്ന മെസ്സജേകൾക്കും കോളുകൾക്കും നിർബന്ധമായും മറുപടി നൽകേണ്ടതാണ്."
        },
        {
          title: "വിദ്യാർത്ഥിയുടെ ഉത്തരവാദിത്തം",
          content: "തരുന്ന ക്ലാസുകൾ കാണാതിരിക്കുന്നതും സർവീസ് ഉപയോഗിക്കാതിരിക്കുന്നതും സ്റ്റുഡന്റിന്റെ മാത്രം തെറ്റാണ്. അതിന്റെ പേരിൽ സ്ഥാപനത്തിന് സാമ്പത്തിക ബാധ്യത ഉണ്ടാക്കാൻ പാടില്ല."
        },
        {
          title: "പേയ്‌മെന്റ് ഷെഡ്യൂൾ",
          content: "പേയ്‌മെന്റ് എഗ്രിമെന്റിലുള്ള തീയതികളിൽ തന്നെ ചെയ്യേണ്ടതാണ്."
        },
        {
          title: "പുസ്തകങ്ങളുടെ വിലയും പിഴയും (പേയ്‌മെന്റ് പൂർത്തിയാക്കാത്ത പക്ഷം)",
          content: "കോഴ്‌സിന്റെ പേയ്‌മെന്റ് കൃത്യമായി അടയ്ക്കാം എന്ന ഉറപ്പിന്മേൽ സൗജന്യമായി തന്ന പുസ്തകങ്ങൾ പിന്നീട് തിരിച്ചെടുക്കാൻ പറ്റാത്തതിനാൽ എന്തെങ്കിലും കാരണവശാൽ പേയ്‌മെന്റ് പൂർത്തിയാക്കാൻ സാധിച്ചില്ലെങ്കിൽ പുസ്തകങ്ങളുടെ മൊത്തം തുക ആദ്യത്തെ മൂന്നാഴ്ചകൾ കൊണ്ട് നിർബന്ധമായും അടയ്‌ക്കേണ്ടതാണ്. കൂടാതെ 1500 രൂപ പിഴ അടയ്‌ക്കേണ്ടതുമാണ്."
        },
        {
          title: "നിയമപരമായ നടപടികൾ",
          content: "വ്യവസ്ഥകൾ തെറ്റിക്കുന്നവർക്ക് നിയമപരമായ നടപടികൾക്ക് വിധേയരാകേണ്ടി വരും."
        },
        
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setLanguage("english")}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                language === "english"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("malayalam")}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                language === "malayalam"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              മലയാളം
            </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          {currentContent.title}
        </h1>

        {/* Terms Sections */}
        <div className="space-y-6">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Terms;