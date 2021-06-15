import { css, Global } from '@emotion/react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider } from '../src/components/common/toasts';
import { StoreProvider } from '../src/stores';
import '../src/styles/globals.scss';
import '../src/styles/index.scss';

dayjs.extend(relativeTime);
dayjs.extend(duration);

export default function OsmosisApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Osmosis</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Global
				styles={css`
					body {
						background: rgb(23, 15, 52);
					}
				`}
			/>
			<StoreProvider>
				<ToastProvider>
					<div style={{ minWidth: '1280px' }} className="min-h-sidebar-minHeight h-screen bg-background z-0">
						<Component {...pageProps} />
					</div>
					<ToastContainer transition={Bounce} />
				</ToastProvider>
			</StoreProvider>
		</>
	);
}
