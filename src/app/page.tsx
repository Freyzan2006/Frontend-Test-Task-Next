import { Button } from "@ui-kit/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@ui-kit/Card";
import { Input } from "@ui-kit/Input";
import { LinkApp } from "@ui-kit/LinkApp";


export default function Home() {
  return (
    <>
      <div>
        <Button variant={"primary"}>Button</Button>
        <Button variant={"secondary"}>Button</Button>
        <Button variant={"success"}>Button</Button>
        <Button variant={"danger"}>Button</Button>
        <Button variant={"ghost"}>Button</Button>
        <Button variant={"outline"}>Button</Button>
      </div>

      <div className="max-w-md flex flex-col justify-center items-center gap-3">
        <Input label="Primary" variant={"primary"} />
        <Input label="Ghost" variant={"ghost"} />
        <Input label="Success" variant={"success"} />
        <Input label="Error" variant={"error"} />
      </div>

      <div>
        <LinkApp href="/" variant={"primary"}>Home</LinkApp>
        <LinkApp href="/" variant={"secondary"}>Home</LinkApp>
        <LinkApp href="/" variant={"success"}>Home</LinkApp>
        <LinkApp href="/" variant={"danger"}>Home</LinkApp>
        <LinkApp href="/" variant={"ghost"}>Home</LinkApp>
        <LinkApp href="/" variant={"underline"}>Home</LinkApp>
      </div>


      <div className="max-w-md flex flex-col justify-center items-center gap-3">
        <Card variant={"primary"}>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>

        <Card variant={"elevated"}>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card> 

        <Card variant={"outline"}>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>   

        <Card variant={"ghost"}>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </>
  );
}
