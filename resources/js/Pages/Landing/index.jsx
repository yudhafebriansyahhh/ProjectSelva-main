import PageLayout from "@/Layouts/PageLayout"


export default function Home({ auth }) {
    return (
        <PageLayout user={auth.user}>
            <div className="p-14">
                <div className="flex justify-between">
                    <div className="w-[500px]">
                        <h1 className="text-6xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="text-sm mt-4">Browse through our diverse range of meticulouslyF crafted garments,
                            designed to bring out your individuality and cater to your sense of style.</p>
                        <button className="bg-black text-white px-10 py-3 rounded-full mt-3">Shop Now</button>

                        <div className="mt-8 grid grid-cols-3 gap-5">
                            <div>
                                <h1 className="text-4xl font-bold">200+</h1>
                                <p>International Brands</p>
                            </div>
                            <div className="border-x-2 px-4">
                                <h1 className="text-4xl font-bold">2,000+</h1>
                                <p>High-Quality Products</p>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold">30,000+</h1>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <img src="/yuda.jpg" className="w-[400px] h-[400px] object-cover" alt="" />

                </div>

                <div className="py-5">
                    <h1 className="text-[32px] py-10 font-bold text-center">NEW ARRIVALS</h1>

                    <div className="grid grid-cols-5">
                        {[...Array(5)].map((_, index) => (
                            <div className="w-[250px]">
                                <img src="/yuda.jpg" className="w-[250px] h-[300px] rounded-xl object-cover" alt="" />
                                <div className="p-4">
                                    <h1 className="lowercase font-medium">T-SHIRT WITH TAPE DETAILS</h1>
                                    <h3 className="font-bold text-2xl">$120</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="text-[32px] py-10 font-bold text-center">TOP SELLING</h1>

                    <div className="grid grid-cols-5">
                        {[...Array(5)].map((_, index) => (
                            <div className="w-[250px]">
                                <img src="/yuda.jpg" className="w-[250px] h-[300px] rounded-xl object-cover" alt="" />
                                <div className="p-4">
                                    <h1 className="lowercase font-medium">T-SHIRT WITH TAPE DETAILS</h1>
                                    <h3 className="font-bold text-2xl">$120</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}