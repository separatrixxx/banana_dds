import { GuidePage } from "../../page_components/GuidePage/GuidePage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Main(): JSX.Element {
  const { router } = useSetup();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).banana_vpn + ' | ' + setLocale(router.locale).installation_guide}</title>
        <meta name='description' content={setLocale(router.locale).banana_vpn + ' | ' + setLocale(router.locale).installation_guide} />
        <meta property='og:title' content={setLocale(router.locale).banana_vpn + ' | ' + setLocale(router.locale).installation_guide} />
        <meta name='og:description' content={setLocale(router.locale).banana_vpn + ' | ' + setLocale(router.locale).installation_guide} />
        <meta charSet="utf-8" />
      </Head>
      <GuidePage />
    </>
  );
}

export default Main;
