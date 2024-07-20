import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div
                className='object-cover  w-full h-[300px] flex items-center justify-center'
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(/yuda.jpg)', // Ganti dengan path gambar Anda
                }}
            >
                <div className='text-center text-white'>
                    <h1 className='text-4xl font-bold'>Welcome!</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est.</p>
                </div>
            </div>

            <div className="w-[400px] p-5 shadow-xl rounded-xl border -mt-20 bg-white">
                {children}
            </div>
        </div>
    );
}
