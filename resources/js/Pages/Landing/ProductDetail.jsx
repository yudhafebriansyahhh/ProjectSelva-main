import PageLayout from "@/Layouts/PageLayout"


export default function ProductDetail({ auth }) {
    return (
        <PageLayout user={auth.user}>
            <div className="px-14 py-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-5">
                            {[...Array(3)].map((_, index) => (
                                <div className="shadow-md w-[150px]">
                                    <img src="/yuda.jpg" className="h-[150px] w-[150px] rounded object-cover" alt="" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <img src="./yuda.jpg" className="h-[490px] w-full rounded object-cover" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="uppercase font-bold text-4xl mb-3">
                                One Life Graphic T-shirt
                            </h1>
                            <h2 className="text-4xl font-semibold">$260</h2>
                            <h3 className="font-medium mt-5">
                                Stok : 10000
                            </h3>
                            <p className="mt-2">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

                        </div>
                        <div className="pb-10">
                            <div className="mt-5">
                                <h1>Choose Size</h1>
                                <div className="flex gap-3 mt-2">
                                    {['Small', 'Medium', 'Large', 'X-Large'].map(item => (
                                        <button key={item} className="bg-gray-200 px-5 py-3 rounded-full">{item}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 mt-5">
                                <button className="bg-gray-200 px-5 py-3 rounded-full font-semibold">Keranjang</button>
                                <button className="bg-gray-800  text-white font-semibold rounded-full  px-5 py-3  w-full">Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="py-5">
                    <h1 className="text-[32px] py-10 font-bold text-center">You might also like</h1>

                    <div className="grid grid-cols-5 ">
                        {[...Array(15)].map((_, index) => (
                            <div className="w-[220px]">
                                <img src="/yuda.jpg" className="w-[240px] h-[300px] rounded-xl object-cover" alt="" />
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