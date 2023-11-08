import HeadingCard from '@/components/card/HeadingCard';
import Heading from '@/components/commons/Heading';
import Paragraph from '@/components/commons/Paragraph';

export default function AboutUs() {
  return (
    <>
      <HeadingCard heading={'Terms & Conditions'} />
      <div className="">
        <img
          src="termandcondition.webp"
          alt="Your Image"
          className="w-full h-[55vh] object-cover"
        />
      </div>
      <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-16  text-justify">
        <main className="flex flex-col gap-10">
          {data_one?.map((value) => (
            <div>
              <Heading title={value?.title} />
              <Paragraph para={value?.desc} />
            </div>
          ))}
          <div>
            <Heading title={data_two?.title} />
            <Paragraph para={data_two?.desc1} />
            <Paragraph para={data_two?.desc2} />
          </div>
          {data_three?.map((value) => (
            <div>
              <Heading title={value?.title} />
              <Paragraph para={value?.desc_1} />
              <Paragraph para={value?.desc_2} />
              <Paragraph para={value?.desc_3} />
              <Paragraph para={value?.desc_4} />
              <Paragraph para={value?.desc_5} />
              <Paragraph para={value?.desc_6} />
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

const data_one = [
  {
    id: 1,
    title: '',
    desc: 'We kindly advise you to review our terms and conditions thoroughly before subscribing to any of our plans. Please note that once you have subscribed and made payment, you will not be able to modify or cancel the subscription plan. We would like to remind you that refunds and modifications will not be available after payment has been made. Your understanding and cooperation are highly appreciated.',
  },
  {
    id: 2,
    title: 'Subscription Terms & Conditions',
    desc: 'Thank you for choosing EasyHaiOnline Subscription. We want to ensure that you are fully informed about our terms and policies, which is why we encourage you to carefully read through them, including our Privacy Policy, Terms of Use, and all other rules and policies available on our platform or mobile application. These agreements are between you and us, Sorting Harshly Education and Skill Technologies Pvt. Ltd. By using your EasyHaiOnline Subscription, you are agreeing to these terms and rules. You can find the most up-to-date versions of these policies and terms on our website or mobile application. Rest assured that we take your personal information seriously, and our policies and terms are in place to ensure that it is handled with the utmost care.',
  },
  {
    id: 3,
    title: 'A. Subscription & Eligibility',
    desc: 'Easyhaionline Subscription is the ultimate solution for anyone who wants personalized access to digital educational content. Our top educators create and live-stream content in your chosen category of interest. To access the Subscription and its Educational Content, all you need to do is subscribe to a category of your choice from the available plans through our website or mobile application. Once you subscribe, you will have unlimited access to all courses and classes that are ongoing during your Subscription Period. Even if you are under 18 years old or not yet of legal age in your location, you can still use this service with the involvement of a parent or guardian. We personalize content for you and feature them as part of your Subscription. Our recommendations on Educational Content in your subscribed category, features, and other related categories that may interest you are always up-to-date. We are continuously improving the Subscription and its plans to provide you with the best possible experience.',
  },
  {
    id: 4,
    title: 'B. Compatible Devices',
    desc: "In order to enjoy our live-streamed courses and educational content on our mobile application, you must have a Compatible Device that meets our system and compatibility requirements. It's important to keep in mind that the list of Compatible Devices may be updated in the future due to software or systems updates by third parties. Therefore, we highly recommend checking that your device is compatible with our system and software before subscribing to our services.",
  },
  {
    id: 5,
    title: 'C. Educational Content',
    desc: 'The Subscription allows you to access live-streaming of Educational Content on a subscription basis in the subscripted category for viewing, for a limited period of time during the Subscription Period',
  },
  {
    id: 6,
    title: ' Usage Rules:',
    desc: 'Kindly take note that the availability and viewing access of the Educational Content provided in the Easyhaionline Subscription may be limited, as determined by our esteemed Educational Content providers (i.e. Educators). These limitations may undergo changes as we keep improving and enhancing our Subscription Service with new features, devices and content. To ensure proper access to the Educational Content on the Easyhaionline Subscription, please adhere to the following guidelines:',
  },
  {
    id: 7,
    title: 'Live – Streaming of Education Content:',
    desc: 'During your subscription period, you have the ability to attend live-streamed classes/courses within your chosen category through your web browser or mobile app on compatible internet-connected devices.',
  },
  {
    id: 8,
    title: 'Downloading:',
    desc: 'Educational content can only be downloaded within the app and viewed on compatible devices during the subscription period. Access to downloaded content is limited to the subscription period, and it cannot be accessed after expiration or termination of the subscription.',
  },
  {
    id: 9,
    title: 'Viewing Period:',
    desc: 'Throughout your subscription period, you will have full access to live-streamed courses/classes available in the Educational Content. Additionally, you can download or stream the content within the app and watch and re-watch it at your convenience. As long as your subscription remains active and the viewing occurs within the subscription period or a time frame specified in the Agreement, you can enjoy the content as many times and for as long as you wish.',
  },
];

const data_two = {
  title: 'Subscription & Payment:',
  desc1:
    "To subscribe to a category, simply click on 'Subscribe' and choose a subscription plan to make the most of it.",
  desc2:
    'Upon payment of the Subscription fee and adherence to all terms outlined in this Agreement, a limited license will be granted to you by Easyhaionline and the Educator.This license is exclusive to you, non- transferable, and non-sub - licensable, and will only be valid during the Subscription Period.You will be able to access and view live - streamed classes / courses of the Educational Content, but solely for personal, non - commercial, and private use.At the end of the Subscription Period, or in accordance with any restrictions mentioned in the Agreement, we reserve the right to terminate your access to the Educational Content from your Compatible Device.',
};

const data_three = [
  {
    id: 1,
    title: 'Availability of Subscribed Educational Content:',
    desc_1:
      'Throughout your Subscription Period, you will have full access to our rich Educational Content through both in-app download and streaming, as well as live-streamed classes/courses. While we strive to ensure the availability of all Educational Content, it is important to note that licensing restrictions or other unforeseeable reasons beyond our control may cause certain content to become temporarily unavailable. Please be advised that Easyhaionline cannot be held liable if Educational Content in your subscribed category becomes unavailable for further download or streaming. However, you are permitted to download and store your own copy of Educational Content on a Compatible Device for personal viewing purposes. Please note that access to in-app downloaded content will be removed upon the completion of your Subscription Period or in the event of Educator licensing restrictions or termination of your Subscription, as outlined in our Agreement.',

    desc_2:
      'Downloading the Educational Content is permitted only within the mobile application or on a Compatible Device. Any unauthorized downloading or casting of the content on any other device will result in termination of your Subscription and access to all downloaded Educational Content. Please note that we reserve the right to take legal action at our sole discretion.',

    desc_3:
      'Quality of Streaming: Please note that the quality and resolution of the educational content you receive may be affected by various factors, including the type of device you use and your internet connection. While we strive to offer you an exceptional viewing experience, we cannot ensure the quality or resolution of the streamed content.',

    desc_4:
      'General Restrictions. You may not (i) transfer, copy or display the Educational Content, except as permitted in this Agreement; (ii) sell, rent, lease, distribute, or broadcast any right to the Educational Content; (iii) remove any proprietary notices or labels on the Educational Content; (iv) attempt to disable, bypass, modify, defeat, or otherwise circumvent any digital rights management or other content protection system used as part of the Subscription; or (v) use the Subscription or Educational Content for any commercial or illegal purpose.',

    desc_5:
      'As agreed upon, it is prohibited for you to transfer, copy or display any Educational Content, unless permitted; sell, rent, lease, distribute, or broadcast any right to the Educational Content; remove any proprietary notices or labels on the Educational Content; attempt to disable, bypass, modify, defeat, or otherwise circumvent any digital rights management or other content protection system used as part of the Subscription; or use the Subscription or Educational Content for any commercial or illegal purpose.',
  },
  {
    id: 2,
    title: 'Additional terms',
    desc_1:
      'Upon accepting our Privacy Policy, you consent to receiving electronic communications from Easyhaionline, which may include promotional content delivered through email or push notifications.',

    desc_2:
      'Modification of Subscription- Please be aware that Easyhaionline reserves the right to modify, suspend, or discontinue the Subscription Service, or any part of it, without prior notice, except as required by law. While these changes may impact your access to Educational Content, please understand that Easyhaionline cannot be held liable for any inconvenience caused. In addition, Harshly Education & Skills Technologies Pvt. Ltd. may update this Agreement at any time by posting the revised terms in connection with the Subscription Service. By continuing to use the Subscription Service after any changes, you are agreeing to the updated terms to the fullest extent allowed by law. Thank you for your understanding and cooperation in this matter.',

    desc_3:
      'Reservation of Rights- We kindly remind you that both the Subscription Service and the Educational Content are protected by intellectual property laws. It is important to respect the Agreement in order to ensure that our rights are upheld. Please note that the Educators, who are the copyright owners of the Educational Content, are considered third-party beneficiaries under the Agreement. While we must enforce the Agreement, we will not waive any of our rights if we do not strictly enforce them. Thank you for your cooperation..',

    desc_4:
      'Disputes/Conditions of Use- In the event of any disagreement or concern regarding this Agreement or the Subscription Service, it shall be subject to the governing law, disclaimer of warranties, limitation of liability, binding arbitration, and all other terms stipulated in the Easyhaionline Terms of Use. By making use of the Subscription Service, you indicate your acceptance of these terms.',

    desc_5:
      "Limitation of Liability - Without limiting the disclaimer of warranties and limitation of liability in the Easyhaionline Terms of Use: (i) in no event shall our total liability to you for all damages arising out of or related to your use or inability to use the Subscription Service exceed the amount of INR 500 (Indian Rupees Five Hundred); and (ii) in no event shall our or our Educational Content providers' i.e. Educator’s total liability to you for all damages arising from your use of the Subscription Service, the Educational Content, or information, materials included on or otherwise made available to you through the Subscription Service, exceed INR 500 (Indian Rupees Five Hundred). The limitations in this section will apply to you even if the remedies fail of their essential purpose.",

    desc_6:
      'Severability - In the event that any provision within this Agreement is deemed invalid, void, or unenforceable, it shall be considered separately and shall not prejudice the legality of any remaining provisions.',
  },
];
