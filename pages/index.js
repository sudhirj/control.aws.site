import Head from "next/head";

const DT = (props) => <dt className="mt-6 mb-2 font-bold">{props.children}</dt>;

const DD = (props) => <dd className="leading-normal">{props.children}</dd>;

const Heading = (props) => (
  <h1 className="font-bold mt-12 mb-4 text-2xl">{props.children}</h1>
);

const SubHeading = (props) => (
  <h3 className="text-lg leading-normal text-gray-800">{props.children}</h3>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>CONTROL for AWS</title>
      </Head>
      <div className="px-4">
        <Heading>CONTROL for AWS</Heading>
        <SubHeading>
          CONTROL is a suite of tools (CLI, GUI and docs) that help you setup,
          configure and manage your applications and data on AWS. They apply
          best practices for security, performance and cost-optimization by
          default, and help you override these defaults when you need to.
        </SubHeading>
        <dl>
          <DT>Why?</DT>
          <DD>
            AWS is a collection of services and tools that each do a specific
            thing well. Using AWS effectively and securely requires
            understanding each of these tools and knowing how to use them with
            each other. This often requires a lot of specialized research, study
            and experimentation. We've done a lot of that, and written
            everything we know into CONTROL.
          </DD>
        </dl>
      </div>
    </>
  );
}
