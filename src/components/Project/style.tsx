import { styled } from "../../styles/stitches.config"
import { Flex } from "../../styles/Global"
import { Text } from "../../styles/Text"

export const Project = styled("article", {
  marginTop: "4rem",
  backgroundColor: "$grey4",
  border: "solid 1px $grey3",
  borderRadius: "$1",
  padding: "20px",
  position: "relative",
})

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
})

export const ProjectStackTech = styled("span", {
  backgroundColor: "$brand3",
  color: "$brand2",
  padding: "0  0.5rem",
  borderRadius: "$2",
})

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
  position: "absolute",
  top: "-36px",
  right: "0px",
  backgroundColor: "$brand2",
  padding: "5px",
  borderTopRightRadius: "$2",
  borderBottomLeftRadius: "$1",
  "&:hover": {
    backgroundColor: "$brand1",
  },
})

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey1",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey1",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
})
