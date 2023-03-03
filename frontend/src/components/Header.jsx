import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { Link, NavLink } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-white shadow ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center">

                                    <svg id="logo-38" className="block h-8 w-auto lg:hidden" viewBox="0 0 78 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#111111"></path>
                                        <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#121212"></path>
                                        <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#bababa"></path>
                                    </svg>

                                    <svg id="logo-38" className="hidden h-8 w-auto lg:block" viewBox="0 0 78 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#111111"></path>
                                        <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#121212"></path>
                                        <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#bababa"></path>
                                    </svg>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:space-x-8">

                                    <span
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                        <Link to="/dashboard">Dashboard</Link>
                                    </span>
                                    <span
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                        <Link to="/books">Books</Link>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0"> <Link to="/add">
                                    <button type="button"
                                        className="relative inline-flex items-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />

                                        Add Book

                                    </button></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 pt-2 pb-3">

                            <Link to="/dashboard"
                                className="block active:border-l-4 border-slate-500 hover:bg-slate-50 py-2 pl-3 pr-4 text-base font-medium text-slate-700 sm:pl-5 sm:pr-6">
                                Dashboard
                            </Link>
                            <Link to="/books"
                                className="block active:border-l-4 border-slate-500 hover:bg-slate-100 py-2 pl-3 pr-4 text-base font-medium text-slate-700 sm:pl-5 sm:pr-6">
                                Books
                            </Link>

                            {/* <Disclosure.Button as="a" href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">
                                Books
                            </Disclosure.Button> */}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}