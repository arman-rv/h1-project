import React from 'react'
import { PanelBrand } from './PanelBrand'
import jpg from "../../assets/image/jpjp.jpeg"

const HeaderPanel = () => {
  return (
    <>
               <div className='w-[100%] border'>
                <div style={{backgroundColor:'var(--main-col2)'}} className="navbar bg-base-100">
                  <div className="dropdown">  
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                  </div>        
                     <div className="flex-1">
                     <a className="btn btn-ghost normal-case text-xl">آکادمی اچ وان</a>
                    </div>
                  <div className="flex-none gap-2">
                        <div className="form-control ">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                          <div className="indicator">
                          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
</svg>
                          </div>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-text" viewBox="0 0 16 16"> <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/> <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/> </svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                        </button>
                        
                    </div>
                    <div className="dropdown dropdown-right dropdown-bottom z-10">
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img src={jpg} />
                        </div>
                      </label>
                      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                          <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export  {HeaderPanel}