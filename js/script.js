
// const objj = { firstName: 'Jean-Luc', lastName: 'Picard', age: 59 };

// // { firstName: 'Jean-Luc', lastName: 'Picard' }
// let result =  Object.keys(objj).
//   filter((key) => key.includes('firstName')).
//   reduce((cur, key) => { return Object.assign(cur, { [key]: objj[key] })}, {});
// console.log(result);



// variables 
let activeLanguage = document.getElementById('activeLanguage');
let notActiveLanguage = document.getElementById('notActiveLanguage')
let activeCurrency = document.getElementById('activeCurrency');
let notActiveCurrency = document.getElementById('notActiveCurrency')
let lottieFiles = document.getElementById('lottieFiles');
let menuIcon = document.getElementById('menuIcon');
let navBar = document.getElementById('navBar');
let selectMonthlyOrAnnually = document.getElementById('selectMonthlyOrAnnually');
let allPackages = document.getElementById('allPackages')




// [List ]
//7- select Pay Monthly Or Annually
//6- Call the  owl-carousel
//5- click on menue  (open and close menue)
//4- Repeat lottieFiles 
//3-  click on Currency Link 
//2- click on Language Link  
//1- click on anywhere in the page 








// 7 - select Pay Monthly Or Annually
let packageType = 'Monthly' ;
    let obj = {
        packages: {
            Monthly: `<div class="free">
            <span>مجانا </span>
            <h4>سلتك الاساسية
            </h4>
            <ul>
                <li>التحويل البنكي
                </li>
                <li>التحكم بألوان المتجر
                </li>
                <li>كوبونات الخصم
                </li>
                <li>الصفحات الخاصة
                </li>
                <li>عملات متعددة
                </li>
                <li>متوفر باللغتين AR&EN
                </li>
            </ul>
            <button>اطلب الان</button>
        </div>
        <div class="mediumCost">
        <span>13.00  <sub>KWD</sub></span>
            <h4>سلتك جو
            </h4>
            <ul>
                <li>التحويل البنكي
                </li>
                <li>التحكم بألوان المتجر
                </li>
                <li>كوبونات الخصم
                </li>
                <li>الصفحات الخاصة
                </li>
                <li>عملات متعددة
                </li>
                <li>متوفر باللغتين AR&EN
                </li>
            </ul>
            <button>اطلب الان</button>
        </div>
        <div class="heighCost">
        <span>29.00  <sub>KWD</sub></span>
            <h4>سلتك برو
            </h4>
            <ul>
                <li>التحويل البنكي
                </li>
                <li>التحكم بألوان المتجر
                </li>
                <li>كوبونات الخصم
                </li>
                <li>الصفحات الخاصة
                </li>
                <li>عملات متعددة
                </li>
                <li>متوفر باللغتين AR&EN
                </li>
            </ul>
            <button>اطلب الان</button>
        </div>`,
            annually: `<div class="free">
            <span>مجانا </span>
            <h4>سلتك الاساسية
            </h4>
            <ul>
                <li>التحويل البنكي
                </li>
                <li>التحكم بألوان المتجر
                </li>
                <li>كوبونات الخصم
                </li>
                <li>الصفحات الخاصة
                </li>
                <li>عملات متعددة
                </li>
                <li>متوفر باللغتين AR&EN
                </li>
            </ul>
            <button>اطلب الان</button>
        </div>
        <div class="mediumCost">
        <span>149.00  <sub>KWD</sub></span>
            <h4>سلتك جو
            </h4>
            <ul>
                <li>التحويل البنكي
                </li>
                <li>التحكم بألوان المتجر
                </li>
                <li>كوبونات الخصم
                </li>
                <li>الصفحات الخاصة
                </li>
                <li>عملات متعددة
                </li>
                <li>متوفر باللغتين AR&EN
                </li>
            </ul>
            <button>اطلب الان</button>
        </div>
        <div class="heighCost">
        <span>339.00  <sub>KWD</sub></span>
            <h4>سلتك برو
            </h4>
            <ul>
                <li>التحويل البنكي
                </li>
                <li>التحكم بألوان المتجر
                </li>
                <li>كوبونات الخصم
                </li>
                <li>الصفحات الخاصة
                </li>
                <li>عملات متعددة
                </li>
                <li>متوفر باللغتين AR&EN
                </li>
            </ul>
            <button>اطلب الان</button>
        </div>`
        }
    }

    Object.keys(obj).forEach((key) => {
        allPackages.innerHTML= obj[key].Monthly
    })
    selectMonthlyOrAnnually.parentElement.addEventListener('click', () => {
        let setLeft = selectMonthlyOrAnnually.classList.toggle("toogleMonthlyAndAnnually")
    // console.log(selectMonthlyOrAnnually.parentElement);
    let type = selectMonthlyOrAnnually.classList.value==="toogleMonthlyAndAnnually" ;
    Object.keys(obj).forEach((key) => {
        console.log(key, obj[key]) ;
        if(!type){

            allPackages.innerHTML= obj[key].Monthly
        
        } else if(type){
            allPackages.innerHTML=obj[key].annually
        }
    })
    })




6 - //Call the  owl-carousel
    $(document).ready(function () {




        $(".owl-carouselModels").owlCarousel({
            //  loop:true,
            autoplay: true,
            margin: 10,
           // nav: true,
            autoplayTimeout: 2000,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
        $('.owl-carouselClients').owlCarousel({
            loop: true,
          //  autoplay: true,
            autoplayTimeout: 3000,
            rtl: true,

            margin: 10,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        })

    });






5 - // click on menue  (open and close menue)
    menuIcon.addEventListener('click', () => {
        navBar.classList.toggle('full');
    })









4 - //Repeat lottieFiles 

    setInterval(() => {

        lottieFiles.classList.add('animate__bounceOutRight');
        // lottieFiles.classList.add('animate__bounceOutLeft') ;
        lottieFiles.style.opacity = '0'
        setInterval(() => {
            lottieFiles.style.opacity = '1';
            lottieFiles.classList.remove('animate__bounceOutRight');
            // lottieFiles.style.display='flex' ;

        }, 1500)


    }, 15000)




3 - // click on Currency Link  
    activeCurrency.addEventListener('click', (even) => {
        if (notActiveCurrency.style.display != "none") {
            notActiveCurrency.style.display = "none"
        } else {
            notActiveCurrency.style.display = "inline";
            notActiveLanguage.style.display = "none"
        }
    })











2 - // click on Language Link  

    activeLanguage.addEventListener('click', (even) => {
        if (notActiveLanguage.style.display != "none") {
            notActiveLanguage.style.display = "none"
        } else {
            notActiveLanguage.style.display = "inline";
            notActiveCurrency.style.display = "none";
        }
    })



1 - // click on anywhere in the page 
    document.body.addEventListener('click', () => {
        if (notActiveCurrency.style.display != "none" || notActiveLanguage.style.display != "none") {
            // notActiveCurrency.style.display = "none"
            // notActiveLanguage.style.display = "none" ;
        }
        //  notActiveCurrency.style.display = "none" ;

    })