const { Heading, Flex } = require("@chakra-ui/react");

const Header = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      bg={"blueC.100"}
      as="header"
      h={"70px"}
    >
      <Heading textAlign={"center"} color={"whiteC.100"} fontSize={"xl"}>
        LinkedIn Scraper
      </Heading>
    </Flex>
  );
};

export default Header;
