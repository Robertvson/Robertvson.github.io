"use client"

export default function Widget(){
    return(
        <>
        <div className="bg-black pb-3">
            <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center w-full mt-6">
                    <h1 className="text-white w-3/4 mx-auto text-5xl tracking-widest">Widget & Co.</h1>
                </div>
                <div className="flex flex-row items-center w-full mt-6">
                    <p className="text-white w-auto mx-auto underline">Home</p>
                    <p className="text-white w-auto mx-auto underline">About</p>
                    <p className="text-white w-auto mx-auto underline">Contact us</p>
                    <p className="text-white w-auto mx-auto underline">Our Partners</p>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-white text-4xl text-center">Change the way you work today</h1>
                <p className="text-white mt-4 w-1/2 mx-auto text-center">Our cog wheels are engineered for unmatched durability, precision, and efficiency. Crafted from high-quality materials and manufactured to exacting standards, they ensure seamless operation in even the most demanding applications. With advanced tooth profiles designed for optimal load distribution, our cog wheels reduce wear, minimize friction, and maximize performance. Whether you need components for industrial machinery, automotive applications, or custom engineering projects, our cog wheels deliver reliability you can trust. Choose our cog wheels for superior craftsmanship, longer lifespan, and smoother operation—because when it comes to quality, we never compromise.</p>
            </div>
            <div className="flex flex-row items-center mx-auto">
                <h3 className="text-white mt-10 w-1/2 mx-auto text-center underline text-3xl tracking-widest">Get a quote</h3>
                <h3 className="text-white mt-10 w-1/2 mx-auto text-center underline text-3xl tracking-widest">View our work</h3>
            </div>
            <div className="mt-24">
                <h1 className="text-white text-4xl text-center">Just ask why?</h1>
                <p className="text-white mt-4 w-1/2 mx-auto text-center">Cogwheels play a crucial role in optimizing business operations by enhancing efficiency, reliability, and productivity. In industries relying on mechanical systems—such as manufacturing, automotive, and automation—high-quality cogwheels ensure smooth, uninterrupted performance, reducing downtime and maintenance costs. Their precision design minimizes energy loss, leading to greater operational efficiency and cost savings over time.</p>
                <h3 className="text-white mt-6 mx-auto text-center underline text-3xl tracking-widest">Book an appointment</h3>
            </div>
            <div className="flex h-28 flex-col-reverse">
                <p className="text-neutral-500 mx-auto">© 2025 Scott M. Robertson</p>
            </div>

        </div>
        </>
           
        
    )
}