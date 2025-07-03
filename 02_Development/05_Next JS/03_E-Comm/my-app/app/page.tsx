import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const page = () => {
  return (
    <>
      <Container className=" bg-shop-light-pink">
        <h2 className="text-xl font-semibold">Home Ankit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorem.
          Quis odit fugiat consequuntur. Ut cumque autem quos eum exercitationem
          perspiciatis dolor, aliquid est molestias dignissimos ducimus aperiam
          id eius, voluptas, libero harum ad incidunt labore iste! Voluptatibus,
          ipsa consequatur.
        </p>
        <Button variant="destructive">Click me</Button>
      </Container>
    </>
  );
};

export default page;
