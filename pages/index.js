import Head from "next/head";

const DT = (props) => (
  <dt className="mt-6 text-2xl font-semibold">{props.children}</dt>
);

const DD = (props) => <dd className="leading-normal">{props.children}</dd>;

const Heading = (props) => (
  <h1 className="font-extrabold mt-24 mb-4 text-3xl">{props.children}</h1>
);

const SubHeading = (props) => (
  <h3 className="text-lg leading-normal text-gray-800 italic">
    {props.children}
  </h3>
);

const LI = (props) => <li className="mt-3"> {props.children} </li>;

const P = (props) => <p className="mt-3">{props.children}</p>;

export default function Home() {
  return (
    <>
      <Head>
        <title>CONTROL / AWS</title>
      </Head>
      <div className="px-4">
        <Heading>CONTROL / AWS</Heading>
        <SubHeading>
          A suite of tools — CLI, GUI and Docs — that help you setup, configure
          and manage your applications and data on AWS. They apply best
          practices for security, performance and cost-optimization by default,
          and help you override these defaults when you need to.
        </SubHeading>
        <dl>
          <DT>Why?</DT>
          <DD>
            <P>
              AWS is a collection of services and tools that each do a specific
              thing well. Using AWS effectively and securely requires
              understanding each of these tools and knowing how to use them with
              each other. This requires a lot of research, study and
              experimentation — but not everyone needs to learn everything.
              CONTROL collects ideas and best practices and packages them into a
              usable system.
            </P>
            <P>
              It also takes a lot of hard work and book-keeping to make sure
              that every part of your cloud has its own set of permissions,
              access controls, and audit trails — and that each part
              communicates only with the areas of your cloud that it's supposed
              to. CONTROL handles that for you.
            </P>
          </DD>
          <DT>What does it do?</DT>
          <DD>
            <P>
              CONTROL organizes your resources into <em>Applications</em>,
              <em>Topics</em>, <em>Networks</em>, <em>Services</em>,{" "}
              <em>Networks</em>, <em>Tasks</em>, and <em>Datastores</em>.
            </P>
            <ul>
              <LI>
                <strong>Applications</strong> are represented by a container
                image or codebase and associated configuration in the form of
                environment variables. Designed to use 12-Factor Principles,
                Applications can be deployed into one or more Networks, and have
                one or more Services, Tasks, and Datastores.
              </LI>
              <LI>
                <strong>Topics</strong> are messaging systems that help with
                communication inside (intra-) or between (inter-) applications.
                You can create a Topic that you can post messages to, and these
                messages can then be delivered to one or more subscribers via
                HTTP endpoints for a push / webhook style model, or via a
                message queue for a pull model.
              </LI>
              <LI>
                <strong>Networks</strong> are isolated environments that your
                Application's Services and Tasks run in. All access in or out is
                tightly controlled and can be configured and audited according
                to your needs. A common need for multiple Networks would be to
                run different Applications isolated in different Networks, or
                keep testing and production environments for the same
                Application on separate isolated Networks.
              </LI>
              <LI>
                <strong>Services</strong> are always-running processes that
                listen for and respond to to HTTP traffic. They are defined by
                their parent Application's code and configuration, and an
                execution command, and they receive a <code>PORT</code> to bind
                to. Examples are websites, APIs, gRPC services and WebSocket
                servers. Services also have a URL assigned to them, with
                automated SSL certificate management.
              </LI>
              <LI>
                <strong>Tasks</strong> are processes that may be always-running
                or scheduled periodically, and they do their work without
                listening to any incoming traffic. They are defined by a
                combination of container image and execution command. Examples
                are daily / hourly batch jobs, queue or task workers.
              </LI>
              <LI>
                <strong>Datastores</strong> are instances on any of the managed
                data services, like PostgreSQL, MySQL, MariaDB, Redis,
                Memcached, S3, DynamoDB, DocumentDB, Neptune, Elasticsearch, and
                more.
              </LI>
            </ul>
          </DD>
          <DT>AWS Mappings</DT>
          <DD>
            <P>
              All your Networks, Services, Tasks, Datastores, and Topics are
              mapped on to specific AWS tools and services with configurable
              access permissions.
            </P>
          </DD>
        </dl>
      </div>
    </>
  );
}
