import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Main',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Design',
    description:
      '',//Remplazar despues cuando decida un texto
    services: [
      ['Simple Business Websites', 'Google Business Profile Setup'],
      ['Local SEO Boost', 'Updates & Maintenance'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Fullstack development',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [
      ['Online shop', 'Web application'],
      ['CMS', 'API Development'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Mobile development',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias placeat temporibus mollitia doloribus. Consequatur aperiam facilis culpa fuga quia! Labore, sequi! Optio officiis obcaecati tempora voluptates consequuntur, placeat ad.',
    services: [['Android', 'IOS']],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'We build your website for free for 7 days',
    description:
      "",
  },
  {
    icon: Second,
    title: 'You test it with real customers',
    description:
      '',
  },
  {
    icon: Third,
    title: 'If you like it, keep it live for just [$XX/month]',
    description: '',
  },
  {
    icon: Fifth,
    title: 'Final result',
    description:
      'One new customer can pay for your website for the entire year. Don’t miss out on people searching for you online.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What type of services you want?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Design/Branding', value: 'design/branding' },
      { name: 'Web Development', value: 'web-dev' },
      { name: 'Mobile Development', value: 'mobile-dev' },
      { name: 'All of the above', value: 'all-types' },
      { name: 'Other', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: 'What is your budget category?',
    classes: '',
    radioArray: [
      { name: '$2000 - $4000', value: '2-4' },
      { name: '$4000 - $8000', value: '4-8' },
      { name: '$8000 - $10000', value: '8-10' },
      { name: '$10000', value: '10+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Approximately how many pages will your project have?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Less than 5', value: '<5' },
      { name: '6-10', value: '6-10' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'How quickly do you need the project?',
    classes: '',
    radioArray: [
      { name: 'As fast as possible', value: 'max-fast' },
      { name: 'High priority ', value: 'high-prio ' },
      { name: 'Regular time', value: 'regular' },
      { name: 'Take your time ', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Your name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Business Name', name: 'company', classes: '', required: true }
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
