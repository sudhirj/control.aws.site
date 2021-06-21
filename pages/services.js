import { Container, Heading } from "../components/_atoms";
import Link from "next/link";
export default () => (
  <>
    <Container>
      <Heading>
        <Link href="/services">Services</Link> / <Link href="/">CONTROL</Link>
      </Heading>
    </Container>
  </>
);
