import Head from "next/head";

export default function Home() {
  return (
    <>
      <h1 className="font-bold">CONTROL for AWS</h1>
      <h3>
        CONTROL is a suite of tools (CLI, GUI and docs) that help you setup,
        configure and manage your AWS resources. They default to best practices
        for security, performance and cost-optimization, and allow you to
        overwrite these defaults when you need to.
      </h3>
      <dl>
        <dt>Why?</dt>
        <dd>
          AWS is a collection of services and tools that each do a specific
          thing well. Using AWS effectively and securely requires understanding
          these tools and knowing how to use them with each other. This often
          requires a lot of specialized research, study and experimentation.
          We've done a lot of that, and written everything we know into CONTROL.
        </dd>
        <dt></dt>
      </dl>
    </>
  );
}
