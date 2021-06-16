import Link from "next/link";
export const Heading = (props) => (
  <h1 className="font-extrabold mt-24 text-3xl">{props.children}</h1>
);

export const SubHeading = (props) => (
  <h3 className="mt-8 text-lg leading-normal text-gray-800 italic">
    {props.children}
  </h3>
);

export const DT = (props) => (
  <dt className="mt-12 text-2xl font-semibold">{props.children}</dt>
);

export const DD = (props) => (
  <dd className="leading-normal">{props.children}</dd>
);

export const LI = (props) => <li className="mt-5"> {props.children} </li>;

export const P = (props) => <p className="mt-3">{props.children}</p>;

export const Container = (props) => (
  <div className="px-4">{props.children}</div>
);

export const StrongLink = (props) => (
  <strong>
    <Link href={props.href}>{props.children}</Link>
  </strong>
);
