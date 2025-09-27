"use client";

import { ToggleTheme } from "@features/toggle-theme";
import { Alert, AlertGroup } from "@ui-kit/ui/Alert";
import { Button } from "@ui-kit/ui/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@ui-kit/ui/Card";
import { Container } from "@ui-kit/ui/Container";
import { Dropdown, DropdownDivider, DropdownHeader } from "@ui-kit/ui/Dropdown";

import { Text } from "@ui-kit/ui/Font/Text";
import { Title } from "@ui-kit/ui/Font/Title";
import { TitleTextGroup } from "@ui-kit/ui/Font/TitleTextGroup";
import { Input } from "@ui-kit/ui/Input";
import { LinkApp } from "@ui-kit/ui/LinkApp";
import { Loading } from "@ui-kit/ui/Loading";
import { Modal } from "@ui-kit/ui/Modal";
import { Notice } from "@ui-kit/ui/Notice";
import { useState } from "react";




export const PreviewUiKit = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <ToggleTheme variant={"primary"} />
        <ToggleTheme variant={"ghost"} />
        <ToggleTheme variant={"outline"} />
      </Container>

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

      <div>
        <Notice message="Hello world" variant={"success"} />
        <Notice message="Hello world" variant={"error"} />
        <Notice message="Hello world" variant={"info"} />
        <Notice message="Hello world" variant={"warning"} />
      </div>

      <div className="flex gap-3 justify-center items-center">
        <Loading variant={"primary"} />
        <Loading variant={"secondary"} />
        <Loading variant={"success"} />
        <Loading variant={"danger"} />
        <Loading variant={"ghost"} />
      </div>

      <AlertGroup>
        <Alert variant={"success"} message="Hello world" />
        <Alert variant={"error"} message="Hello world" />
        <Alert variant={"info"} message="Hello world" />
        <Alert variant={"warning"} message="Hello world" />
        <Alert variant={"neutral"} message="Hello world" />
      </AlertGroup>


      <TitleTextGroup title={"Hello world"} text={"lorem"} />
        
      <Title level="h1">Hello world</Title>

      <Text>Hello world</Text>

      <Container>
        <DropdownHeader>DropdownHeader</DropdownHeader>
        <Dropdown variant={"primary"} items={[
          {
            value: "1",
            label: "Item 1"
          },
          {
            value: "2",
            label: "Item 2"
          },
          {
            value: "3",
            label: "Item 3"
          }
        ]}>Dropdown</Dropdown>

        <Dropdown  variant={"secondary"} items={[
          {
            value: "1",
            label: "Item 1"
          },
          {
            value: "2",
            label: "Item 2"
          },
          {
            value: "3",
            label: "Item 3"
          }
        ]}>Dropdown</Dropdown>

        <Dropdown variant={"ghost"} items={[
          {
            value: "1",
            label: "Item 1"
          },
          {
            value: "2",
            label: "Item 2"
          },
          {
            value: "3",
            label: "Item 3"
          }
        ]}>Dropdown</Dropdown>
        <DropdownDivider />
      </Container>
      

      

      <Container size="2xl" className="bg-red-500">
        <h2>It's container</h2>
      </Container>
      <Container size="md" className="bg-blue-500">
        <h2>It's container</h2>
      </Container>
      <Container size="xl" className="bg-yellow-500">
        <h2>It's container</h2>
      </Container>
      <Container size="lg" className="bg-white">
        <h2>It's container</h2>
      </Container>
      <Container size="sm" className="bg-green-500">
        <h2>It's container</h2>
      </Container>

      

        <Container>
          <Button onClick={handleOpen}>Open Modal</Button>

          <Modal
            isOpen={open}
            onClose={handleClose}
            closeOnOverlayClick={true}
            closeOnEscape={true}
          >
            <Modal.Header onClose={handleClose}>Header</Modal.Header>
            <Modal.Body>Body</Modal.Body>
            <Modal.Footer>Footer</Modal.Footer>
          </Modal>
        </Container>
      
    </>
  );
}
