import Image from 'next/image'
import style from './page.module.css'
import img2 from '../../public/website-designer-bro.svg'
import Link from 'next/link'
// import Footer from '@/components/footer/Footer'
export default function Home() {

  return (
    <>
      <div className={style.container}>
        <div className={style.container2}>
        <div className={style.imgContainer}>
            <Image className={style.img} src={img2} alt='image' />
          </div>
          <div className={style.textContainer}>
            <h1 className={style.title}> Unleash Your Voice, Explore Every Story: Your Hub for Creating and Discovering Blogs</h1>
            <p>"Elevate Your Thoughts: Where Words Come to Life", " Navigating the Digital Frontier: Exploring Tech Trends and Innovations"</p>
            <Link href={"/blog"} className={style.btn}>see work</Link>
          </div>
          
        </div>

        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Technology</h1>
                  <p className="leading-relaxed mb-3">Our tech-savvy writers delve into the intricacies of emerging technologies, trends, and breakthroughs. Whether
                    you're an industry professional or a curious individual, our articles provide insights that help demystify
                    complex concepts and empower you to navigate the digital landscape with confidence</p>
                  <a className="text-indigo-500 inline-flex items-center">Explore More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Entertainment</h1>
                  <p className="leading-relaxed mb-3">From the silver screen to the virtual realm, we embark on journeys through the vast universe of entertainment.
                    Our reviews, analyses, and explorations go beyond the surface, inviting you to uncover layers of meaning,
                    symbolism, and artistic expression within movies, TV shows, books, games, and more.</p>
                  <a className="text-indigo-500 inline-flex items-center">Explore More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">

                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Education</h1>
                  <p className="leading-relaxed mb-3">Learning is a lifelong endeavor, and our educational section is designed to be your partner on this journey.
                    We offer thought-provoking pieces that cater to both formal education and the pursuit of knowledge for its
                    own sake. Dive into subjects that intrigue you and expand your intellectual horizons.</p>
                  <a className="text-indigo-500 inline-flex items-center">Explore More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  )
}
