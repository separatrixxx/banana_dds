import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Main(): JSX.Element {
  const { router } = useSetup();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).banana_dds}</title>
        <meta name='description' content={setLocale(router.locale).banana_dds} />
        <meta property='og:title' content={setLocale(router.locale).banana_dds} />
        <meta name='og:description' content={setLocale(router.locale).banana_dds} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
