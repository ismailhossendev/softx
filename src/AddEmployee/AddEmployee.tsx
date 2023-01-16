import React from 'react';

const AddEmployee = () => {
    const inputClass = "w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
    return (
        <div>
            <h1 className='text-[20px] font-bold pb-3'>Add Employees</h1>
            <section className="p-6  text-gray-900 border rounded">
                <form noValidate className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">First name</label>
                                <input id="firstname" type="text" placeholder="First name" className={inputClass} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name" className={inputClass} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" className={inputClass} />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" type="text" className={inputClass} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">City</label>
                                <input id="city" type="text" className={inputClass} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input id="state" type="text" className={inputClass} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input id="zip" type="text" className={inputClass} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Profile</p>
                            <p className="text-xs">Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Username</label>
                                <input id="username" type="text" placeholder="Username" className={inputClass} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Password</label>
                                <input id="website" type="password" placeholder="******" className={inputClass} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="department" className="text-sm">Department</label>
                                <select className='select w-full text-black' id="department">
                                    <option value="marketing">Marketing</option>
                                    <option className='webDevelopment'>Development</option>
                                    <option value="account">Accounting</option>
                                    <option value="hr">HR</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 ">
                                <label htmlFor="status" className="text-sm ">Status</label>
                                <select className='select text-black w-full' id="status">
                                    <option>Permanent</option>
                                    <option>Contract</option>
                                    <option>Intern</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 ">
                                <label htmlFor="position" className="text-sm ">Position</label>
                                <select className='select text-black w-full' id="position">
                                    <option>Marketing Manager</option>
                                    <option value="">Web Developer</option>
                                    <option value="">Junior Front-end Developer</option>
                                    <option value="">Accountant</option>
                                    <option value="">HR Manager</option>
                                </select>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                    <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-12 h-12 rounded-full bg-gray-500 bg-gray-700" />
                                    <button type="button" className="btn btn-outline">Change</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>

        </div>
    );
};

export default AddEmployee;