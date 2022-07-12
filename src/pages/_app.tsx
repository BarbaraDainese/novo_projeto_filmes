// import 'src/styles/index.less';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
