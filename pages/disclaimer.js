import HeadingCard from '@/components/card/HeadingCard';
import Heading from '@/components/commons/Heading';
import Paragraph from '@/components/commons/Paragraph';

export default function AboutUs() {
    return (
        <>
            <HeadingCard heading={'Disclaimer'} />
            <div className=''>
                <img src="/disclaimer.webp" alt="Your Image" className="w-full h-[55vh] object-cover" />
            </div>
            <section className="lg:px-44 md:px-30 sm:px-10 px-4 py-16  text-justify">
                <main className='flex flex-col gap-10'>
                    <div>
                        <Heading title={'Referral Program'} />
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
                        <Heading title='Our Vision' />
                        <Paragraph para={para.para4} />

                    </div>
                </main>
            </section>
        </>
    );
}



const para = {
    para1: 'THIS WEBSITE, THE APPLICATION AND THE SERVICES ARE PROVIDED ON AN "AS IS" BASIS WITH ALL FAULTS AND WITHOUT ANY WARRANTY OF ANY KIND. THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THE WEBSITE, APPLICATION/PRODUCTS AND THE SERVICES, INCLUDING WITHOUT LIMITATION, ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, and TIMELINESS. PERFORMANCE, COMPLETENESS, SUITABILITY AND NON-INFRINGEMENT. ADDITIONALLY, THE COMPANY SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SITE, OR THE APPLICATION OR THE SERVICES. YOUR USE OF ANY INFORMATION OR MATERIALS ON THIS WEBSITE/APPLICATION/SERVICES/PRODUCTS IS ENTIRELY AT YOUR OWN RISK, FOR WHICH WE SHALL NOT BE LIABLE. IT SHALL BE YOUR OWN RESPONSIBILITY TO ENSURE THAT SERVICES PROVIDED BY US MEET YOUR SPECIFIC REQUIREMENTS.',
    para2: ' Lorem ipsum dolor sit amet consectetur. Tristique sed morbi egestas ultrices. Ut amet nisl nulla id justo amet tortor integer donec. Amet nunc urna sagittis felis facilisi cursus id aenean. Cursus eget turpis tristique hac. Vulputate lacinia aenean vitae scelerisque eget fermentum pellentesque leo in. Et tincidunt lorem et viverra neque blandit a volutpat diam. Mi volutpat non mi mi pretium nibh gravida mauris. Enim duis scelerisque tincidunt a. Arcu velit ut neque pellentesque et semper amet. Vehicula purus laoreet feugiat commodo posuere ipsum neque viverra integer. Dolor pharetra bibendum aenean gravida. Varius venenatis malesuada est nec. Amet ullamcorper pretium nulla netus congue enim vitae.',
    para3: " 2 | P a g e Terms and Conditions Privacy Policy We value your trust. In order to honour that trust, EASYHAIONLINE adheres to ethical standards in gathering, using, and safeguarding any information you provide. Harshly Education And Skills Technologies Private Limited (operating under the brand name Easyhaionline, is a leading edu- tech, company, incorporated in India, for imparting learning. This privacy policy governs your use of the application 'Easyhaionline ('Application'), www.easyhaionline.com ('Website') and the other associated applications, products, websites and services managed by the Company. Please read this privacy policy ('Policy') carefully before using the Application, Website, our services and products, along with t he Terms of Use ('ToU') provided on the Application and the Website. Your use of the Website, Application, or services in connection with the Application, Website or products ('Services'),",
    para4: ' EasyHai Online is a provider of Online Learning Education services and solutions for a broad range of demands in the era of challenges where Students to have a committed mentor who is agile and responsive with a comprehensive solution and the highest return on Knowledge investment that lasts. With a strong Student focus, EasyHai Online specializes in providing the impact driven educational platform with competencies along with latest technology, Subject expertise and also provide printed study-material in the form of books for the specific examination.'
}