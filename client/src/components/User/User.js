import {
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const User = ({ data }) => {
  console.log(data);
  return (
    data && (
      <Flex flexDirection={"column"} gap={4} pb={'50px'}>
        <Flex gap={{base: '15px', md: '25px'}} flexDirection={{base: 'column', md: 'row'}}>
          <Flex flexDirection={"column"} alignItems={"start"}minW={'250px'}>
            <Heading size={"md"} mb={"15px"}>
              {data.name}
            </Heading>

            {data.photo !== "Photo not found" ? (
              <Image
                src={data.photo}
                alt="Profile"
                style={{ width: "150px", height: "150px" }}
              />
            ) : (
              <Text>{data.photo}</Text>
            )}
          </Flex>
          <Text mt={'auto'}>{data.description}</Text>
        </Flex>

        <Heading size={"md"}>Experience</Heading>
        <List>
          {data.experience.length > 0 ? data.experience.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          )) : <ListItem>Experience is empty</ListItem>}
        </List>

        <Heading size={"md"}>Skills</Heading>
        <List>
          {data.skills.length > 0 ? data.skills.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          )) : <ListItem>Skills is empty</ListItem>}
        </List>

        <Heading size={"md"}>Education</Heading>
        <List>
          {data.education.length > 0 ? data.education.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          )) : <ListItem>Education is empty</ListItem>}
        </List>

        <Heading size={"md"}>Certifications</Heading>
        <List>
          {data.certifications.length > 0 ? data.certifications.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          )) : <ListItem>Certifications is empty</ListItem>}
        </List>
      </Flex>
    )
  );
};

export default User;
