import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';


export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>CodeJECRC</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo.jpg' />
				<meta
					name='description'
					content='Web application that contains coding problems and video solutions'/>
			</Head>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}
