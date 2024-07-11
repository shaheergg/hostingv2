<template>
  <div class="">
    <div class="w-full px-2 bg-[#172038] py-2">
      <div
        class="lg:max-w-[74rem] sm:max-w-[700px] w-full mx-auto flex items-start sm:items-center justify-center sm:justify-between gap-2"
      >
        <div class="hidden xl:flex xl:flex-wrap xl:items-end">
          <span
            class="mr-1 relative text-[13px] flex items-center text-gray-400"
          >
            <svg
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-1 fill-gray-400"
            >
              <path
                d="m8.95 7.94-1.56-.8a.51.51 0 0 0-.64.13l-.57.74c-.56-.3-.98-.59-1.47-1.08-.53-.52-.81-.95-1.1-1.5l.74-.56c.19-.15.25-.42.14-.64l-.8-1.54a.52.52 0 0 0-.75-.2l-1 .67a.78.78 0 0 0-.34.69c.02.28.06.64.13.88a7.26 7.26 0 0 0 1.96 3.23A7.45 7.45 0 0 0 6.92 9.9c.25.06.6.1.9.12.28.02.55-.1.7-.35l.64-1a.55.55 0 0 0-.21-.74zm.97-2.48a4.38 4.38 0 0 0-3.75-3.74.35.35 0 0 0-.4.33v.04c-.02.19.12.34.3.37A3.69 3.69 0 0 1 9.2 5.57c.03.18.18.31.37.3h.03c.2-.01.36-.2.33-.4zM5.83 3.96a.38.38 0 0 1-.3-.38v-.03c0-.21.2-.37.42-.33.57.09 1.09.36 1.5.78.42.42.69.94.79 1.5a.35.35 0 0 1-.34.43h-.02a.37.37 0 0 1-.38-.3 2.08 2.08 0 0 0-1.67-1.67z"
              ></path></svg
            >Sales:
          </span>
          <span class="underline decoration-dotted underline-offset-4">
            <a
              class="mr-1 text-white hover:text-red-500 text-[12px] transition-all duration-200"
              target="_blank"
              href="tel:+442036081635"
              >+44 20 3608 1635</a
            ></span
          >
        </div>

        <div class="flex flex-col items-center gap-2 sm:hidden">
          <div class="flex items-center gap-2 mb-16">
            <div class="flex items-center text-[13px] gap-1.5">
              <span class="flex items-center gap-1.5 whitespace-nowrap"
                ><span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#55F8A7] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#55F8A7]"
                  ></span>
                </span>
                <span class="text-gray-400 mt-[2px]"
                  >Server stock&nbsp;at
                  <!-- -->10:52<!-- -->:</span
                >
              </span>

              <div
                class="flex-row hidden space-x-1 leading-none divide-x divide-gray-500 sm:flex"
              >
                <a
                  class="text-white group/servers-link hover:text-red-500 md:pl-1"
                  href="#"
                  >1595<span
                    class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                    >&nbsp;×&nbsp;<!-- -->Europe</span
                  ></a
                >
                <a
                  class="text-white group/servers-link hover:text-red-500 md:pl-1"
                  href="/pricing?selectServer=ashburn"
                  >1665<span
                    class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                    >&nbsp;×&nbsp;<!-- -->Americas</span
                  ></a
                >
                <a
                  class="text-white group/servers-link hover:text-red-500 md:pl-1"
                  href="/pricing?selectServer=singapore"
                  >392<span
                    class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                    >&nbsp;×&nbsp;<!-- -->Asia-Pacific</span
                  ></a
                >
                <a
                  class="text-white group/servers-link hover:text-red-500 md:pl-1"
                  href="/pricing?selectServer=istanbul"
                  >91<span
                    class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                    >&nbsp;×&nbsp;<!-- -->Middle East &amp; Africa</span
                  ></a
                >
              </div>
            </div>

            <div class="group">
              <a
                class="group/servers-link flex gap-1 text-white text-[13px] hover:text-red-500 md:pl-1"
                href="#"
                >1595<span
                  class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                  >&nbsp;×&nbsp;<!-- -->Europe</span
                >
                <span
                  class="block h-3 w-3 opacity-60 transition-transform duration-200 -mt-[2px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m7 10l5 5l5-5"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div
              class="bg-[#172038] pl-28 pt-6 h-80 w-full absolute top-8 flex text-[13px] flex-col gap-2 left-0"
            >
              <a
                class="text-white group/servers-link hover:text-red-500 md:pl-1"
                href="#"
                >1595<span
                  class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                  >&nbsp;×&nbsp;<!-- -->Europe</span
                ></a
              >
              <a
                class="text-white group/servers-link hover:text-red-500 md:pl-1"
                href="/pricing?selectServer=ashburn"
                >1665<span
                  class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                  >&nbsp;×&nbsp;<!-- -->Americas</span
                ></a
              >
              <a
                class="text-white group/servers-link hover:text-red-500 md:pl-1"
                href="/pricing?selectServer=singapore"
                >392<span
                  class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                  >&nbsp;×&nbsp;<!-- -->Asia-Pacific</span
                ></a
              >
              <a
                class="text-white group/servers-link hover:text-red-500 md:pl-1"
                href="/pricing?selectServer=istanbul"
                >91<span
                  class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                  >&nbsp;×&nbsp;<!-- -->Middle East &amp; Africa</span
                ></a
              >
            </div>
          </div>
        </div>

        <div class="sm:flex hidden items-center text-[13px] gap-1.5">
          <span class="flex items-center gap-1.5 whitespace-nowrap"
            ><span class="relative flex h-1.5 w-1.5"
              ><span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#55F8A7] opacity-80"
              ></span>
              <span
                class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#55F8A7]"
              ></span>
            </span>
            <span class="text-gray-400 mt-[2px]"
              >Server stock&nbsp;at
              <!-- -->10:52<!-- -->:</span
            >
          </span>

          <div
            class="flex-row hidden space-x-1 leading-none divide-x divide-gray-500 sm:flex"
          >
            <a
              class="text-white group/servers-link hover:text-red-500 md:pl-1"
              href="#"
              >1595<span
                class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                >&nbsp;×&nbsp;<!-- -->Europe</span
              ></a
            >
            <a
              class="text-white group/servers-link hover:text-red-500 md:pl-1"
              href="/pricing?selectServer=ashburn"
              >1665<span
                class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                >&nbsp;×&nbsp;<!-- -->Americas</span
              ></a
            >
            <a
              class="text-white group/servers-link hover:text-red-500 md:pl-1"
              href="/pricing?selectServer=singapore"
              >392<span
                class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                >&nbsp;×&nbsp;<!-- -->Asia-Pacific</span
              ></a
            >
            <a
              class="text-white group/servers-link hover:text-red-500 md:pl-1"
              href="/pricing?selectServer=istanbul"
              >91<span
                class="text-white duration-200 transition-color group-hover/servers-link:text-red-500"
                >&nbsp;×&nbsp;<!-- -->Middle East &amp; Africa</span
              ></a
            >
          </div>
        </div>

        <div class="hidden gap-x-5 lg:flex lg:flex-wrap lg:items-center">
          <div class="flex items-center justify-between gap-x-5 xl:gap-x-7">
            <a
              class="text-white transition-all duration-200 group hover:text-red-500"
              href="/faq"
              ><span class="flex items-center text-sm gap-x-1"
                >FAQ<span class="order-first size-4 min-w-4"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition-all duration-200 fill-white group-hover:fill-red-500"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M6 1.284a4.717 4.717 0 1 1 0 9.433 4.717 4.717 0 0 1 0-9.434zm0 .778a3.938 3.938 0 1 0 0 7.876 3.938 3.938 0 0 0 0-7.877zm.018 5.414a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm.22-3.929a1.618 1.618 0 0 1 1.345 1.597c0 .514-.307.922-.789 1.244a3.097 3.097 0 0 1-.71.354.375.375 0 0 1-.238-.712 2.39 2.39 0 0 0 .532-.267c.295-.196.455-.409.455-.62a.868.868 0 0 0-1.65-.379l-.037.09a.375.375 0 1 1-.707-.25 1.618 1.618 0 0 1 1.8-1.057z"
                    ></path></svg></span></span></a
            ><a
              class="text-white transition-all duration-200 group hover:text-red-500"
              target="_blank"
              rel="noopener"
              href="https://app.datapacket.com"
              ><span class="flex items-center text-sm gap-x-1"
                >Log in<span class="order-first size-4 min-w-4"
                  ><svg
                    viewBox="0 0 12 12"
                    class="transition-all duration-200 fill-white group-hover:fill-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 7a2.5 2.5 0 0 1 2.495 2.336l.005.164v1a.5.5 0 0 1-.992.09L9.5 10.5v-1a1.5 1.5 0 0 0-1.356-1.493L8 8H4a1.5 1.5 0 0 0-1.493 1.356L2.5 9.5v1a.5.5 0 0 1-.992.09L1.5 10.5v-1a2.5 2.5 0 0 1 2.336-2.495L4 7h4zM6 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                    ></path></svg></span></span
            ></a>
          </div>
          <div class="relative">
            <a class="text-white group hover:text-red-500" href="/cart"
              ><span
                class="flex items-center text-sm transition-all duration-200 gap-x-1"
                ><span class="">Cart</span
                ><span class="order-first size-4 min-w-4"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition-all duration-200 fill-white group-hover:fill-red-500"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.36 18.611a1.347 1.347 0 1 0 0-2.694 1.347 1.347 0 0 0 0 2.694zm7.75 0a1.347 1.347 0 1 0 0-2.695 1.347 1.347 0 0 0 0 2.695zM3.646 3.755l.606 3.03a.743.743 0 0 0 .013.063l1.223 6.11a2.21 2.21 0 0 0 2.21 1.779H14.8a2.207 2.207 0 0 0 2.196-1.78L18.17 6.81a.746.746 0 0 0-.733-.886H5.602l-.612-3.06a.746.746 0 0 0-.732-.6H1.329a.746.746 0 1 0 0 1.492h2.317zm2.306 3.709h10.62l-1.002 5.25a.716.716 0 0 1-.716.57H7.733a.721.721 0 0 1-.731-.576l-1.05-5.244z"
                    ></path></svg></span></span
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!--hero-->
    <div class="w-full">
      <nav class="w-full border-b border-[#222843] bg-[#080F2C] px-2 py-5">
        <div
          class="lg:max-w-[74rem] sm:px-0 px-8 max-w-[600px] w-full mx-auto items-center flex gap-2 justify-between"
        >
          <a href="#" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="166"
              height="24"
              viewBox="0 0 166 24"
            >
              <g fill="#F43F45">
                <path
                  d="M15.356 10.842a.055.055 0 01-.0408-.014.058.058 0 01-.0192-.0395c-.5962-4.3904-4.2508-7.6593-8.568-7.664H.06a.0651.0651 0 01-.0601-.0656v-.957c-.0031-.4062.1526-.7968.4324-1.084.2797-.2873.66-.4472 1.0557-.444h5.24C12.4192.558 17.2015 4.9614 17.804 10.7722a.0547.0547 0 010 .0493.0674.0674 0 01-.048.0246l-2.4-.004z"
                />
                <path
                  d="M1.488 23.4632c-.3953 0-.7744-.1616-1.0536-.449-.2792-.2874-.4355-.677-.4346-1.083v-6.8795a.0545.0545 0 01.0202-.0451.0469.0469 0 01.04 0H6.8c.7626.0099 1.497-.2951 2.0386-.8465.5415-.5514.8447-1.303.8414-2.086-.0013-1.6483-1.2756-2.9985-2.88-3.0517H2.48v1.84a.0608.0608 0 01-.06.0617H.06a.061.061 0 01-.0602-.0617v-2.875c.0024-.8428.6673-1.5256 1.4882-1.5278H6.8c2.9823 0 5.4 2.4824 5.4 5.5446 0 3.0623-2.4177 5.5447-5.4 5.5447H2.48v3.372h4.26c3.6796-.0138 6.9517-2.406 8.168-5.9718a.0601.0601 0 01.056-.0411h2.468a.0712.0712 0 01.052.0246.0716.0716 0 010 .0534c-1.3243 5.0057-5.7482 8.4815-10.8 8.4854l-5.196-.0082z"
                />
              </g>
              <path
                fill="#FFF"
                d="M35.1604 6.1977c3.2852 0 5.9484 2.6153 5.9484 5.9005s-2.6473 5.9006-5.9484 5.9006h-3.6998c-.5103 0-.909-.3987-.909-.893V7.0907c0-.4945.3827-.8931.893-.8931h3.7158zm0 10.0469c2.3443 0 4.1782-1.834 4.1942-4.1464 0-2.3124-1.8659-4.1463-4.1942-4.1463h-2.8546v8.2927h2.8546zm20.4387 1.7542h-1.9616l-3.6998-8.7392-3.7476 8.7392h-1.9616l4.88-11.4184c.1435-.3508.4784-.5582.8452-.5582.3668 0 .6698.2074.8133.5582l4.832 11.4184zM68.1406 6.1977v1.7542h-4.1463v10.0469h-1.7542V7.9518h-4.1464V6.1978h10.047zm13.8652 11.801h-1.9615l-3.6998-8.7391-3.7477 8.7392h-1.9615l4.88-11.4184c.1434-.3508.4783-.5582.8451-.5582.3668 0 .6698.2074.8134.5582l4.832 11.4184zm9.6314-11.801c2.2805 0 4.1304 1.8977 4.1304 4.1782 0 2.2964-1.8499 4.0825-4.1304 4.0825h-3.4765v3.5404h-1.7542V7.1226c0-.5103.4305-.925.9409-.925h4.2898zm0 6.5065c1.3237 0 2.3762-1.0206 2.3762-2.3283 0-1.3236-1.0844-2.424-2.3762-2.424h-3.4765v4.7523h3.4765zm18.0094 5.2946h-1.9615l-3.6998-8.7392-3.7477 8.7392h-1.9615l4.8799-11.4184c.1435-.3508.4784-.5582.8452-.5582.3668 0 .6698.2074.8133.5582l4.8321 11.4184zm9.2946.1754c-3.349 0-6.06-2.759-6.06-6.1398 0-3.3968 2.711-6.06 6.06-6.06 1.834 0 3.4925.8452 4.6088 2.1688l-1.3236 1.1483c-.7974-.9728-1.9616-1.5788-3.2852-1.5788-2.3762 0-4.3058 1.8977-4.3058 4.3217 0 2.4081 1.9296 4.4015 4.3058 4.4015 1.4512 0 2.727-.6379 3.5084-1.7701l1.3715 1.0684c-1.0844 1.531-2.8705 2.44-4.88 2.44zm9.3452-.1754V6.1977h1.7542v11.801h-1.7542zm7.4475 0l-5.183-5.3424a.9475.9475 0 01-.2073-.59.9054.9054 0 01.1914-.5582l5.183-5.3105h2.3442l-5.6614 5.8527 5.757 5.9484h-2.424zm15.9634-10.047h-7.32v3.2693h6.8415v1.7542h-6.8414v3.2693h7.3199v1.7542h-8.1332c-.5104 0-.941-.4306-.941-.941V7.1227c0-.5103.4306-.925.941-.925h8.1332V7.952zm13.861-1.7541v1.7542h-4.1463v10.0469h-1.7542V7.9518h-4.1463V6.1978h10.0469z"
              />
            </svg>
          </a>

          <ul class="hidden mb-7 xl:mb-0 xl:flex xl:flex-row xl:gap-7">
            <li
              class="border-b border-gray-600 group xl:relative xl:flex xl:items-center xl:border-none"
            >
              <button
                class="outline-offset-x-[5px] xl:text-2sm w-full cursor-pointer bg-transparent text-left text-base font-normal text-white hover:text-white xl:rounded-sm xl:text-center xl:leading-none xl:text-white/80 xl:hover:text-red-500"
                aria-expanded="false"
                aria-controls="why-datapacket-section"
                tabindex="0"
              >
                <label
                  for="why-datapacket-section"
                  class="flex text-[15px] items-center group justify-between gap-x-2 py-5 xl:py-2.5"
                  >Why DataPacket
                  <span
                    class="block w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="w-5 h-5"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m7 10l5 5l5-5"
                      />
                    </svg>
                  </span>
                </label>
              </button>
              <div
                class="hidden focus-visible:outline group-hover:flex focus-visible:outline-red-500 xl:absolute xl:-left-7 xl:top-full xl:z-50 xl:motion-safe:duration-200"
              >
                <input
                  type="checkbox"
                  id="why-datapacket-input"
                  aria-label="Why DataPacket section"
                  class="sr-only peer"
                  tabindex="-1"
                  readonly=""
                />
                <ul
                  id="why-datapacket-section"
                  class="flex-col hidden mb-5 overflow-hidden rounded-tr rounded-br peer-checked:flex xl:relative xl:z-20 xl:mb-0 xl:flex xl:shadow"
                >
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-tl xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/network"
                      >Premium network<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 75 75"
                        >
                          <path
                            d="M19.525 43.222v9.31a2.65 2.65 0 0 0 2.482 2.645l.168.005h9.31v2h-9.31a4.65 4.65 0 0 1-4.645-4.437l-.005-.213v-9.31h2ZM31.485 18.981v2h-9.31a2.65 2.65 0 0 0-2.645 2.482l-.005.168v9.31h-2v-9.31a4.65 4.65 0 0 1 4.437-4.645l.213-.005h9.31ZM55.726 43.222v9.31a4.65 4.65 0 0 1-4.437 4.645l-.213.005h-9.31v-2h9.31a2.65 2.65 0 0 0 2.645-2.482l.005-.168v-9.31h2ZM51.076 18.981a4.65 4.65 0 0 1 4.645 4.437l.005.213v9.31h-2v-9.31a2.65 2.65 0 0 0-2.482-2.645l-.168-.005h-9.31v-2h9.31Z"
                            fill="#080F2C"
                          />
                          <path
                            d="M40.464 26a2.18 2.18 0 0 0 2.18-2.18v-7.677a2.18 2.18 0 0 0-2.18-2.18h-7.677a2.18 2.18 0 0 0-2.18 2.18v7.676a2.18 2.18 0 0 0 2.18 2.18h7.677Zm.18-9.857v7.676l-.01.057a.18.18 0 0 1-.17.123h-7.677l-.056-.009a.18.18 0 0 1-.124-.17v-7.677l.01-.057a.18.18 0 0 1 .17-.123h7.677l.057.009a.18.18 0 0 1 .123.17Zm-16.1 25.798a2.18 2.18 0 0 1-2.18 2.18h-7.677a2.18 2.18 0 0 1-2.18-2.18v-7.676a2.18 2.18 0 0 1 2.18-2.18h7.676a2.18 2.18 0 0 1 2.18 2.18v7.676Zm-2 0v-7.676a.18.18 0 0 0-.124-.171l-.057-.01h-7.676a.18.18 0 0 0-.17.124l-.01.057v7.676c0 .08.052.147.123.17l.057.01h7.676a.18.18 0 0 0 .171-.123l.01-.057Zm20.1 18.079a2.18 2.18 0 0 1-2.18 2.18h-7.677a2.18 2.18 0 0 1-2.18-2.18v-7.676a2.18 2.18 0 0 1 2.18-2.18h7.677a2.18 2.18 0 0 1 2.18 2.18v7.676Zm-2 0v-7.676a.18.18 0 0 0-.123-.171l-.057-.01h-7.677a.18.18 0 0 0-.17.124l-.01.057v7.676c0 .08.052.147.123.17l.057.01h7.677a.18.18 0 0 0 .17-.123l.01-.057Zm20.102-18.077a2.18 2.18 0 0 1-2.18 2.18h-7.68a2.18 2.18 0 0 1-2.18-2.18v-7.68a2.18 2.18 0 0 1 2.18-2.18h7.68a2.18 2.18 0 0 1 2.18 2.18v7.68Zm-2 0v-7.68a.18.18 0 0 0-.123-.17l-.057-.01h-7.68a.18.18 0 0 0-.17.123l-.01.057v7.68c0 .08.052.147.123.17l.057.01h7.68a.18.18 0 0 0 .17-.123l.01-.057Z"
                            fill="url(#a)"
                          />
                          <defs>
                            <linearGradient
                              id="a"
                              x1="12.507"
                              y1="38.536"
                              x2="60.746"
                              y2="38.536"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4763FF" />
                              <stop offset="1" stop-color="#55F8A7" />
                            </linearGradient>
                          </defs>
                        </svg> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/client-experience"
                      >Exceptional client service<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 75 75"
                        >
                          <g>
                            <path
                              d="M26.721 36.666a5.885 5.885 0 0 0-2.747-.714l-.313.008a5.824 5.824 0 0 0-1.513.284l-.1.035h-.035l-.36.115-.956.288-4.502 1.296-2.966.839a1 1 0 0 0 .542 1.925l4.487-1.272 2.715-.785 1.352-.406h.084l.175-.067.267-.093c.36-.11.735-.167 1.113-.167.687.007 1.37.203 1.967.566l.097.052.278.13 1.246.593 2.244 1.085 3.014 1.48 3.166 1.57 3.364 1.682.044.038.1.054.142.085a1.777 1.777 0 0 1 .51 2.449c-.489.8-1.474.991-2.518.49l-2.556-1.112-.11-.04a1 1 0 0 0-.688 1.874l2.522 1.097.195.088c1.472.63 3.065.464 4.16-.507l.406.286.095.059.132.063c.314.129.666.129.98 0l.032-.015 11.939-4.915.165-.06a1.827 1.827 0 0 1 1.022-.023 1.755 1.755 0 0 1 1.256 1.28l.03.15c.123.75-.238 1.5-.911 1.867L41.962 55.88l-.057.021-.105.046-.182.081a2.393 2.393 0 0 1-1.908-.058l-.29-.136-.06.01-17.437-7.372-8.74 2.913-.108.043a1 1 0 0 0-.524 1.222l.044.108a1 1 0 0 0 1.221.524l8.024-2.675 17.003 7.19.162.047.083.036a4.393 4.393 0 0 0 3.378-.038l.158-.075.09-.031.124-.056 14.394-7.6.18-.105a3.796 3.796 0 0 0 1.697-4.156 3.752 3.752 0 0 0-2.681-2.731 3.826 3.826 0 0 0-2.471.169l-11.604 4.775-.118-.083c.22-.674.25-1.413.068-2.122l-.063-.217a3.777 3.777 0 0 0-1.616-2.06l-.107-.061-.075-.053-.093-.056-4.55-2.274-3.13-1.548-2-.98-2.257-1.092-1.502-.712-.189-.109Z"
                              fill="#080F2C"
                            />
                            <path
                              d="M30.758 24c0-3.615 1.779-6.553 4.945-7.598a7.98 7.98 0 0 1 7.99 1.787l.133.13.15-.145a7.96 7.96 0 0 1 5.15-2.152l.29-.006c4.349.018 7.613 3.533 7.613 7.985 0 .734-.128 1.484-.374 2.247-.838 2.596-3.002 5.27-6.085 7.96a49.151 49.151 0 0 1-4.292 3.327l-.596.407-.284.19-.536.35-.333.21-.733.446-.516-.312-.571-.36c-2.221-1.431-4.645-3.252-6.78-5.31-3.256-3.14-5.171-6.21-5.171-9.155Zm13.066-2.47-.805-1.094a5.979 5.979 0 0 0-6.689-2.135c-2.277.752-3.572 2.89-3.572 5.7 0 2.258 1.66 4.92 4.559 7.714 2.027 1.955 4.354 3.703 6.48 5.073l.236-.152.533-.354.572-.39a47.175 47.175 0 0 0 4.117-3.19c2.833-2.473 4.796-4.898 5.497-7.069a5.32 5.32 0 0 0 .277-1.632c0-3.381-2.406-5.972-5.615-5.985a5.956 5.956 0 0 0-4.784 2.421l-.806 1.093Z"
                              fill="url(#a)"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="a"
                              x1="30.758"
                              y1="27.787"
                              x2="57.029"
                              y2="27.787"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#4763FF" />
                              <stop offset="1" stop-color="#55F8A7" />
                            </linearGradient>
                          </defs>
                        </svg> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/ddos-protection"
                      >Built-in DDoS protection<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <svg
                          width="45"
                          height="45"
                          viewBox="0 0 75 75"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              x1="-1.7246%"
                              y1="49.9401%"
                              x2="101.7246%"
                              y2="49.9401%"
                              id="a"
                            >
                              <stop stop-color="#3377DA" offset="0%" />
                              <stop stop-color="#6AE6A7" offset="100%" />
                            </linearGradient>
                          </defs>
                          <g fill="none">
                            <path
                              d="M37.9261 14.8795l-.429-.192-.4288.192a45.1506 45.1506 0 01-18.3973 3.9408l-1.0488.0012v1.0488c0 13.78 3.6182 23.8596 9.6723 30.7788 2.1345 2.4395 4.4264 4.3058 6.7243 5.6737.465.2768.8974.515 1.2918.7176l.4545.226.416.1928c.066.0294.1302.0575.1928.0843l.354.145c.0554.0215.109.0418.1607.0609l.2873.0995.3213.1033.3587-.1156.0742-.0258c.947-.3367 2.2336-.9514 3.7358-1.914 2.3017-1.4746 4.5534-3.431 6.6209-5.9347 5.7125-6.9179 9.091-16.7894 9.091-30.0918v-1.0487l-1.0487-.0013a45.1942 45.1942 0 01-18.403-3.9408zm-.429 2.1044l.2224.098a47.2943 47.2943 0 0017.186 3.8153l.3637.0087-.0032.3018c-.2166 12.1438-3.3936 21.114-8.5985 27.4173-1.924 2.33-4.0108 4.143-6.1345 5.5037-.776.4972-1.5136.905-2.1965 1.2313l-.3725.1724-.3278.1413-.139.0562-.387-.1625c-.6046-.2654-1.2832-.6121-2.0173-1.0491-2.1142-1.2585-4.2345-2.9851-6.218-5.252l-.2884-.3346c-5.3478-6.2944-8.6323-15.354-8.8525-27.7234l-.0048-.3024.3649-.0086a47.2506 47.2506 0 0017.1813-3.8155l.2218-.0979z"
                              fill="#515982"
                            />
                            <path
                              d="M46.6011 28.1613c.4145-.4056 1.0793-.3983 1.4848.0162.3744.3826.397.9785.0723 1.3869l-.0885.098-13.1414 12.8578-6.0108-6.1289c-.406-.414-.3996-1.0788.0144-1.4849.3822-.3748.978-.398 1.3868-.0738l.098.0883 4.5415 4.631L46.601 28.1613z"
                              fill="url(#a)"
                            />
                          </g>
                        </svg> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-bl xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/hardware"
                      >Latest hardware<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="45"
                          height="45"
                          viewBox="0 0 75 75"
                        >
                          <defs>
                            <linearGradient
                              id="a"
                              x1="-1.725%"
                              x2="101.725%"
                              y1="49.94%"
                              y2="49.94%"
                            >
                              <stop offset="0%" stop-color="#3377DA" />
                              <stop offset="100%" stop-color="#6AE6A7" />
                            </linearGradient>
                          </defs>
                          <path
                            fill="#616990"
                            d="M22.603 34.737v7.275h-2v-7.275zM53.673 34.737v7.275h-2v-7.275z"
                          />
                          <path
                            fill="url(#a)"
                            d="M24.0663 25.962c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5c-.8285 0-1.5-.6716-1.5-1.5s.6715-1.5 1.5-1.5zm26.374.5c.5522 0 1 .4477 1 1 0 .5128-.386.9355-.8834.9933l-.1166.0067H28.9405c-.5523 0-1-.4477-1-1 0-.5129.386-.9355.8834-.9933l.1166-.0067h21.4998zm-26.374 21.325c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5c-.8285 0-1.5-.6716-1.5-1.5s.6715-1.5 1.5-1.5zm26.374.5c.5522 0 1 .4477 1 1 0 .5128-.386.9355-.8834.9933l-.1166.0067H28.9405c-.5523 0-1-.4477-1-1 0-.5129.386-.9355.8834-.9933l.1166-.0067h21.4998z"
                          />
                          <path
                            fill="#515982"
                            d="M56.0234 20.0677H18.0176c-1.1046 0-2 .8954-2 2v10.715c0 1.1045.8954 2 2 2h38.0058c1.1046 0 2-.8955 2-2v-10.715c0-1.1046-.8954-2-2-2zm-38.0058 2h38.0058v10.715H18.0176v-10.715zM56.0234 41.755H18.0176c-1.1046 0-2 .8954-2 2v11.1773c0 1.1046.8954 2 2 2h38.0058c1.1046 0 2-.8954 2-2V43.755c0-1.1046-.8954-2-2-2zm-38.0058 2h38.0058v11.1773H18.0176V43.755z"
                          />
                        </svg> </span
                    ></a>
                  </li>
                </ul>
              </div>
            </li>

            <li
              class="border-b border-gray-600 group xl:relative xl:flex xl:items-center xl:border-none"
            >
              <button
                class="outline-offset-x-[5px] xl:text-2sm w-full cursor-pointer bg-transparent text-left text-base font-normal text-white hover:text-white xl:rounded-sm xl:text-center xl:leading-none xl:text-white/80 xl:hover:text-red-500"
                aria-expanded="false"
                aria-controls="locations-section"
                tabindex="0"
              >
                <label
                  for="locations-input"
                  class="flex items-center text-[15px] group justify-between gap-x-2 py-5 xl:py-2.5"
                  >Locations
                  <span
                    class="block w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="w-5 h-5"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m7 10l5 5l5-5"
                      />
                    </svg>
                  </span>
                </label>
              </button>
              <div
                class="hidden group-hover:flex focus-visible:outline focus-visible:outline-red-500 xl:absolute xl:-left-7 xl:top-full xl:z-50 xl:motion-safe:duration-200"
              >
                <input
                  type="checkbox"
                  id="locations-input"
                  aria-label="Locations section"
                  class="sr-only peer"
                  tabindex="-1"
                  readonly=""
                />
                <ul
                  id="locations-section"
                  class="flex-col hidden mb-5 overflow-hidden rounded-tr rounded-br hover:overflow-visible hover:rounded-none peer-checked:flex xl:relative xl:z-20 xl:mb-0 xl:flex xl:shadow"
                >
                  <li
                    class="group last:border-none xl:border-b xl:border-gray-200"
                  >
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-tl xl:bg-white xl:py-7 xl:pl-7 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/datacenters?region=eu"
                      >Europe</a
                    >
                    <span
                      class="absolute group-hover:flex bottom-0 left-full top-0 z-0 hidden min-w-[420px] basis-[420px] overflow-hidden rounded-r border-l bg-white xl:shadow xl:group-hover/submenu:block"
                    >
                      <img
                        src="/src/assets/europe map.png"
                        alt="WorldMap"
                        class="absolute inset-0 w-full"
                      />
                    </span>
                  </li>
                  <li
                    class="group last:border-none xl:border-b xl:border-gray-200"
                  >
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-7 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/datacenters?region=na"
                      >North America</a
                    >
                    <span
                      class="absolute bottom-0 group-hover:flex left-full top-0 z-0 hidden min-w-[420px] basis-[420px] overflow-hidden rounded-r border-l bg-white xl:shadow xl:group-hover/submenu:block"
                    >
                      <img
                        src="/src/assets/northamerica.png"
                        alt="WorldMap"
                        class="absolute inset-0 w-full"
                      />
                    </span>
                  </li>
                  <li
                    class="group last:border-none xl:border-b xl:border-gray-200"
                  >
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-7 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/datacenters?region=ap"
                      >Asia-Pacific</a
                    >
                    <span
                      class="absolute bottom-0 group-hover:flex left-full top-0 z-0 hidden min-w-[420px] basis-[420px] overflow-hidden rounded-r border-l bg-white xl:shadow xl:group-hover/submenu:block"
                    >
                      <img
                        src="/src/assets/asiapacific.png"
                        alt="WorldMap"
                        class="absolute inset-0 w-full"
                      />
                    </span>
                  </li>
                  <li
                    class="group last:border-none xl:border-b xl:border-gray-200"
                  >
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-7 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/datacenters?region=la"
                      >Latin America</a
                    >
                    <span
                      class="absolute bottom-0 group-hover:flex left-full top-0 z-0 hidden min-w-[420px] basis-[420px] overflow-hidden rounded-r border-l bg-white xl:shadow xl:group-hover/submenu:block"
                    >
                      <img
                        src="/src/assets/latinamer.png"
                        alt="WorldMap"
                        class="absolute inset-0 w-full"
                      />
                    </span>
                  </li>
                  <li
                    class="group last:border-none xl:border-b xl:border-gray-200"
                  >
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-bl xl:bg-white xl:py-7 xl:pl-7 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/datacenters?region=mea"
                      >Middle East &amp; Africa</a
                    >
                    <span
                      class="absolute group-hover:flex bottom-0 left-full top-0 z-0 hidden min-w-[420px] basis-[420px] overflow-hidden rounded-r border-l bg-white xl:shadow xl:group-hover/submenu:block"
                    >
                      <img
                        src="/src/assets/middeleas aff.png"
                        alt="WorldMap"
                        class="absolute inset-0 w-full"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </li>

            <li
              class="border-b border-gray-600 group xl:relative xl:flex xl:items-center xl:border-none"
            >
              <button
                class="outline-offset-x-[5px] xl:text-2sm w-full cursor-pointer bg-transparent text-left text-base font-normal text-white hover:text-white xl:rounded-sm xl:text-center xl:leading-none xl:text-white/80 xl:hover:text-red-500"
                aria-expanded="false"
                aria-controls="use-cases-section"
                tabindex="0"
              >
                <label
                  for="use-cases-input"
                  class="flex items-center text-[15px] justify-between gap-x-2 group py-5 xl:py-2.5"
                  >Use cases<span
                    class="block w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="w-5 h-5"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m7 10l5 5l5-5"
                      />
                    </svg>
                  </span>
                </label>
              </button>
              <div
                class="hidden group-hover:flex focus-visible:outline focus-visible:outline-red-500 xl:absolute xl:-left-7 xl:top-full xl:z-50 xl:motion-safe:duration-200"
              >
                <input
                  type="checkbox"
                  id="use-cases-input"
                  aria-label="Use cases section"
                  class="sr-only peer"
                  tabindex="-1"
                  readonly=""
                />
                <ul
                  id="use-cases-section"
                  class="flex-col hidden mb-5 overflow-hidden rounded-tr rounded-br peer-checked:flex xl:relative xl:z-20 xl:mb-0 xl:flex xl:shadow"
                >
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-tl xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/solutions/video-streaming"
                      >Video streaming<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img src="/src/assets/video.svg" alt="" class="" />
                      </span>
                    </a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/solutions/gaming"
                      >Gaming companies<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img
                          src="/src/assets/game.svg"
                          alt=""
                          class=""
                        /> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/solutions/vpn"
                      >VPN providers<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img src="/src/assets/vpn.svg" alt="" class="" /> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/solutions/cdn"
                      >Content Delivery<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img
                          src="/src/assets/nomore.svg"
                          alt=""
                          class=""
                        /> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-bl xl:bg-white xl:py-7 xl:pl-7 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/use-cases"
                      >More use cases<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        class="pointer-events-none z-10 h-4 w-4 translate-y-[2px] fill-current"
                      >
                        <path
                          d="M10.59 3.577a.833.833 0 0 0-1.18 1.179l4.411 4.41H4.167a.833.833 0 1 0 0 1.667h9.654l-4.41 4.411a.833.833 0 1 0 1.178 1.179l5.833-5.834a.833.833 0 0 0 0-1.178L10.59 3.577Z"
                        ></path></svg
                    ></a>
                  </li>
                </ul>
              </div>
            </li>

            <li
              class="border-b border-gray-600 group xl:relative xl:flex xl:items-center xl:border-none"
            >
              <button
                class="outline-offset-x-[5px] xl:text-2sm w-full cursor-pointer bg-transparent text-left text-base font-normal text-white hover:text-white xl:rounded-sm xl:text-center xl:leading-none xl:text-white/80 xl:hover:text-red-500"
                aria-expanded="false"
                aria-controls="company-section"
                tabindex="0"
              >
                <label
                  for="company-input"
                  class="flex items-center justify-between text-[15px] gap-x-2 group py-5 xl:py-2.5"
                  >Company<span
                    class="block w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      class="w-5 h-5"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m7 10l5 5l5-5"
                      />
                    </svg>
                  </span>
                </label>
              </button>
              <div
                class="hidden group-hover:flex focus-visible:outline focus-visible:outline-red-500 xl:absolute xl:-left-7 xl:top-full xl:z-50 xl:motion-safe:duration-200"
              >
                <input
                  type="checkbox"
                  id="company-input"
                  aria-label="Company section"
                  class="sr-only peer"
                  tabindex="-1"
                  readonly=""
                />
                <ul
                  id="company-section"
                  class="flex-col hidden mb-5 overflow-hidden rounded-tr rounded-br peer-checked:flex xl:relative xl:z-20 xl:mb-0 xl:flex xl:shadow"
                >
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-tl xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/contact"
                      >Contact us<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img
                          src="/src/assets/contactus.svg"
                          alt=""
                          class=""
                        /> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/about"
                      >About DataPacket<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img
                          src="/src/assets/about.svg"
                          alt=""
                          class=""
                        /> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/reviews"
                      >Meet our clients<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img
                          src="/src/assets/meet.svg"
                          alt=""
                          class=""
                        /> </span
                    ></a>
                  </li>
                  <li class="last:border-none xl:border-b xl:border-gray-200">
                    <a
                      class="transition-colorBackground relative z-10 flex w-full items-center gap-x-2.5 whitespace-nowrap px-5 py-2.5 text-base text-white/60 duration-200 ease-in-out xl:rounded-bl xl:bg-white xl:py-7 xl:pl-16 xl:pr-7 xl:font-semibold xl:leading-snug xl:text-gray-800/80 xl:hover:bg-gray-100 xl:focus-visible:-outline-offset-2 xl:group-hover/submenu:bg-gray-100"
                      href="/blog"
                      >Blog<span
                        class="absolute hidden w-10 h-10 -translate-y-1/2 left-4 top-1/2 xl:block"
                      >
                        <img
                          src="/src/assets/blog.svg"
                          alt=""
                          class=""
                        /> </span
                    ></a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="border-b border-gray-600 lg:relative lg:hidden">
              <a
                class="outline-offset-x-[5px] xl:text-2sm block w-full cursor-pointer bg-transparent py-5 text-left text-base font-normal hover:text-white xl:rounded-sm xl:text-center xl:leading-none text-[#B8BAC3] xl:hover:text-red-500"
                href="/faq"
                >FAQ</a
              >
            </li>

            <li class="border-b border-gray-600 lg:relative lg:hidden">
              <a
                class="outline-offset-x-[5px] xl:text-2sm flex w-full text-[#747888] cursor-pointer items-center gap-x-2 bg-transparent py-5 text-left text-base font-normal hover:text-white xl:rounded-sm xl:text-center xl:leading-none xl:hover:text-red-500"
                href="https://app.datapacket.com"
                ><svg
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 fill-[#747888] w-4"
                >
                  <path
                    d="M8 7a2.5 2.5 0 0 1 2.495 2.336l.005.164v1a.5.5 0 0 1-.992.09L9.5 10.5v-1a1.5 1.5 0 0 0-1.356-1.493L8 8H4a1.5 1.5 0 0 0-1.493 1.356L2.5 9.5v1a.5.5 0 0 1-.992.09L1.5 10.5v-1a2.5 2.5 0 0 1 2.336-2.495L4 7h4zM6 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                  ></path></svg
                >Log in</a
              >
            </li>
          </ul>

          <div class="flex-wrap hidden gap-4 mt-0 mb-7 lg:flex xl:mb-0">
            <a
              class="flex-grow rounded border border-gray-100/30 px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:border-white"
              href="/pricing/contact-sales"
              >Contact sales
            </a>
            <a
              class="flex-grow flex justify-center items-center px-5 py-2.5 rounded text-[14px] font-semibold text-center bg-[#F83F46] hover:text-[#F83F46] uppercase text-white hover:bg-white transition-all duration-500"
              href="/pricing"
              ><span class="">Configure server</span>
            </a>
          </div>
          <div class="flex lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white hover:text-red-500 transitiona-ll duration-3090"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>

      <!--header-->

      <div class="w-full overflow-hidden relative bg-[#080F2C]">
        <div
          class="lg:max-w-[74rem] lg:w-full sm:max-w-[600px] w-full flex h-fit py-24 lg:pt-24 mx-auto"
        >
          <div
            class="flex items-center h-full pt-10 text-center lg:w-1/2 lg:text-left lg:pr-20"
          >
            <div class="absolute z-30 right-5 top-5 xl:hidden">
              <div class="relative flex-col hidden sm:flex">
                <select
                  name="regions"
                  id="regions"
                  class="block w-full appearance-none text-ellipsis rounded border-2 border-gray-600 bg-gray-800 py-2.5 pl-4 pr-8 text-base text-white placeholder:text-gray-400 focus:border-blue-500/80 focus:ring-blue-500/30"
                >
                  <option value="default" disabled="">Select region</option>
                  <option value="EU">Europe</option>
                  <option value="NA">North America</option>
                  <option value="AP">Asia-Pacific</option>
                  <option value="LA">Latin America</option>
                  <option value="MEA">Middle East &amp; Africa</option></select
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  class="absolute text-blue-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 size-5"
                >
                  <path
                    d="M4.47 6.97a.75.75 0 0 1 1.06 0L10 11.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06Z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="">
              <h1
                class="text-white leading-snug text-3xl lg:text-[3.2rem] font-semibold"
              >
                Dedicated servers in 51 global locations with local routing
              </h1>
              <p class="text-[#CCCED7] pt-8 text-lg">
                <span class="font-semibold"> 3779 </span>
                available servers with
                <span class="font-semibold"> same‑day </span>
                <br />
                delivery and
                <span class="font-semibold"> exceptional </span>
                client service.
              </p>
            </div>
          </div>
          <div class="relative hidden lg:flex">
            <div class="absolute -top-[400px] -right-[1850px]">
              <img
                src="/src/assets/map.svg"
                alt=""
                width="2600"
                height="4200"
                class="relative z-20"
              />
            </div>
            <div class="absolute top-0 z-40 left-14">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >Seattle</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute z-40 left-10 -top-16">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >Vancouver</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute left-80 z-40 top-[50%]">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >Dallas</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute left-60 z-40 top-[16%]">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >Denver</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute left-60 z-40 top-[70%]">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >Los Angeles</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute left-[450px] z-40 top-[80%]">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >Miami</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute left-[350px] z-40 top-[30%]">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >Chicago</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="absolute left-[450px] z-40 top-[20%]">
              <div class="flex items-center whitespace-nowrap">
                <span class="relative flex h-1.5 w-1.5"
                  ><span
                    class="absolute inline-flex h-full w-full rounded-full bg-[#4763FE] opacity-80"
                  ></span>
                  <span
                    class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4763FE]"
                  ></span>
                </span>
                <div class="relative flex flex-row-reverse gap-0">
                  <span
                    class="z-10 whitespace-nowrap py-1 px-3 rounded border border-gray-600 relative bg-[#080F2C] text-center text-sm font-semibold leading-none text-white shadow-dark transition-opacity delay-150 duration-300"
                    >New York</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="fill-[#080F2C] w-6 h-6 -mr-[10px]"
                    stroke="#4b5563 "
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m14 7l-5 5l5 5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-40 pr-6 -top-10">
          <ul class="flex-col items-end hidden text-right xl:flex">
            <div
              class="flex text-[#6D7385] transition-all duration-300 cursor-pointer hover:text-red-500 group items-center gap-2"
            >
              <h3 class="font-bold transition-all duration-300">Europe</h3>
              <span class="relative flex w-2 h-2"
                ><span
                  class="absolute border-gray-600 inline-flex h-full w-full animate-ping rounded-full group-hover:bg-[#F83F46] opacity-80"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 border-gray-600 transition-all duration-300 border-2 group-hover:border-none rounded-full group-hover:bg-[#F83F46]"
                ></span>
              </span>
            </div>
            <div class="bg-gray-600 h-6 w-[2px] mr-[2.5px] -mt-2"></div>
            <div
              class="flex items-center gap-2 -mt-2 text-red-500 transition-all duration-300 cursor-pointer group"
            >
              <h3 class="font-bold transition-all duration-300">
                North America
              </h3>
              <span class="relative flex w-2 h-2"
                ><span
                  class="absolute border-gray-600 inline-flex h-full w-full animate-ping rounded-full bg-[#F83F46] opacity-80"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 border-gray-600 transition-all duration-300 border-none rounded-full bg-[#F83F46]"
                ></span>
              </span>
            </div>
            <div class="bg-gray-600 h-6 w-[2px] mr-[2.5px] -mt-2"></div>
            <div
              class="flex text-[#6D7385] -mt-2 transition-all duration-300 cursor-pointer hover:text-red-500 group items-center gap-2"
            >
              <h3 class="font-bold transition-all duration-300">
                Asia Pacific
              </h3>
              <span class="relative flex w-2 h-2"
                ><span
                  class="absolute border-gray-600 inline-flex h-full w-full animate-ping rounded-full group-hover:bg-[#F83F46] opacity-80"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 border-gray-600 transition-all duration-300 border-2 group-hover:border-none rounded-full group-hover:bg-[#F83F46]"
                ></span>
              </span>
            </div>
            <div class="bg-gray-600 h-6 w-[2px] mr-[2.5px] -mt-2"></div>
            <div
              class="flex text-[#6D7385] -mt-2 transition-all duration-300 cursor-pointer hover:text-red-500 group items-center gap-2"
            >
              <h3 class="font-bold transition-all duration-300">
                Latin America
              </h3>
              <span class="relative flex w-2 h-2"
                ><span
                  class="absolute border-gray-600 inline-flex h-full w-full animate-ping rounded-full group-hover:bg-[#F83F46] opacity-80"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 border-gray-600 transition-all duration-300 border-2 group-hover:border-none rounded-full group-hover:bg-[#F83F46]"
                ></span>
              </span>
            </div>
            <div class="bg-gray-600 h-6 w-[2px] mr-[2.5px] -mt-2"></div>
            <div
              class="flex text-[#6D7385] -mt-2 transition-all duration-300 cursor-pointer hover:text-red-500 group items-center gap-2"
            >
              <h3 class="font-bold transition-all duration-300">
                Middle East & Africa
              </h3>
              <span class="relative flex w-2 h-2"
                ><span
                  class="absolute border-gray-600 inline-flex h-full w-full animate-ping rounded-full group-hover:bg-[#F83F46] opacity-80"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 border-gray-600 transition-all duration-300 border-2 group-hover:border-none rounded-full group-hover:bg-[#F83F46]"
                ></span>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="px-4 py-32 sm:px-2">
      <div
        class="lg:max-w-[74rem] sm:max-w-[600px] w-full mx-auto grid lg:grid-cols-2 gap-6"
      >
        <div class="">
          <h6 class="text-[#6157BB] font-semibold tracking-[2px]">
            NEWEST HARDWARE
          </h6>
          <h1 class="pt-10 text-4xl font-semibold leading-snug">
            Latest generation <br />
            servers for all workloads
          </h1>
          <p class="text-[#283149] leading-[30px] py-8 xl:pr-28">
            DataPacket’s stock offers a wide array of configuration choices
            including the latest CPUs. Coupled with an overprovisioned network,
            even large‑scale and complex deployments are executed with ease.
          </p>
          <ul class="flex">
            <div
              class="w-1.5 relative z-20 sm:flex hidden rounded-full h-[130px]"
              style="
                border: 1px solid transparent;

                /* Gradient border */
                border-image: linear-gradient(to right, #48b3ca, #7fe2c1);
                border-image-slice: 1;
                border-radius: 50px;
              "
            ></div>
            <div class="-mt-2 flex flex-col gap-y-5 z-40 -ml-[7px]">
              <div class="relative flex items-center gap-8">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3 class="tracking-wide sm:text-auto text-[14px]">
                  <span
                    class="text-[#080F2C] sm:whitespace-normal whitespace-nowrap font-semibold ml-6"
                    >Same-day delivery</span
                  >
                  for most orders
                </h3>
              </div>

              <div class="relative flex items-center gap-8 mt-">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3
                  class="tracking-wide sm:text-auto text-[14px] ml-6 flex items-end gap-1"
                >
                  <span class="text-[#080F2C] font-semibold"
                    >Unshared 1×10GE – 2×100GE uplink</span
                  >
                  <p
                    title=" Kashif Sulehri Kashif Sulehri Shaheer Sulehri Shaheer Sulehri Sanwal Sulehri Sanwal Sulehri Kashif Sulehri Kashif Sulehri Shaheer Sulehri Shaheer Sulehri Sanwal Sulehri Sanwal Sulehri"
                    class="underline decoration-dotted title:bg-gary-900 underline-offset-4"
                  >
                    per server
                  </p>
                </h3>
              </div>

              <div class="relative flex items-center gap-8">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3 class="tracking-wide sm:text-auto text-[14px] ml-6">
                  <span class="text-[#080F2C] font-semibold"
                    >Bundle offers</span
                  >
                  for more servers in multiple locations
                </h3>
              </div>

              <div class="relative flex items-center gap-8">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3 class="tracking-wide sm:text-auto ml-6 text-[14px]">
                  <span class="text-[#080F2C] font-semibold"
                    >Trial deployments</span
                  >
                  in any location, with no service limitation
                </h3>
              </div>
            </div>
          </ul>

          <button
            class="flex gap-1 mt-10 border-b text-red-500 transition-all duration-300 group font-bold hover:text-[#080F2C] hover:border-[#080F2C] border-red-500 text-[14px] pb-2 items-center"
          >
            BROWSE CONFIGURATIONS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor "
              class="w-4 h-4 group-hover:fill-[#080F2C] transition-all duration-300 fill-red-500"
              viewBox="0 0 20 20"
            >
              <path
                d="M10.59 3.577a.833.833 0 0 0-1.18 1.179l4.411 4.41H4.167a.833.833 0 1 0 0 1.667h9.654l-4.41 4.411a.833.833 0 1 0 1.178 1.179l5.833-5.834a.833.833 0 0 0 0-1.178L10.59 3.577Z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex justify-end mt-6 lg:mt-0">
          <img
            src="/src/assets/hard.webp"
            alt=""
            class="lg:w-[437px] lg:h-[402px]"
          />
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-2">
      <div
        class="lg:max-w-[74rem] sm:max-w-[600px] w-full mx-auto flex lg:flex-row flex-col-reverse gap-6"
      >
        <div class="flex justify-start mt-6 lg:w-1/2 lg:mt-0">
          <img
            src="/src/assets/net.webp"
            alt=""
            class="lg:w-[471px] w-full lg:h-[377px] rounded-2xl"
          />
        </div>
        <div class="flex justify-end lg:w-1/2">
          <div class="lg:pl-20">
            <h6 class="text-[#6157BB] font-semibold tracking-[2px]">
              GLOBAL NETWORK
            </h6>
            <h1 class="pt-10 text-4xl font-semibold leading-snug">
              Backed by low-latency <br />
              180+ Tbps network
            </h1>
            <p class="text-[#283149] leading-[30px] py-8 xl:pr-28">
              Consistently low latency times,
              <span class="font-semibold"> zero packet loss, </span>
              and no saturation during peak times are the results of real‑time
              network monitoring, daily routing adjustments, and the use of
              multiple networks interconnected through DataPacket’s global
              <span class="font-semibold"> private backbone. </span>
            </p>
            <ul class="flex">
              <div
                class="w-1.5 relative z-20 sm:flex hidden rounded-full h-[165px] sm:h-[130px]"
                style="
                  border: 1px solid transparent;

                  /* Gradient border */
                  border-image: linear-gradient(to right, #48b3ca, #7fe2c1);
                  border-image-slice: 1;
                  border-radius: 50px;
                "
              ></div>
              <div class="-mt-2 flex flex-col gap-y-5 z-40 sm:-ml-[7px]">
                <div class="relative flex items-center gap-8">
                  <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                  <a
                    href="#"
                    class="tracking-wide ml-6 sm:text-auto text-[14px] hover:text-red-500 transition-all duration-300"
                  >
                    <span class="text-[#080F2C] font-semibold"
                      >DDoS protected</span
                    >
                    network
                  </a>
                </div>

                <div class="relative flex items-center gap-8 mt-">
                  <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                  <h3
                    class="tracking-wide flex items-end gap-1 ml-6 sm:text-auto text-[14px]"
                  >
                    <span class="text-[#080F2C] font-semibold">Unmetered</span>
                    <p>bandwidth</p>
                  </h3>
                </div>

                <div class="relative flex items-center gap-8">
                  <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                  <h3 class="tracking-wide ml-6 sm:text-auto text-[14px]">
                    <span class="text-[#080F2C] font-semibold"
                      >16 transit carriers</span
                    >
                    and 300+ PNIs
                  </h3>
                </div>

                <div class="relative flex items-center gap-8">
                  <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                  <h3 class="tracking-wide ml-6 sm:text-auto text-[14px]">
                    <span class="text-[#080F2C] font-semibold"
                      >Bandwidth pooling</span
                    >
                    available
                  </h3>
                </div>
              </div>
            </ul>

            <button
              class="flex gap-1 mt-10 border-b text-red-500 transition-all duration-300 group font-bold hover:text-[#080F2C] hover:border-[#080F2C] border-red-500 text-[14px] pb-2 items-center"
            >
              EXPLORE LOCATIONS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor "
                class="w-4 h-4 group-hover:fill-[#080F2C] transition-all duration-300 fill-red-500"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.59 3.577a.833.833 0 0 0-1.18 1.179l4.411 4.41H4.167a.833.833 0 1 0 0 1.667h9.654l-4.41 4.411a.833.833 0 1 0 1.178 1.179l5.833-5.834a.833.833 0 0 0 0-1.178L10.59 3.577Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-32 sm:px-2">
      <div
        class="lg:max-w-[74rem] sm:max-w-[600px] w-full mx-auto grid lg:grid-cols-2 gap-6"
      >
        <div class="">
          <h6 class="text-[#6157BB] font-semibold tracking-[2px]">
            PREMIUM SERVICE
          </h6>
          <h1 class="pt-10 text-4xl font-semibold leading-snug">
            Exceptional client <br />
            service as a standard
          </h1>
          <p class="text-[#283149] leading-[30px] py-8 xl:pr-28">
            Server deployments, routing improvement requests, and even your
            billing inquiries are each handled by a dedicated and experienced
            team. This way, no request gets left behind and you will get focused
            and professional attention.
          </p>
          <ul class="flex">
            <div
              class="w-1.5 sm:flex hidden relative z-20 rounded-full h-[130px]"
              style="
                border: 1px solid transparent;

                /* Gradient border */
                border-image: linear-gradient(to right, #48b3ca, #7fe2c1);
                border-image-slice: 1;
                border-radius: 50px;
              "
            ></div>
            <div class="-mt-2 flex flex-col gap-y-5 z-40 sm:-ml-[7px]">
              <div class="relative flex items-center gap-8">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3 class="tracking-wide ml-6 sm:text-auto text-[14px]">
                  <span class="text-[#080F2C] peer group font-semibold"
                    >Dedicated</span
                  >
                  <a
                    href=""
                    class="transition-all duration-300 peer-hover:text-red-500"
                  >
                    account manager
                  </a>
                </h3>
              </div>

              <div class="relative flex items-center gap-8 mt-">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3
                  class="tracking-wide ml-6 sm:text-auto text-[14px] flex items-end gap-1"
                >
                  <span class="text-[#080F2C] font-semibold">Real-time</span>
                  <p
                    class="underline decoration-dotted title:bg-gary-900 underline-offset-4"
                  >
                    Slack support
                  </p>
                </h3>
              </div>

              <div class="relative flex items-center gap-8">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3 class="tracking-wide ml-6 sm:text-auto text-[14px]">
                  <span class="text-[#080F2C] font-semibold">24/7 </span>
                  tech support
                </h3>
              </div>

              <div class="relative flex items-center gap-8">
                <div class="bg-[#080F2C] absolute rounded-full w-2 h-2"></div>
                <h3 class="tracking-wide ml-6 sm:text-auto text-[14px]">
                  <span class="text-[#080F2C] font-semibold"
                    >No commitment,</span
                  >
                  pay monthly
                </h3>
              </div>
            </div>
          </ul>

          <button
            class="flex text-[12px] gap-1 mt-10 border-b text-red-500 transition-all duration-300 group font-bold hover:text-[#080F2C] hover:border-[#080F2C] border-red-500 sm:text-[14px] pb-2 items-center"
          >
            LEARN ABOUT DATAPACKET’S APPROACH
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor "
              class="w-4 h-4 group-hover:fill-[#080F2C] transition-all duration-300 fill-red-500"
              viewBox="0 0 20 20"
            >
              <path
                d="M10.59 3.577a.833.833 0 0 0-1.18 1.179l4.411 4.41H4.167a.833.833 0 1 0 0 1.667h9.654l-4.41 4.411a.833.833 0 1 0 1.178 1.179l5.833-5.834a.833.833 0 0 0 0-1.178L10.59 3.577Z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex w-full mt-6 lg:justify-end lg:w-auto lg:mt-0">
          <img
            src="/src/assets/premier.webp"
            alt=""
            class="lg:w-[471px] w-full h-full lg:h-[377px] rounded-2xl"
          />
        </div>
      </div>
    </div>

    <div class="bg-[#F3F3F4] w-full">
      <div
        class="lg:max-w-[74rem] sm:max-w-[600px] w-full sm:px-2 px-4 py-12 justify-between mx-auto items-center lg:flex-row flex-col flex gap-14"
      >
        <h5 class="text-[#080F2C] whitespace-nowrap font-semibold">
          Trusted by:
        </h5>
        <div class="flex flex-wrap justify-between w-full gap-10 lg:gap-2">
          <img
            src="/src/assets/discord.svg"
            width="111"
            height="25"
            alt=""
            class=""
          />
          <img
            src="/src/assets/nod.svg"
            width="154"
            height="33"
            alt=""
            class=""
          />
          <img
            src="/src/assets/epeer.svg"
            width="107"
            height="31"
            alt=""
            class=""
          />
          <img
            src="/src/assets/adguard.svg"
            width="118"
            height="27"
            alt=""
            class=""
          />
          <img
            src="/src/assets/esl.svg"
            width="92"
            height="33"
            alt=""
            class=""
          />
          <img
            src="/src/assets/ring.svg"
            width="111"
            height="27"
            alt=""
            class=""
          />
          <img
            src="/src/assets/bunny.svg"
            width="114"
            height="29"
            alt=""
            class=""
          />
        </div>
      </div>
    </div>

    <div class="w-full bg-[#080F2C] py-20 sm:px-2 px-4">
      <div class="lg:max-w-[74rem] sm:max-w-[600px] w-full mx-auto">
        <h1
          class="text-3xl font-semibold leading-snug text-center text-white lg:text-4xl"
        >
          Performance precisely tailored
          <span class="block opacity-20"> for your use case </span>
        </h1>
        <div class="grid w-full gap-6 pt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div
            class="bg-[#F3F3F4] hover:bg-opacity-[20%] transition-all duration-300 cursor-pointer bg-opacity-[10%] rounded-lg group lg:pt-6 pt-3 pb-9 lg:pb-12 px-2 lg:px-4"
          >
            <span class="flex justify-end w-full h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hidden w-6 h-6 text-red-500 fill-red-500 group-hover:flex"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h10m0 0v10m0-10L7 17"
                />
              </svg>
            </span>
            <img src="/src/assets/vid2.svg" alt="" class="-ml-2 lg:ml-0" />
            <h1
              class="py-3 ml-2 text-lg font-semibold text-white lg:pt-3 lg:pb-4 lg:ml-4"
            >
              Video streaming <br />
              platforms
            </h1>
            <p class="ml-2 lg:ml-4 text-[#D1D3DB] leading-[30px]">
              Serve video content to <br class="hidden lg:flex" />
              thousands of <br class="hidden lg:flex" />
              concurrent viewers.
            </p>
          </div>

          <div
            class="bg-[#F3F3F4] bg-opacity-[10%] hover:bg-opacity-[20%] transition-all duration-300 cursor-pointer rounded-lg group lg:pt-6 pt-3 pb-9 lg:pb-12 px-2 lg:px-4"
          >
            <span class="flex justify-end w-full h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hidden w-6 h-6 text-red-500 fill-red-500 group-hover:flex"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h10m0 0v10m0-10L7 17"
                />
              </svg>
            </span>
            <img src="/src/assets/vpn2.svg" alt="" class="-ml-2 lg:ml-0" />
            <h1
              class="py-3 ml-2 text-lg font-semibold text-white lg:pt-3 lg:pb-4 lg:ml-4"
            >
              VPN providers
            </h1>
            <p class="ml-2 lg:ml-4 text-[#D1D3DB] leading-[30px]">
              Enable secure, private, and borderless browsing with rapid
              connection.
            </p>
          </div>

          <div
            class="bg-[#F3F3F4] hover:bg-opacity-[20%] transition-all duration-300 cursor-pointer bg-opacity-[10%] rounded-lg group lg:pt-6 pt-3 pb-9 lg:pb-12 px-2 lg:px-4"
          >
            <span class="flex justify-end w-full h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hidden w-6 h-6 text-red-500 fill-red-500 group-hover:flex"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h10m0 0v10m0-10L7 17"
                />
              </svg>
            </span>
            <img src="/src/assets/game2.svg" alt="" class="-ml-2 lg:ml-0" />
            <h1
              class="py-3 ml-2 text-lg font-semibold text-white lg:pt-3 lg:pb-4 lg:ml-4"
            >
              Gaming companies
            </h1>
            <p class="ml-2 lg:ml-4 text-[#D1D3DB] leading-[30px]">
              Deliver great online gaming experiences to player bases of all
              sizes.
            </p>
          </div>

          <div
            class="bg-[#F3F3F4] hover:bg-opacity-[20%] transition-all duration-300 cursor-pointer bg-opacity-[10%] rounded-lg group lg:pt-6 pt-3 pb-9 lg:pb-12 px-2 lg:px-4"
          >
            <span class="flex justify-end w-full h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hidden w-6 h-6 text-red-500 fill-red-500 group-hover:flex"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h10m0 0v10m0-10L7 17"
                />
              </svg>
            </span>
            <img src="/src/assets/net2.svg" alt="" class="-ml-2 lg:ml-0" />
            <h1
              class="py-3 ml-2 text-lg font-semibold text-white lg:pt-3 lg:pb-4 lg:ml-4"
            >
              Content Delivery
            </h1>
            <p class="ml-2 lg:ml-4 text-[#D1D3DB] leading-[30px]">
              Distribute your content effortlessly without performance or
              traffic restrictions.
            </p>
          </div>
        </div>

        <div class="flex justify-center w-full pt-10">
          <button
            class="flex gap-1 items-center mt-10 border-b text-red-500 transition-all duration-300 group font-bold hover:text-white hover:border-white border-red-500 text-[14px] pb-2"
          >
            SEE ALL USE CASES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor "
              class="w-4 h-4 transition-all duration-300 group-hover:fill-white fill-red-500"
              viewBox="0 0 20 20"
            >
              <path
                d="M10.59 3.577a.833.833 0 0 0-1.18 1.179l4.411 4.41H4.167a.833.833 0 1 0 0 1.667h9.654l-4.41 4.411a.833.833 0 1 0 1.178 1.179l5.833-5.834a.833.833 0 0 0 0-1.178L10.59 3.577Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="px-2 py-20 overflow-hidden bg-white">
      <div class="max-w-[74rem] mx-auto">
        <h1
          class="text-center font-semibold text-4xl leading-snug text-[#080F2C]"
        >
          Why clients appreciate <br />
          working with DataPacket
        </h1>
      </div>
      <div class="mx-auto max-w-7xl">
        <div class="flex items-center justify-end gap-3 pt-10 pb-4 mx-auto">
          <button class="text-gray-800" aria-disabled="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 20 20"
              class="text-gray-800 size-6 hover:text-red-500"
            >
              <path
                d="M9.41 3.577a.833.833 0 1 1 1.18 1.179l-4.411 4.41h9.654a.833.833 0 1 1 0 1.667H6.18l4.41 4.411a.833.833 0 1 1-1.178 1.179l-5.834-5.834a.833.833 0 0 1 0-1.178l5.834-5.834Z"
              ></path>
            </svg>
          </button>
          <button class="text-gray-800" aria-disabled="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 20 20"
              class="text-gray-800 size-6 hover:text-red-500"
            >
              <path
                d="M10.59 3.577a.833.833 0 0 0-1.18 1.179l4.411 4.41H4.167a.833.833 0 1 0 0 1.667h9.654l-4.41 4.411a.833.833 0 1 0 1.178 1.179l5.833-5.834a.833.833 0 0 0 0-1.178L10.59 3.577Z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="flex gap-6 mx-auto overflow-x-scroll lg:ml-14">
          <div class="h-full border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex lg:h-auto h-[310px] w-[320px] lg:w-[670px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/dis3.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >DataPacket's servers and network are top notch, they
                    provided a fantastic user experience to Discord's users —
                    truly one of the few providers we've worked with that could
                    hit our quality bar and provide the level of service we
                    expect.</q
                  >
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile1.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile1.webp" />
                        <img
                          src="/src/assets/profile1.webp"
                          srcset="/src/assets/profile1.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >Mark Smith</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >Director of Infrastructure at Discord</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div class="h-full border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex w-[320px] g:h-auto h-[310px] lg:w-[670px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/ring2.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >We needed to scale all over the world. Since we prefer
                    working with a dedicated teams over big companies like AWS,
                    we've chosen DataPacket. Their servers have well-chosen
                    configurations (plus the custom requests are not a problem),
                    the infrastructure is well built.
                  </q>
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile2.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile2.webp" />
                        <img
                          src="/src/assets/profile2.webp"
                          srcset="/src/assets/profile2.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >Ludovic Rateau</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >CTO at Ringover</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div class="h-full border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex w-[320px] g:h-auto h-[310px] lg:w-[670px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/bunny3.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >DataPacket infrastructure has been able to absorb traffic
                    peaks that very few people heard of. Their customer service
                    is excellent and proves that there are no boundaries in
                    today’s world. I really recommend DataPacket to anybody
                    looking for a high performance.</q
                  >
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile3.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile3.webp" />
                        <img
                          src="/src/assets/profile3.webp"
                          srcset="/src/assets/profile3.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >Dejan Grofelnik Pelzel</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >Founder of bunny.net</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div class="h-full border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex w-[320px] g:h-auto h-[310px] lg:w-[670px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/node3.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >DataPacket enables us to expand our server offerings to
                    additional regions, improving the connectivity and
                    experience for gamers everywhere. With DataPacket, we've
                    been able to offer gamers all around the world a better
                    gaming experience.
                  </q>
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile4.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile4.webp" />
                        <img
                          src="/src/assets/profile4.webp"
                          srcset="/src/assets/profile4.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >James Ross</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >CTO & Co-Founder of Nodecraft</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div class="h-full border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex w-[320px] g:h-auto h-[310px] lg:w-[670px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/dat.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >DataPacket Sets the Gold Standard for Bare Metal Hosting
                    Services - After trying out various bare metal hosting
                    providers for the past 10 years, DataPacket has truly stood
                    out among them, meeting our requirements exceptionally
                    well.</q
                  >
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile5.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile5.webp" />
                        <img
                          src="/src/assets/profile5.webp"
                          srcset="/src/assets/profile5.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >Adam Myllykoski</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >CRO at DatHost</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div class="h-full border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex w-[320px] g:h-auto h-[310px] lg:w-[670px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/orbx.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >Working with the DataPacket team is great. They have a
                    great attention to detail, and are very customer-focused.
                    They tailored their offering to our exact needs. Any
                    questions we have are very quickly answered by their skilled
                    team.
                  </q>
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile6.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile6.webp" />
                        <img
                          src="/src/assets/profile6.webp"
                          srcset="/src/assets/profile6.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >Ben McClintock</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >Head of Technology at Orbx</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div class="border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex w-[320px] lg:w-[670px] lg:h-auto h-[310px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/expeer.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >To build out our global video ingest network, Livepeer
                    needed a partner that could provide dedicated hardware,
                    unmetered bandwidth, and a large global footprint. And he
                    are very tallented and a very very good company he have to
                    nice.</q
                  >
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile7.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile7.webp" />
                        <img
                          src="/src/assets/profile7.webp"
                          srcset="/src/assets/profile7.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >Eli Mallon</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >Lead Software Engineer at Livepeer</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div class="border border-gray-200 rounded-md p-7 xl:p-12">
            <div
              class="flex w-[320px] lg:h-auto h-[310px] lg:w-[670px] flex-col"
            >
              <div class="h-10 mb-7">
                <img
                  src="/src/assets/ad2.svg"
                  alt="discord"
                  width="58"
                  height="13"
                  class="relative block w-auto h-full max-w-full"
                />
              </div>
              <blockquote class="flex flex-col grow">
                <p class="text-paragraph-theme mb-7 grow lg:mb-12 lg:text-lg">
                  <q
                    >The best thing about Datapacket is its excellent support.
                    Whatever question or issue we had, we could talk to the
                    person directly responsible for that in a Slack channel and
                    get our question resolved. He have very talents nice
                    employes .</q
                  >
                </p>
                <footer class="flex items-center">
                  <div class="w-10 mr-12 overflow-hidden rounded-full lg:w-14">
                    <div
                      class="relative overflow-hidden rounded-2xl print:hidden"
                      style="padding-top: 100%"
                    >
                      <div class="absolute inset-0 h-full"></div>
                      <picture>
                        <source
                          srcset="/src/assets/profile8.webp"
                          type="image/webp"
                        />
                        <source srcset="/src/assets/profile8.webp" />
                        <img
                          src="/src/assets/profile8.webp"
                          srcset="/src/assets/profile8.webp"
                          class="absolute inset-0 w-full h-full"
                          alt="Mark Smith"
                        />
                      </picture>
                      <noscript></noscript>
                    </div>
                  </div>
                  <div class="leading-none">
                    <span
                      class="block mb-1 text-base font-semibold text-gray-700"
                      >Andrey Meshkov</span
                    ><cite class="text-sm not-italic leading-snug text-gray-500"
                      >Co-founder and CTO at Adguard</cite
                    >
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center w-full gap-8 px-2 pt-32 pb-20 lg:flex-row"
        >
          <h1 class="font-semibold text-[#080F2C]">
            Ranked among the top server providers in the industry on
          </h1>
          <div class="flex flex-col items-center gap-8 sm:flex-row">
            <a href="#" class="flex items-center gap-4">
              <img src="/src/assets/g.svg" alt="" class="" />
              <span
                class="flex items-center rounded-md border hover:border-[#080F2C] border-gray-300 pl-1 pr-2.5 font-semibold text-gray-700 transition duration-150 group-hover:border-gray-400"
                ><svg
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3 mr-1"
                >
                  <path
                    d="m7.25 4.392 2.426.354a.1.1 0 0 1 .055.17l-1.755 1.71a.1.1 0 0 0-.029.089l.414 2.415a.1.1 0 0 1-.145.106l-2.17-1.141a.1.1 0 0 0-.093 0l-2.17 1.14a.1.1 0 0 1-.144-.105l.414-2.415a.1.1 0 0 0-.029-.089L2.27 4.916a.1.1 0 0 1 .055-.17l2.426-.354a.1.1 0 0 0 .075-.055L5.91 2.139a.1.1 0 0 1 .18 0l1.085 2.198a.1.1 0 0 0 .075.055z"
                  ></path></svg
                >4.7<!-- -->/5</span
              >
            </a>

            <a href="#" class="flex items-center gap-4">
              <img src="/src/assets/trust.svg" alt="" class="" />
              <span
                class="flex items-center rounded-md border hover:border-[#080F2C] border-gray-300 pl-1 pr-2.5 font-semibold text-gray-700 transition duration-150 group-hover:border-gray-400"
                ><svg
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3 mr-1"
                >
                  <path
                    d="m7.25 4.392 2.426.354a.1.1 0 0 1 .055.17l-1.755 1.71a.1.1 0 0 0-.029.089l.414 2.415a.1.1 0 0 1-.145.106l-2.17-1.141a.1.1 0 0 0-.093 0l-2.17 1.14a.1.1 0 0 1-.144-.105l.414-2.415a.1.1 0 0 0-.029-.089L2.27 4.916a.1.1 0 0 1 .055-.17l2.426-.354a.1.1 0 0 0 .075-.055L5.91 2.139a.1.1 0 0 1 .18 0l1.085 2.198a.1.1 0 0 0 .075.055z"
                  ></path></svg
                >4.6<!-- -->/5</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="px-2 pb-28">
      <div
        class="lg:max-w-[74rem] sm:max-w-[600px] w-full mx-auto overflow-hidden bg-[#080F2C] relative py-20 pl-20 rounded-xl"
      >
        <div class="">
          <h1
            class="text-3xl font-semibold leading-snug text-white lg:text-4xl"
          >
            Choose from 3779 <br />
            dedicated servers in stock
          </h1>
          <a
            class="flex-grow flex justify-center items-center px-5 py-2.5 rounded text-[14px] font-semibold text-center bg-[#F83F46] hover:text-[#F83F46] mt-10 uppercase text-white w-fit hover:bg-white transition-all duration-500"
            href="/pricing"
            ><span class="">Configure server</span>
          </a>
        </div>
        <div class="absolute top-0 right-0 flex-col hidden lg:flex">
          <img
            src="/src/assets/rings.svg"
            alt=""
            class="w-[550px] mt-8 h-[350px]"
          />
        </div>
      </div>
    </div>

    <footer class="w-full bg-[#090E23] pt-20">
      <div
        class="max-w-[74rem] mx-auto flex lg:flex-row flex-col px-2 justify-between gap-2"
      >
        <div class="flex-col hidden lg:flex">
          <div class="grid grid-cols-4 w-[796px] gap-4">
            <div class="">
              <h1 class="text-[#879EAD] font-semibold">PRODUCT</h1>
              <div class="flex flex-col pt-10 gap-y-6">
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Network</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Locations</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >DDoS protection</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Client experience</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Server configuration</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >IP transit</a
                >
              </div>
            </div>

            <div class="">
              <h1 class="text-[#879EAD] font-semibold">USE CASES</h1>
              <div class="flex flex-col pt-10 gap-y-6">
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Video streaming</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Gaming companies</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >VPN providers</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Content Delivery</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Use cases overview</a
                >
              </div>
            </div>

            <div class="">
              <h1 class="text-[#879EAD] font-semibold">RESOURCES</h1>
              <div class="flex flex-col pt-10 gap-y-6">
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Looking glass</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Server hardware</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Compare providers</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >FAQ</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >API</a
                >
              </div>
            </div>

            <div class="">
              <h1 class="text-[#879EAD] font-semibold">COMPANY</h1>
              <div class="flex flex-col pt-10 gap-y-6">
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Contact</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >About DataPacket</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Client reviews</a
                >
                <a
                  href="#"
                  class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
                  >Blog</a
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="sm:max-w-[600px] w-full mx-auto items-start flex lg:hidden flex-col gap-8"
        >
          <h1 class="text-[#879EAD] font-semibold">GET INFORMATION</h1>
          <div class="w-full group border-b border-[#23273C] pb-4">
            <div class="flex items-center justify-between w-full gap-4 group">
              <h1 class="font-semibold text-white">PRODUCT</h1>
              <span
                class="w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="w-5 h-5 text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m7 10l5 5l5-5"
                  />
                </svg>
              </span>
            </div>
            <div class="flex-col hidden pt-10 ml-6 group-hover:flex gap-y-6">
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Network</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Locations</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >DDoS protection</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Client experience</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Server configuration</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >IP transit</a
              >
            </div>
          </div>

          <div class="w-full group border-b border-[#23273C] pb-4">
            <div class="flex items-center justify-between w-full gap-4 group">
              <h1 class="font-semibold text-white">USE CASES</h1>
              <span
                class="w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="w-5 h-5 text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m7 10l5 5l5-5"
                  />
                </svg>
              </span>
            </div>
            <div class="flex-col hidden pt-10 ml-6 group-hover:flex gap-y-6">
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Video streaming</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Gaming companies</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >VPN providers</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Content Delivery</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Use cases overview</a
              >
            </div>
          </div>

          <div class="w-full group border-b border-[#23273C] pb-4">
            <div class="flex items-center justify-between w-full gap-4 group">
              <h1 class="font-semibold text-white">RESOURCES</h1>
              <span
                class="w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="w-5 h-5 text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m7 10l5 5l5-5"
                  />
                </svg>
              </span>
            </div>
            <div class="flex-col hidden pt-10 ml-6 group-hover:flex gap-y-6">
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Looking glass</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Server hardware</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Compare providers</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >FAQ</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >API</a
              >
            </div>
          </div>

          <div class="w-full pb-4 group">
            <div class="flex items-center justify-between w-full gap-4 group">
              <h1 class="font-semibold text-white">PRODUCT</h1>
              <span
                class="w-5 h-5 transition-transform duration-200 ease-out opacity-60 group-hover:-mb-2 group-hover:rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="w-5 h-5 text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m7 10l5 5l5-5"
                  />
                </svg>
              </span>
            </div>
            <div class="flex-col hidden pt-10 ml-6 group-hover:flex gap-y-6">
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Contact</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >About DataPacket</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Client reviews</a
              >
              <a
                href="#"
                class="hover:text-white text-[15px] text-[#879EAD] transition-all duration-300"
                >Blog</a
              >
            </div>
          </div>
        </div>

        <div class="lg:w-[300px] lg:mt-0 mt-10 sm:max-w-[600px] w-full mx-auto">
          <h1 class="text-[#879EAD] font-semibold">GET IN TOUCH</h1>
          <div class="border-b border-[#23273C] py-7">
            <a
              href="#"
              class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
              >sales@datapacket.com</a
            >
          </div>
          <div class="border-b border-[#23273C] py-7 flex flex-col gap-1">
            <a
              href="#"
              class="text-white text-[15px] xl:whitespace-nowrap hover:text-red-500 transition-all duration-300"
              >+44 20 3608 1635 (UK)</a
            >
            <a
              href="#"
              class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
              >+1 646 664 1963 (US)</a
            >
          </div>
          <div class="border-b border-[#23273C] py-7">
            <a
              href="#"
              class="text-white text-[15px] hover:text-red-500 transition-all duration-300"
              >Contact sales</a
            >
          </div>
          <div class="flex gap-5 py-7">
            <a href="#" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#6E717D] hover:fill-white w-4 h-4 hover:w-5 hover:h-5 transitio-all"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.09 1h2.715l-5.93 6.777L17.85 17h-5.462L8.11 11.407 3.215 17H.5l6.342-7.25L.15 1h5.6l3.868 5.113L14.09 1Zm-.952 14.375h1.504L4.934 2.54H3.32l9.818 12.836Z"
                ></path>
              </svg>
            </a>
            <a href="#" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#6E717D] hover:fill-white w-4 h-4 hover:w-5 hover:h-5 transitio-all"
                viewBox="0 0 18 18"
              >
                <path
                  d="M2.667 4.368c.92 0 1.667-.754 1.667-1.684C4.334 1.754 3.588 1 2.667 1 1.747 1 1 1.754 1 2.684c0 .93.746 1.684 1.667 1.684Zm9.332 1.684c2.762 0 5.001 2.263 5.001 5.053V17h-3.334v-5.895c0-.93-.746-1.684-1.667-1.684-.92 0-1.667.754-1.667 1.684V17H6.998v-5.895c0-2.79 2.24-5.053 5.001-5.053ZM1 6.895h3.334V17H1V6.895Z"
                ></path>
              </svg>
            </a>
            <a href="#" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#6E717D] hover:fill-white w-4 h-4 hover:w-5 hover:h-5 transitio-all"
                viewBox="0 0 18 18"
              >
                <path
                  d="M13.383 1h-2.395a3.996 3.996 0 0 0-3.993 4v2.4H4.6v3.2h2.395V17h3.194v-6.4h2.396l.798-3.2H10.19V5a.8.8 0 0 1 .799-.8h2.395V1Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="px-2 py-6 my-10 bg-white bg-opacity-10 lg:my-0">
        <div
          class="lg:max-w-[74rem] sm:max-w-[600px] w-full mx-auto items-center justify-center flex sm:flex-row flex-wrap lg:justify-between gap-8 lg:gap-4"
        >
          <div class="flex flex-wrap items-center gap-6 sm:flex-row">
            <img src="/src/assets/visa.svg" alt="" class="" />
            <img src="/src/assets/balls.svg" alt="" class="" />
            <img src="/src/assets/american.svg" alt="" class="" />
            <img src="/src/assets/discover.svg" alt="" class="" />
            <img src="/src/assets/ra.svg" alt="" class="" />
            <img src="/src/assets/transfer.svg" alt="" class="" />
          </div>
          <div class="flex w-1/2 lg:justify-end">
            <img src="/src/assets/ecure.svg" alt="" class="" />
          </div>
        </div>
      </div>

      <div
        class="lg:max-w-[74rem] sm:max-w-[600px] w-full mx-auto py-4 lg:items-center lg:flex-row flex-col flex justify-between gap-4"
      >
        <div
          class="flex flex-col gap-5 px-4 sm:flex-row sm:px-0 lg:items-center"
        >
          <a
            href="#"
            class="text-[#C6C5C6] hover:text-white text-[14px] transition-all duration-200"
            >Terms & conditions</a
          >
          <a
            href="#"
            class="text-[#C6C5C6] hover:text-white text-[14px] transition-all duration-200"
            >Privacy policy</a
          >
          <a
            href="#"
            class="text-[#C6C5C6] hover:text-white text-[14px] transition-all duration-200"
            >Service level agreement</a
          >
        </div>
        <p
          class="text-[#C6C5C6] sm:px-0 px-4 lg:border-none border-t border-[#23273C] lg:pt-0 pt-4 text-[14px]"
        >
          © 2024
          <a href="" class="transition-all duration-200 hover:text-red-500">
            DataCamp Limited
          </a>
          , 9 Coldbath Square, London, United Kingdom. All rights reserved.
        </p>
      </div>
    </footer>

    <div
      class="sm:w-14 sm:h-14 h-8 w-8 rounded-full fixed right-6 bottom-6 bg-[#4976F0] flex items-center group cursor-pointer justify-center hover:w-10 hover:h-10 sm:hover:w-16 transition-all duration-200 sm:hover:h-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 transition-all duration-200 sm:group-hover:w-7 sm:group-hover:h-7 sm:w-6 fill-white sm:h-6"
        viewBox="0 0 28 32"
      >
        <path
          d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup></script>
