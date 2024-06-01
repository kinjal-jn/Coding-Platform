import Link from "next/link";
import React from "react";


type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
	
	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
				<Link href='/' className='h-[45px] flex-2'>
					<img src='/codejecrc-high-resolution-logo-white-transparent.png' alt='Logo' className='h-full' />
				</Link>

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://jecrcfoundation.com/'
							target='_blank'
							rel='noreferrer'
							className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
						>
							About Us
						</a>
					</div>
					<Link href='/auth'>
						<button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>
							Sign In
							</button>
					</Link>
				</div>
			</div>
</nav>
	);
};
export default Topbar;
