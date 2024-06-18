export default {
    auth: {},
    default: {
        nav: {
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
                title: 'Knowledge for everyone, everywhere.',
                subTitle: 'Accessible education for all.',
                primaryButton: 'Get Started',
                normalButton: 'Learn More',
                numbers: {
                    field1: {
                        number: 100000,
                        title: 'Students'
                    },
                    field2: {
                        number: 1000,
                        title: 'Indicators'
                    },
                    field3: {  
                        number: 100,
                        title: 'Students'
                    }
                },

                image: {
                    foreground: '/images/student.png',
                    background: '/images/student-background.svg'
                }
            }
        }
    }
}