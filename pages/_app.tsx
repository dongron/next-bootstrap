import '../styles/layout.scss';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  // @ts-ignore
  return <div>{getLayout(<Component {...pageProps} />)}</div>;
}

export default MyApp;
