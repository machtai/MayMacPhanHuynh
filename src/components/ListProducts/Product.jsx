import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import "./ProductCard.css";

export default function ProductCard() {
  return (
    
    <Card className="product-card overflow-hidden sm:m-2 mx-0 my-3 cursor-pointer zoom-on-hover custom-card">

      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
          className="zoom-on-hover"
        />
      </CardHeader>
      <CardBody className="setPCard">
        <Typography color="blue-gray" className="font-normal sm:font-bold sm:text-base text-xs  hover:bg-transparent hover:text-blue-700">
          Áo thun đồng phục
        </Typography>
        <Typography variant="lead" color="gray" className="mt-1 font-normal sm:text-base text-sm custom-typography">

          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
    </Card>
   
  );
}
