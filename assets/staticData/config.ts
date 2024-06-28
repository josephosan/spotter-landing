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
       
      }
    },
     footer: {
       buttons: {
         normal: 'دانلود اپ',
         primary:'شروع'
       },
       info: {
         name: 'eduverse',
         gmail: 'eduverse@gmail.com',
         copyright:'copyright 2024'
         
     }


     }
  }
}
