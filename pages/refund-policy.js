import HeadingCard from '@/components/card/HeadingCard';
import Heading from '@/components/commons/Heading';
import Paragraph from '@/components/commons/Paragraph';

export default function AboutUs() {
  return (
    <>
      <HeadingCard heading={'Refund Policy'} />
      <div className="">
        <img
          src="./refund_policy.webp"
          alt="Your Image"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-16  text-justify">
        <main className="flex flex-col gap-10">
          <div>
            <Heading title={'Subscription Terms & Conditions'} />
            <Paragraph para={para.para1} />
          </div>
          <div>
            <Heading title={'What Makes EasyHai Online Different?'} />
            <Paragraph para={para.para2} />
          </div>
          <div>
            <Heading title={'Why Choose EasyHai Online?'} />
            <Paragraph para={para.para3} />
          </div>
          <div>
            <Heading title="Our Vision" />
            <Paragraph para={para.para4} />
          </div>
        </main>
      </section>
    </>
  );
}

const para = {
  para1:
    'Please read the subscription terms and conditions carefully before subscribing to any of the subscription plans, as once you have subscribed you cannot change, cancel your subscription plan. Once you subscribe and make the required payment, it shall be final and there cannot be any changes or modifications to the same and neither will there be any refund.',
  para2:
    'Welcome to the terms of use for EasyhaiOnline Subscription. These terms are between you and Sorting Harshly Education and Skill Technologies Pvt. Ltd. (“EasyHaiOnline”, “we” or “us”). Please read these terms, along with the Privacy Policy, Terms of Use, and all other rules and policies made available or published on Easyhaionline platform or mobile application (including, but not limited to, any rules or usage provisions specified on any page or on any help or other informational page on Easyhaionline website or mobile application) (collectively, this . The versions of the above-mentioned policies and terms are available on Easyhaionline website and/or mobile application for your reference and to understand how we handle your personal information. Every time you visit, browse, or use your Easyhaionline Subscription, you accept this Agreement.',
  para3:
    " 2 | P a g e Terms and Conditions Privacy Policy We value your trust. In order to honour that trust, EASYHAIONLINE adheres to ethical standards in gathering, using, and safeguarding any information you provide. Harshly Education And Skills Technologies Private Limited (operating under the brand name Easyhaionline, is a leading edu- tech, company, incorporated in India, for imparting learning. This privacy policy governs your use of the application 'Easyhaionline ('Application'), www.easyhaionline.com ('Website') and the other associated applications, products, websites and services managed by the Company. Please read this privacy policy ('Policy') carefully before using the Application, Website, our services and products, along with t he Terms of Use ('ToU') provided on the Application and the Website. Your use of the Website, Application, or services in connection with the Application, Website or products ('Services'),",
  para4:
    ' EasyHai Online is a provider of Online Learning Education services and solutions for a broad range of demands in the era of challenges where Students to have a committed mentor who is agile and responsive with a comprehensive solution and the highest return on Knowledge investment that lasts. With a strong Student focus, EasyHai Online specializes in providing the impact driven educational platform with competencies along with latest technology, Subject expertise and also provide printed study-material in the form of books for the specific examination.',
};

// Refund Policy
// The subscription terms and conditions state that once you subscribe to any of the subscription plans, you cannot change or cancel your subscription, and there will be no refunds. These terms are binding upon your acceptance of the Agreement.
// Here are the key points from the provided Subscription Terms & Conditions:
// A. Subscription & Eligibility:
// •	Easyhaionline Subscription is a personalized service offering digital educational content.
// •	You can access the Subscription and Educational Content through the Easyhaionline website or mobile application by subscribing to a category of your choice.
// •	If you are under 18 years of age, you can use the Subscription only with the involvement of a parent or guardian.
// •	Content is personalized, and the platform strives to improve subscription plans.
// B. Compatible Devices:
// •	You need a Compatible Device to access live-streamed courses or download Educational Content.
// •	Compatibility may change over time, and you should ensure your device is compatible.
// C. Educational Content:
// •	The Subscription allows you to access live-streamed Educational Content during your Subscription Period.
// •	There are usage rules, including access to live-streamed classes and downloading content within the Subscription Period.
// •	Viewing of content is subject to the terms mentioned in the Agreement.
// •	Quality of streaming may vary based on device and bandwidth.
// D. Additional Terms:
// •	You may receive electronic communications from Easyhaionline.
// •	Rest assured that Easyhaionline has the full authority to modify the Subscription Service and this Agreement at any time.Copyright and intellectual property rights are protected.
// •	Disputes are subject to the governing law and terms of the Easyhaionline Terms of Use.
// E. Limitation of Liability:
// •	Easyhaionline's liability is limited in certain circumstances.
// F. Contact Information:
// •	Contact details for communication with Easyhaionline are provided.
// G. Severability:
// •	If any term or condition is deemed invalid, the remaining terms remain valid.
// H. Refund Policy (as per the additional text):
// •	A refund policy is outlined for courses provided by Easyhaionline.
// •	To qualify for a refund, a student must have attended all live online classes in the first 30 days and submitted all assignments within that time frame.
// •	The refund request must be made between the 30th and 45th day from the course's official commencement date.
// •	No refund requests will be entertained before the 31st day or after the 45th day.
// •	Days are counted from the official batch/course start date.
// •	Missing assignments or not fully participating disqualifies a student from the refund policy.
// Please note that the refund policy is specific to courses offered by Esayhaionline and may not apply to other services provided by Easyhaionline. It's important to understand and agree to these terms before subscribing to any services.
