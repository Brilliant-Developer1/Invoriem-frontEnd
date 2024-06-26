'use client';
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const ClientsCount = () => {
  const [scrollCount, setScrollCount] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <ScrollTrigger
      onEnter={() => setScrollCount(true)}
      onExit={() => setScrollCount(false)}
      className={`my-20  ${theme === 'dark'? 'bg-teal-700 text-white'  : 'bg-gray-200 text-black'}`}
    >
      <section className="container py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-start sm:justify-items-center pl-10 sm:pl-0 ">
        <div className='min-w-[200px] flex flex-row sm:flex-col items-center sm:items-start sm:justify-center '>
          <div>
            <svg
              className="fill-current text-teal"
              width="44px"
              height="44px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M10,7H3A1,1,0,0,0,2,8V22h9V8A1,1,0,0,0,10,7ZM6,20H4V18H6Zm0-3H4V15H6Zm0-3H4V12H6Zm0-3H4V9H6Zm3,9H7V18H9Zm0-3H7V15H9Zm0-3H7V12H9Zm0-3H7V9H9ZM21.406,5.736,13,2V22h9V6.65A1,1,0,0,0,21.406,5.736ZM20,18H15V16h5Zm0-4H15V12h5Zm0-4H15V8h5Z"></path>
              </g>
            </svg>
          </div>
          <div className="pt-2 pl-5 sm:pl-0">
            <p>
            {scrollCount && <CountUp
              className="text-5xl font-bold"
              start={0}
              end={256}
              duration={2}
              delay={0}
            />}
            </p>
            <p className={`text-xl ${theme === 'dark'? 'text-slate-200' : 'text-gray-600'}`}>PROJECTS</p>
          </div>
        </div>
        <div className='min-w-[200px] flex flex-row sm:flex-col items-center sm:items-start sm:justify-center'>
          <div>
          <svg height="48px" width="48px" viewBox="0 0 512 512" className="fill-current text-teal">
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <path className="st0" d="M157.604,321.598c7.26-2.232,10.041-6.696,10.6-10.046c-0.559-4.469-3.143-6.279-3.986-14.404 c-0.986-9.457,6.91-32.082,9.258-36.119c-0.32-0.772-0.65-1.454-0.965-2.247c-11.002-6.98-22.209-19.602-27.359-42.416 c-2.754-12.197-0.476-24.661,6.121-35.287c0,0-7.463-52.071,3.047-86.079c-9.818-4.726-20.51-3.93-35.164-2.466 c-11.246,1.126-12.842,3.516-21.48,2.263c-9.899-1.439-17.932-4.444-20.348-5.654c-1.392-0.694-14.449,10.89-18.084,20.35 c-11.531,29.967-8.435,50.512-5.5,66.057c-0.098,1.592-0.224,3.178-0.224,4.787l2.68,11.386c0.01,0.12,0,0.232,0.004,0.346 c-5.842,5.24-9.363,12.815-7.504,21.049c3.828,16.934,12.07,23.802,20.186,26.777c5.383,15.186,10.606,24.775,16.701,31.222 c1.541,7.027,2.902,16.57,1.916,26.032C83.389,336.78,0,315.904,0,385.481c0,9.112,25.951,23.978,88.818,28.259 c-0.184-1.342-0.31-2.695-0.31-4.078C88.508,347.268,129.068,330.379,157.604,321.598z"></path>
      <path className="st0" d="M424.5,297.148c-0.986-9.457,0.371-18.995,1.912-26.011c6.106-6.458,11.328-16.052,16.713-31.246 c8.113-2.977,16.35-9.848,20.174-26.774c1.77-7.796-1.293-15.006-6.59-20.2c3.838-12.864,18.93-72.468-26.398-84.556 c-15.074-18.839-28.258-18.087-50.871-15.827c-11.246,1.126-12.844,3.516-21.477,2.263c-1.89-0.275-3.682-0.618-5.41-0.984 c1.658,2.26,3.238,4.596,4.637,7.092c15.131,27.033,11.135,61.27,6.381,82.182c5.67,10.21,7.525,21.944,4.963,33.285 c-5.15,22.8-16.352,35.419-27.348,42.4c-0.551,1.383-2.172,4.214,0.06,7.006c2.039,3.305,2.404,2.99,4.627,5.338 c1.539,7.027,2.898,16.57,1.91,26.032c-0.812,7.85-14.352,14.404-10.533,17.576c3.756,1.581,8.113,3.234,13,5.028 c28.025,10.29,74.928,27.516,74.928,89.91c0,1.342-0.117,2.659-0.291,3.96C486.524,409.195,512,394.511,512,385.481 C512,315.904,428.613,336.78,424.5,297.148z"></path>
      <path className="st0" d="M301.004,307.957c-1.135-10.885,0.432-21.867,2.201-29.956c7.027-7.423,13.047-18.476,19.244-35.968 c9.34-3.427,18.826-11.335,23.23-30.826c2.028-8.976-1.494-17.276-7.586-23.256c4.412-14.81,21.785-83.437-30.398-97.353 c-17.354-21.692-32.539-20.825-58.57-18.222c-12.951,1.294-14.791,4.048-24.731,2.603c-11.4-1.657-20.646-5.117-23.428-6.508 c-1.602-0.803-16.637,12.538-20.826,23.428c-13.27,34.5-9.705,58.159-6.33,76.056c-0.111,1.833-0.264,3.658-0.264,5.511 l3.092,13.11c0.01,0.135,0,0.264,0.004,0.399c-6.726,6.03-10.777,14.752-8.636,24.232c4.402,19.498,13.894,27.404,23.238,30.828 c6.199,17.485,12.207,28.533,19.231,35.956c1.773,8.084,3.34,19.076,2.205,29.966c-4.738,45.626-100.744,21.593-100.744,101.706 c0,12.355,41.4,33.902,144.906,33.902c103.506,0,144.906-21.547,144.906-33.902C401.748,329.549,305.742,353.583,301.004,307.957z M240.039,430.304l-26.276-106.728l32.324,13.453l-1.738,15.619l5.135-0.112L240.039,430.304z M276.209,430.304l-9.447-77.768 l5.135,0.112l-1.738-15.619l32.324-13.453L276.209,430.304z"></path>
    </g>
  </g>
</svg>

          </div>
          <div className="pt-2 pl-5 sm:pl-0">
            <p>
            {scrollCount && <CountUp
              className="text-5xl font-bold"
              start={0}
              end={512}
              duration={2}
              delay={0}
            />}
            </p>
            <p className={`text-xl ${theme === 'dark'? 'text-slate-200' : 'text-gray-600'}`}>HAPPY CLIENTS</p>
          </div>
        </div>
        <div className='min-w-[200px] flex flex-row sm:flex-col items-center sm:items-start sm:justify-center'>
          <div>
          <svg height="40px" width="40px" version="1.1" id="_x32_"  viewBox="0 0 512 512"  className="fill-current text-teal"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path className="st0" d="M364.032,355.035c-3.862-1.446-8.072-3.436-12.35-5.794l-71.57,98.935l-5.09-64.814h-38.033l-5.091,64.814 l-71.569-98.935c-4.408,2.466-8.656,4.487-12.361,5.794c-37.478,13.193-129.549,51.136-123.607,122.21 C25.787,494.301,119.582,512,256.006,512c136.413,0,230.208-17.699,231.634-34.755 C493.583,406.102,401.273,368.961,364.032,355.035z"></path> <path className="st0" d="M171.501,208.271c5.21,29.516,13.966,55.554,25.494,68.38c0,15.382,0,26.604,0,35.587 c0,0.902-0.158,1.852-0.416,2.833l40.41,19.462v28.545h38.033v-28.545l40.39-19.452c-0.258-0.981-0.416-1.932-0.416-2.843 c0-8.983,0-20.205,0-35.587c11.548-12.826,20.304-38.864,25.514-68.38c12.143-4.338,19.096-11.281,27.762-41.658 c9.231-32.358-13.876-31.258-13.876-31.258c18.69-61.873-5.922-120.022-47.124-115.753c-28.426-49.73-123.627,11.36-153.48,7.102 c0,17.055,7.112,29.842,7.112,29.842c-10.379,19.69-6.378,58.951-3.446,78.809c-1.704-0.03-22.602,0.188-13.728,31.258 C152.405,196.99,159.338,203.934,171.501,208.271z"></path> </g> </g></svg>

          </div>
          <div className="pt-2 pl-5 sm:pl-0">
            <p>
            {scrollCount && <CountUp
              className="text-5xl font-bold"
              start={0}
              end={365}
              duration={2}
              delay={0}
            />}
            </p>
            <p className={`text-xl ${theme === 'dark'? 'text-slate-200' : 'text-gray-600'}`}>QUALIFIED STUFF</p>
          </div>
        </div>
        <div className='min-w-[200px] flex flex-row sm:flex-col items-center sm:items-start sm:justify-center'>
          <div>
          <svg className="fill-current text-teal" width="44px" height="44px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tools</title> <path d="M27.783 7.936c0.959 2.313 0.502 5.074-1.379 6.955-2.071 2.071-5.201 2.395-7.634 1.022l-1.759 1.921 1.255 1.26 0.75-0.75c0.383-0.384 1.005-0.384 1.388 0l6.082 6.144c0.384 0.383 0.384 1.005 0 1.388l-2.776 2.776c-0.383 0.384-1.005 0.384-1.388 0l-6.082-6.144c-0.384-0.383-0.384-1.005 0-1.388l0.685-0.685-1.196-1.199-8.411 9.189c-0.767 0.767-2.010 0.767-2.776 0l-0.694-0.694c-0.767-0.767-0.767-2.010 0-2.776l9.582-8.025-6.364-6.381-2.010-0.001-2.326-3.74 1.872-1.875 3.825 2.341 0.025 1.968 6.438 6.463 1.873-1.568c-1.831-2.496-1.64-6.012 0.616-8.268 1.872-1.872 4.618-2.337 6.925-1.396l-4.124 4.067 3.471 3.471 4.132-4.075zM6.15 25.934c-0.383-0.383-1.004-0.383-1.388 0-0.384 0.384-0.384 1.005 0 1.389 0.384 0.383 1.005 0.383 1.388 0 0.384-0.385 0.384-1.006 0-1.389z"></path> </g></svg>


          </div>
          <div className="pt-2 pl-5 sm:pl-0">
            <p>
            {scrollCount && <CountUp
              className="text-5xl font-bold"
              start={85}
              end={3650}
              duration={3}
              delay={0}
              separator=""
            />}
            </p>
            <p className={`text-xl ${theme === 'dark'? 'text-slate-200' : 'text-gray-600'}`}>MACHINERIES</p>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};
