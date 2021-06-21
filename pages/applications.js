import {
  Container,
  DD,
  DT,
  HeadDiv,
  Heading,
  P,
  SubHeading,
} from "./components/_atoms";
import Link from "next/link";
import Head from "next/head";

const Applications = () => (
  <>
    <Head>
      <title>Applications / CONTROL</title>
    </Head>
    <Container>
      <Heading>
        <Link href="/applications">Applications</Link>
        <HeadDiv />
        <Link href="/">CONTROL</Link>
      </Heading>
      <SubHeading>
        <em>Applications</em> are the basic building blocks of your deployments.
        They serve as a placeholder a group of services and tasks that operate
        under the same configuration, with the same data sources and security
        rules.
      </SubHeading>
      <dl>
        <DT>Examples</DT>
        <DD>
          <P>
            The simplest application might be fully contained site with just a
            URL as part of its configuration &mdash; like site that has a single
            service that serves static pages.
          </P>
          <P>
            A more normal application might be a website like a blog configured
            with a URL and a database, with a single service that serves HTTP
            requests.
          </P>
          <P>
            A complex application would be a shopping site that had multiple
            databases and caches like a MySQL database and Redis cache &mdash;
            which are accessed by one service configured with a URL, and also by
            many background tasks that collect inventory information,
            co-ordinate with shipping services, etc.
          </P>
        </DD>
        <DT>Multiple Environments</DT>
        <DD>
          <P>
            If you're using more than one environment, like a separate testing
            and production environment, the <em>Application</em> construct helps
            you make sure that the same configuration keys are applied on both
            environments. The values of these keys might be different in each
            environment, but CONTROL will show you diff to make sure you haven't
            missed anything out.
          </P>
        </DD>
      </dl>
    </Container>
  </>
);
export default Applications;
