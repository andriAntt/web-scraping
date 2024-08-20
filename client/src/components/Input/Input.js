const { Input, InputGroup, Text } = require("@chakra-ui/react");

const CustomInput = ({ value, onChange, error }) => {
  return (
    <InputGroup size="sm" position={"relative"}>
      <Input
        position={"relative"}
        value={value}
        h={"100%"}
        w={"100%"}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter url"
      />
      {error && (
        <Text
          fontSize={"xs"}
          position={"absolute"}
          bottom={"-20px"}
          left={"0"}
          color={"red.500"}
        >
          {error}
        </Text>
      )}
    </InputGroup>
  );
};

export default CustomInput;
