import React, { useState } from "react";
import "./App.css";
import CustomInput from "../Input/Input";
import { Box, Button, Flex } from "@chakra-ui/react";
import { handleScrape } from "../../utils/handleScrape";
import Header from "../Header/Header";
import User from "../User/User";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <Header />
      <Flex
        pt={{ base: "50px", md: "75px" }}
        flexDirection={"column"}
        maxW={"800px"}
        mx={"auto"}
        px={{ base: "15px", md: "24px" }}
      >
        <Flex maxW={"800px"} gap={4} mx={"auto"} w={"100%"}>
          <CustomInput value={url} onChange={setUrl} error={error} />
          <Button
            onClick={() =>
              handleScrape(setIsLoading, setData, setIsLoading, setError, url)
            }
            isLoading={isLoading}
            bg={"blueC.100"}
            _hover={{ bg: "blueC.200" }}
            color={"whiteC.100"}
            w={"150px"}
          >
            Scrape Data
          </Button>
        </Flex>

        <Box mt={"50px"}>
          <User data={data} />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
