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
          CONTROL is a suite of tools — CLI, GUI and Docs — that help you setup,
          configure and manage your applications and data on AWS. They apply
          best practices for security, performance and cost-optimization by
          default, and help you override these defaults when you need to.
        </SubHeading>
        <dl>
          <DT>Why?</DT>
          <DD>
            <p>
              AWS is a collection of services and tools that each do a specific
              thing well. Using AWS effectively and securely requires
              understanding each of these tools and knowing how to use them with
              each other. This requires a lot of research, study and
              experimentation — but not everybody needs to learn everything.
              CONTROL collects ideas and best practices and packages them into a
              usable system.
            </p>
            <p>
              It also takes a lot of work to create security groups and IAM
              roles for each part of the application and link to them together
              on a least-privilege basis, so automated tools to set up these
              links correctly and analyze them makes it much easier to be secure
              by default.
            </p>
          </DD>
          <DT>The Basics</DT>
          <DD>
            Your apps are organized into <em>Services</em>, <em>Tasks</em>,{" "}
            <em>Datastores</em>, and <em>Topics</em>.
            <ul>
              <li>
                <strong>Services</strong> are always-running processes that
                listen for and respond to to HTTP traffic. They are defined by
                combination of a container and execution command, and they
                receive a PORT to bind to. Examples are websites, APIs, gRPC
                services, WebSocket services, etc. They can run on one or more
                of ECS, EKS, Fargate, App Runner, Lambda, and be load balanced
                by ALB, ELB, API Gateway.
              </li>
              <li>
                <strong>Tasks</strong> are processes that may be always-running
                or scheduled periodically, and they do their work without
                listening to any incoming traffic. They are defined by a
                combination of container and execution command. Examples are
                daily / hourly batch jobs, queue / task workers, etc. They might
                run on one or more of ECS, EKS, Fargate, or Lambda.
              </li>
              <li>
                <strong>Datastores</strong> are instances or clusters on any of
                the managed data services available, like RDS, ElastiCache, S3,
                DynamoDB, DocumentDB, Neptune, Elasticsearch, and more.
              </li>
              <li>
                <strong>Topics</strong> are messaging systems and queues between
                different applications and services, which consist of SNS topics
                for publishing messages to, and HTTP or SQS subscriptions for
                processing these messages.
              </li>
            </ul>
          </DD>
        </dl>
      </div>
    </>
  );
}
