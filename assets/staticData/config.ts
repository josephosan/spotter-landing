export default {
  auth: {},
  default: {
    nav: {
      buttons: {
        primary: {
          title: 'ورود',
          route: ''
        },
        normal: {
          title: 'ثبت نام',
          route: ''
        }
      },
      pages: [
        {
          title: 'محصولات',
          route: 'products'
        },
        {
          title: 'تدریس',
          route: 'teach'
        },
        {
          title: 'منابع',
          route: 'resources'
        }
      ]
    },
    body: {
      preview: {
        title: 'دانش برای همه، در هر کجا!صرف نظر از مکان .',
        subTitle:
          'با استفاده از پلتفرم ما، می‌توانید به صورت رایگان به طیف گسترده‌ای از دوره‌های آموزشی دسترسی پیدا کنید و دانش خود را در زمینه‌های مختلف ارتقا دهید.',
        primaryButton: 'شروع کنید',
        normalButton: 'اطلاعات بیشتر',
        numbers: {
          field1: {
            number: 100000,
            title: 'دانش آموزان'
          },
          field2: {
            number: 1000,
            title: 'افراد دخیل'
          },
          field3: {
            number: 100,
            title: 'دانش آموزان'
          }
        },

        image: {
          foreground: '/images/student.png',
          background: '/images/student-background.svg'
        }
      },
      products: [
        {
          img: '/images/study_1.jpg',
          title: 'مبانی برنامه‌نویسی',
          desc: 'در این دوره، اصول اولیه برنامه‌نویسی و مفاهیم پایه‌ای مانند انواع داده‌ها، توابع، شرط‌ها و حلقه‌ها آموزش داده می‌شود. این دوره برای کسانی که هیچ تجربه‌ای در برنامه‌نویسی ندارند مناسب است و به آنها کمک می‌کند تا با زبان‌های برنامه‌نویسی محبوب آشنا شوند'
        },
        {
          img: '/images/study_2.jpg',
          title: 'طراحی وب با HTML و CSS',
          desc: 'این دوره شما را با مبانی طراحی وب آشنا می‌کند. شما یاد می‌گیرید چگونه با استفاده از HTML ساختار یک صفحه وب را ایجاد کنید و با CSS ظاهر آن را زیباتر کنید. این دوره شامل پروژه‌های عملی است که به شما کمک می‌کند تا مهارت‌های خود را تقویت کنید'
        },
        {
          img: '/images/study_3.jpg',
          title: 'یادگیری ماشین و هوش مصنوعی',
          desc: 'در این دوره، مفاهیم پایه‌ای و پیشرفته یادگیری ماشین و هوش مصنوعی آموزش داده می‌شود. مباحثی مانند الگوریتم‌های طبقه‌بندی، رگرسیون، خوشه‌بندی و شبکه‌های عصبی پوشش داده می‌شود. این دوره برای دانشجویان علوم کامپیوتر و افرادی که به هوش مصنوعی علاقه‌مند هستند، مناسب است.'
        },
        {
          img: '/images/study_4.jpg',
          title: 'مدیریت پروژه‌های نرم‌افزاری',
          desc: 'این دوره به شما کمک می‌کند تا با اصول و مبانی مدیریت پروژه‌های نرم‌افزاری آشنا شوید. مباحثی مانند برنامه‌ریزی پروژه، مدیریت زمان، تخصیص منابع، ریسک‌ها و ابزارهای مدیریت پروژه در این دوره پوشش داده می‌شود. این دوره برای مدیران پروژه و توسعه‌دهندگان نرم‌افزار مفید است'
        },
        {
          img: '/images/study_5.jpg',
          title: 'امنیت سایبری و حفاظت از اطلاعات',
          desc: 'در این دوره، مباحث مرتبط با امنیت سایبری و حفاظت از اطلاعات آموزش داده می‌شود. موضوعاتی مانند رمزنگاری، امنیت شبکه، حفاظت از داده‌ها و شناسایی تهدیدات سایبری در این دوره بررسی می‌شود. این دوره برای افرادی که به امنیت اطلاعات و شبکه‌ها علاقه‌مند هستند، طراحی شده است.'
        }
      ],
      features: {
        header: {
          title: 'قابلیت ها',
          subtitle: 'مزیت های پلتفرم های ما'
        },
        items: [
          {
            title: 'مدارک',
            desc: 'بخش معرفی گواهینامه‌های تحصیلی و حرفه‌ای و الزامات و مزایای آن‌ها.',
            button: 'Read More',
            icon: 'Open'
          },
          {
            title: 'ارامش و یادگیری',
            desc: 'منابع و ابزارهایی که به دانشجویان کمک می‌کنند تا استرس را کاهش داده و همزمان یادگیری را تقویت کنند.',
            button: 'Read More',
            icon: 'ReadingLamp'
          },
          {
            title: 'تفکر خلاق',
            desc: 'اطلاعاتی درباره دوره‌ها، برنامه‌ها، و منابع برای توسعه مهارت‌های خلاقانه دانشجویان.',
            button: 'Read More',
            icon: 'soccer'
          }
        ]
      }
    },
    footer: {
      buttons: {
        normal: 'دانلود اپ',
        primary: 'شروع'
      },
      info: {
        name: 'Eduverse',
        gmail: 'eduverse@gmail.com',
        copyright: 'Copyright © 2023, Powered by harshanacz'
      }
    }
  }
}
