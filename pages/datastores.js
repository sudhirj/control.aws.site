import { Container, Heading } from "./components/_atoms";
import Link from "next/link";
export default () => (
  <>
    <Container>
      <Heading>
        <Link href="/datastores">Datastores</Link> /{" "}
        <Link href="/">CONTROL</Link>
      </Heading>
    </Container>
  </>
);
