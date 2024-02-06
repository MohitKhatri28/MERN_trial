import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
   
  export function PdfCard() {
    return (
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
          <Input label="Title" size="lg" />
          <Input label="Description" size="lg" />
          <Input type="file" accept="application/pdf" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Submit
          </Button>
        </CardFooter>
      </Card>
    );
  }