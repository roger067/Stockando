import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  width: ${(props) => props.width || "auto"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex: ${(props) => props.flex || "1"};
`;

export default Flex;
