import React from 'react'

const Hero = () => {
  return (
    <div class="bg-gradient-to-tl from-purple-50 via-sky-50 to-purple-200">
      <header class="bg-transparent flex py-2 px-4 sm:px-10 min-h-[84px] tracking-wide z-50">
        <div class="flex flex-wrap items-center gap-5 w-full max-w-screen-xl mx-auto">
          <a href="javascript:void(0)" class="max-sm:hidden"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
            class="w-36" /></a>
          <a href="javascript:void(0)" class="hidden max-sm:block"><img src="https://readymadeui.com/readymadeui-short.svg"
            alt="logo" class="w-9" /></a>

          <div id="collapseMenu"
            class="lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <button id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>
            <ul
              class="lg:flex gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li class="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class="w-36" />
                </a>
              </li>
              <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a href='javascript:void(0)'
                  class="text-base text-slate-900 hover:text-indigo-700 block font-semibold">Home</a>
              </li>
              <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a href='javascript:void(0)' class="text-base text-slate-900 hover:text-indigo-700 block font-semibold">How it
                  works</a>
              </li>
              <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a href='javascript:void(0)'
                  class="text-base text-slate-900 hover:text-indigo-700 block font-semibold">Features</a>
              </li>
              <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a href='javascript:void(0)'
                  class="text-base text-slate-900 hover:text-indigo-700 block font-semibold">Integrations</a>
              </li>
            </ul>
          </div>

          <div class="flex gap-4 ml-auto">
            <button
              class="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-lg px-5 py-3 cursor-pointer outline-0">Get
              Started</button>

            <button id="toggleOpen" class="lg:hidden cursor-pointer">
              <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div class="px-4 sm:px-10 py-14">
        <div class="max-w-screen-xl mx-auto">
          <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
            <div>
              <div class="max-w-3xl max-lg:mx-auto max-lg:text-center">
                <p class="mb-2 font-medium text-indigo-600  uppercase"><span
                  class="rotate-90 inline-block mr-2">|</span> Built to Grow with You</p>
                <h1 class="text-slate-900 md:text-5xl text-4xl font-bold !leading-tight">Empower Brand with Human-Centered Solutions</h1>
                <p class="text-slate-600 text-base leading-relaxed mt-6">Showcase your products and connect with your audience. Our all-in-one platform helps you manage operations and boost visibility — whether you're in fashion, beauty, wellness, or beyond.</p>

                <div class="mt-8 flex flex-wrap gap-6 max-lg:justify-center">
                  <button type='button'
                    class="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-lg px-5 py-3 cursor-pointer outline-0">Get Started Free</button>
                  <button type='button'
                    class="bg-transparent hover:border-indigo-700 border border-gray-400 transition-all text-base text-slate-900 font-medium rounded-lg px-5 py-3 cursor-pointer outline-0">Explore Features</button>
                </div>
              </div>

              <div class="mt-12">
                <div class="grid sm:grid-cols-3 gap-x-4 gap-y-6 max-lg:text-center">
                  <div class="flex flex-col">
                    <h5 class="text-indigo-700 font-semibold text-2xl mb-2">10+</h5>
                    <p class="text-base text-slate-600 font-medium">Years Experience</p>
                  </div>
                  <div class="flex flex-col">
                    <h5 class="text-indigo-700 font-semibold text-2xl mb-2">890</h5>
                    <p class="text-base text-slate-600 font-medium">Cases Solved</p>
                  </div>
                  <div class="flex flex-col">
                    <h5 class="text-indigo-700 font-semibold text-2xl mb-2">250</h5>
                    <p class="text-base text-slate-600 font-medium">Business Partners</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns-2 space-y-4">
              <div class="break-inside-avoid">
                <img src="https://readymadeui.com/images/face-primer-category.webp" alt="img-1"
                  class="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
              </div>
              <div class="break-inside-avoid">
                <img src="https://readymadeui.com/images/product6.webp" alt="img-2"
                  class="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
              </div>
              <div class="break-inside-avoid">
                <img src="https://readymadeui.com/images/product2.webp" alt="img-3"
                  class="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
              </div>
              <div class="break-inside-avoid">
                <img src="https://readymadeui.com/images/skin-glow-category.webp" alt="img-4"
                  class="w-full h-full object-cover object-top rounded-lg max-h-[360px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero