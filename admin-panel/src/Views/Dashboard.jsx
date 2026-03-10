import { useState } from "react";

function Dashboard() {

    return (
        <>
            <div>
                <div className="">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-3 shadow-sm p-5 rounded-lg bg-blue-200">
                            <div className="flex flex-col">
                                <span>15</span>
                                <span>Users</span>
                            </div>
                        </div>
                        <div className="col-span-3 shadow-sm p-5 rounded-lg bg-blue-200">
                            <div className="flex flex-col">
                                <span>15</span>
                                <span>Products</span>
                            </div>
                        </div><div className="col-span-3 shadow-sm p-5 rounded-lg bg-blue-200">
                            <div className="flex flex-col">
                                <span>15</span>
                                <span>Sales</span>
                            </div>
                        </div><div className="col-span-3 shadow-sm p-5 rounded-lg bg-blue-200">
                            <div className="flex flex-col">
                                <span>15</span>
                                <span>Waste</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 p-5 shadow-sm h-100 rounded-lg bg-blue-200">

                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard