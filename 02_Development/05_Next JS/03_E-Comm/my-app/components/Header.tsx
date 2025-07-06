import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavouriteButton from "./FavouriteButton";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        <Logo />
        <HeaderMenu />
        <div className="w-fit flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavouriteButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
