export const navigationMenuList = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    children: null,
  },

  {
    id: 2,
    title: 'Course',
   
    children: [
      {
        id: 1,
        title: 'IIT/JEE',
        path: '/category/iit-jee',
        // children: [
        //   {
        //     id: 1,
        //     title: 'Physics',
        //     path: 'Physics',
        //     children: [
        //       {
        //         id: 1,
        //         title: 'Unit And Dimension',
        //         path: 'UnitAndDimension',
        //         children: null,
        //       },
        //       {
        //         id: 1,
        //         title: "Newton's Law of Motion",
        //         path: 'NLM',
        //         children: null,
        //       },
        //     ],
        //   },
        //   {
        //     id: 2,
        //     title: 'Chemistry',
        //     path: 'Chemistry',
        //     children: [
        //       {
        //         id: 1,
        //         title: 'Some basic Concept to Chmsitry',
        //         path: 'SomeBasic',
        //         children: null,
        //       },
        //       {
        //         id: 2,
        //         title: 'Atomic Structure',
        //         path: 'AtomicStructure',
        //         children: null,
        //       },
        //     ],
        //   },
        //   {
        //     id: 3,
        //     title: 'Maths',
        //     path: 'Maths',
        //     children: [
        //       {
        //         id: 1,
        //         title: 'Integration',
        //         path: 'Integration',
        //         children: null,
        //       },
        //       {
        //         id: 2,
        //         title: 'Differentiation',
        //         path: 'Differentiation',
        //         children: null,
        //       },
        //     ],
        //   },
        // ],
      },

      {
        id: 2,
        title: 'NEET',
        path: '/category/neet',
        // children: [
        //   {
        //     id: 1,
        //     title: 'Physics',
        //     path: 'Physics',
        //     children: [
        //       {
        //         id: 1,
        //         title: 'Unit And Dimension',
        //         path: 'UnitAndDimension',
        //         children: null,
        //       },
        //       {
        //         id: 1,
        //         title: "Newton's Law of Motion",
        //         path: 'NLM',
        //         children: null,
        //       },
        //     ],
        //   },
        //   {
        //     id: 2,
        //     title: 'Chemistry',
        //     path: 'Chemistry',
        //     children: [
        //       {
        //         id: 1,
        //         title: 'Some basic Concept to Chmsitry',
        //         path: 'SomeBasic',
        //         children: null,
        //       },
        //       {
        //         id: 2,
        //         title: 'Atomic Structure',
        //         path: 'AtomicStructure',
        //         children: null,
        //       },
        //     ],
        //   },
        //   {
        //     id: 3,
        //     title: 'Maths',
        //     path: 'Maths',
        //     children: [
        //       {
        //         id: 1,
        //         title: 'Integration',
        //         path: 'Integration',
        //         children: null,
        //       },
        //       {
        //         id: 2,
        //         title: 'Differentiation',
        //         path: 'Differentiation',
        //         children: null,
        //       },
        //     ],
        //   },
        // ],
      },
      {
        id: 3,
        title: 'CA/CS/CMA',
        path: "/category/CS%7CCA%7CCMS"
      },
      {
        id: 4,
        title: 'NCERT',
        path: "/category/ncert"
      }
    ],
  },
  {
    id: 3,
    title: 'Lecture',
    children: [
      {
        id: 1,
        title: 'Live Lecture',
        path: '/dashboard/lectures',
        // children: [
        //   {
        //     id: 1,
        //     title: 'Abc',
        //     path: 'Abc',
        //     children: null,
        //   },
        //   {
        //     id: 2,
        //     title: 'Def',
        //     path: 'Def',
        //     children: null,
        //   },
        // ],
      },
      {
        id: 2,
        title: 'Recorded Lecture',
        path: '/dashboard/lectures',

      },

    ],
  },
  {
    id: 4,
    title: 'Study Material',
    path: '/dashboard/material',
  },
  {
    id: 5,
    title: 'Blogs',
    path: '/blogs',
  },
  {
    id: 6,
    title: 'Micro-Courses',
    path: '/micro-courses',
  },
];


