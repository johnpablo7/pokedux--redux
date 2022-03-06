import { Menu as SemanticMenu, Container, Image } from "semantic-ui-react";

export const Menu = () => {
  return (
    <SemanticMenu fixed="top">
      <Container>
        <SemanticMenu.Item to="/">
          <Image size="small" src={"/images/logo_v4.svg"} />
        </SemanticMenu.Item>
        <SemanticMenu.Item to="/"><b>Home</b></SemanticMenu.Item>
        <SemanticMenu.Item to="/" position="right">
          <b>Favorites</b>
        </SemanticMenu.Item>
      </Container>
    </SemanticMenu>
  );
};
