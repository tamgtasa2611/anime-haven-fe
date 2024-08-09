import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/admin">
      <Button size="large" type="primary">
        Click here
      </Button>
    </Link>
  );
}