export const CoursesData = [
  {
    id: '1',
    name: 'NCERT',
    image: '/school.jpeg',
    path: 'ncert',
    des: 'The School Programme designed by Easyhai online is  VI to X  CBSE  ICSE  AND STATE BOARD Effect of NEP (New education policy) on our education system and How we adapt it for the Students:- According to the New Education policy, there are a few changes and updates in the curriculum of the CBSE Board and State board in terms of Marks and Grades awarded to the students.The policy envisions a holistic and integrated education approach, focusing on skill development, multi-disciplinary learning, and promoting creativity and critical thinking. It also emphasizes using technology and digital resources to enhance the learning experience, so in Easyhai Online we are committed to providing quality education from className VI-X so that the students get ready to excel in the school curriculum as well as get ready for the future competitive examinations.',
  },
  {
    id: '2',
    name: 'NEET',
    image: '/neet.jpeg',
    path: 'neet',
    des: 'The NEET-UG full form is the National Eligibility cum Entrance Test for the Undergraduate program. NEET exam is mainly conducted to fill medical and dental seats in all medical colleges of India. To check a comprehensive state-wise list of the total MBBS and BDS and other courses like BHMS, and BAMS seats in colleges across India, segregated as per categories, type of college- government, private, central, etc,The primary objective of the NEET exam is to streamline the admission process in MBBS and BDS courses. Therefore, NEET full-form exam was introduced to replace several medical examinations all over the country including AIPMT (All India Pre-Medical Test, National Eligibility cum Entrance Test was introduced by CBSE and the Medical Council of India (MCI). Earlier, medical students had to fill out different forms for different medical entrance exams in India, the number of aspirants is increasing every year and more students are getting selection too.',
  },
  {
    id: '3',
    name: 'IIT-JEE',
    image: '/iit-jee.jpeg',
    path: 'iit-jee',
    des: 'The Indian Institutes of Technology (IITs) are the most prestigious institutes in India that offer engineering and technological education of internationally recognized standards of excellence. Over the years, IITs have created a world-className educational platform that is dynamically sustained through quality teaching and internationally acclaimed research with excellent infrastructure and the best available minds. Alumni of IITs occupy key positions, both in India and abroad. At present, there are twenty-four IITs across India.Students coming out of the IITs are known to have acquired professional excellence in life. Be it a matter of getting admission for further studies in the most prestigious Universities abroad, or getting employment in any reputed organizations in the world, IITians are always at the top, be it any organization of the world in operations or the start-ups the IITians prove their worth. The work-life balance or the socio-economic part these men are always on the front to lead.',
  },
  {
    id: '4',
    name: 'CS|CA|CMS',
    image: '/ca-cms.jpeg',
    path: 'CS|CA|CMS',
    des: 'A Chartered Accountant (abbreviated ‘CA’) is a professional accountant who is hired by an individual, firm, or company to manage the entity’s financial operations. If we talk about a CS, then is in-charge of ensuring that all board decisions are successfully implemented within the company. In a way, we can summarize that the CS course is more concerned with the Companies Act, and Labour law, among other things in the sameway CMAs serve as Cost Accountants and assist in the determination of the price of any business entity’s products through cost calculation. Additionally, their expertise and knowledge about cost centers are used in preparing all the budgets like cash budget, purchase budget, sales budget, etc. for an entity.',
  },
];

export const BooksAndPhysicalItems = [
  {
    id: 12,
    productType: 'book',
    product: {
      price: '4999',
      title: 'BOOKS',
      img: 'https://easyhaionline.nyc3.digitaloceanspaces.com/cdn/dummy-books/books-image.jpg',
    },
    submittedBy: '11111111111',
    uploadedOn: '2023-07-22T07:28:01.623Z',
  },
  {
    id: 13,
    productType: 'book',
    product: {
      price: '11000',
      title: 'BOOKS + MYGURU',
      img: 'https://easyhaionline.nyc3.digitaloceanspaces.com/cdn/dummy-books/books-image.jpg',
    },
    submittedBy: '11111111111',
    uploadedOn: '2023-07-22T07:28:01.623Z',
  },
  {
    id: 14,
    productType: 'book',
    product: {
      price: '6500',
      title: 'MYGURU',
      // img: "https://easyhaionline.nyc3.digitaloceanspaces.com/cdn/dummy-books/books-image.jpg",
      img: 'https://easyhaionline.nyc3.digitaloceanspaces.com/images/my-guru.jpg',
    },
    submittedBy: '11111111111',
    uploadedOn: '2023-07-22T07:28:01.623Z',
  },
];

export const slide_content_one = [
  <div className="swiper-slide">
    <img src="/banner/banner2.webp" alt="Slide2" />
  </div>,
  <div className="swiper-slide">
    <img src="/banner/banner1.webp" alt="Slide1" />
  </div>,
  <div className="swiper-slide">
    <img src="/banner/banner3.webp" alt="Slide3" />
  </div>,
  <div className="swiper-slide">
    <img src="/banner/banner4.webp" alt="Slide3" />
  </div>,
];

export const slide_content_two = [
  <div className="flex justify-center items-center flex-col gap-34">
    <img src="/benifit/CONCEPT.jpg" className="object-contain " alt="Slide1"  />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Concept clarity through visualsation
    </h3>
  </div>,
  <div className="flex justify-center items-center flex-col gap-3">
    <img src="/benifit/GUIDENCE.jpg" className="object-contain " alt="Slide3" />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Guidences by personal mentor{' '}
    </h3>
  </div>,
  <div className="flex justify-center items-center flex-col gap-3">
    <img src="/benifit/REGULAR CLASSES.jpg" className="object-contain " alt="Slide3" />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Regular Homework After
      Class and Practise
    </h3>
  </div>,
  <div className="flex justify-center items-center flex-col gap-3">
    <img src="/benifit/ACCESS.jpg" className="object-contain " alt="Slide4" />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Full Access to the app{' '}
    </h3>
  </div>,
  <div className="flex justify-center items-center flex-col gap-3">
    <img src="/benifit/TIMING.jpg" className="object-contain " alt="Slide5" />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Choose your class Timings{' '}
    </h3>
  </div>,

  <div className="flex justify-center items-center flex-col gap-3">
    <img src="/benifit/PERSONAL ATTENTION.jpg" className="object-contain " alt="Slide5" />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Personal
      Attention
    </h3>
  </div>,
  <div className="flex justify-center items-center flex-col gap-3">
    <img src="/benifit/DOUBT.jpg" className="object-contain " alt="Slide5" />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Doubt Solving During
      Session

    </h3>
  </div>,
  <div className="flex justify-center items-center flex-col gap-3">
    <img src="/benifit/TEACHER.jpg" className="object-contain " alt="Slide5" />
    <h3 className="text-[#231F40] text-[14px] sm:text-[18px] font-bold text-center">
      Classes By Best
      Teacher

    </h3>
  </div>,

];

export const slide_content_three = [
  <div className="flex justify-center">
    <img src="/gk.jpg" className="rounded-xl sm:h-64" alt="Slide1" />
  </div>,
  <div className="flex justify-center">
    <img
      src="/previous paper.jpg"
      className="rounded-xl sm:h-64"
      alt="Slide2"
    />
  </div>,
  <div className="flex justify-center">
    <img src="/revison notes.jpg" className="rounded-xl sm:h-64" alt="Slide3" />
  </div>,
  <div className="flex justify-center">
    <img src="/smaple paper.jpg" className="rounded-xl sm:h-64" alt="Slide3" />
  </div>,
  <div className="flex justify-center">
    <img
      src="/previous paper.jpg"
      className=" rounded-xl sm:h-64"
      alt="Slide3"
    />
  </div>,
];
