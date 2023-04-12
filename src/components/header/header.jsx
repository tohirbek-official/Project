import React from "react";
import styled from "styled-components";
import { Like } from "../../assets/svg/like";
import { Facebook } from "../../assets/svg/facebook";
import { Youtube } from "../../assets/svg/youtube";
import { Instagram } from "../../assets/svg/instagram";
import { Twitter } from "../../assets/svg/twitter";
import { Linkedin } from "../../assets/svg/linkedin";
import { Autocomplete, IconButton, Stack, TextField } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { Contact } from "../pages/contact/contact";
import { Shop } from "../pages/shop/shop";
import { IconShop } from "../../assets/svg/shop";

export const Header = () => {
  return (
    <div>
      <div className="bg-sky-100 p-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <HeaderLink to="#">FAQs |</HeaderLink>&nbsp;&nbsp;&nbsp;
              <HeaderLink to="#">Help |</HeaderLink>&nbsp;&nbsp;&nbsp;
              <HeaderLink to="#">Support </HeaderLink>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <IconButton>
                  <Link to="https://www.facebook.com/">
                    <Facebook />
                  </Link>
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <Link to="https://twitter.com/home?lang=ru">
                    <Twitter />
                  </Link>
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <Link to="https://ru.linkedin.com/">
                    <Linkedin />
                  </Link>
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <Link to="https://www.youtube.com/">
                    <Youtube />
                  </Link>
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <Link to="https://www.instagram.com/">
                    <Instagram />
                  </Link>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container">
        <div className="flex items-center mt-5 pt-3 pb-3 justify-between">
          <div>
            <Iconspan>E</Iconspan>
            <IconSpan>Shopper</IconSpan>
          </div>
          <div>
            <Stack spacing={1} sx={{ width: 300 }}>
              <Autocomplete
                sx={{ padding: "0px" }}
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for products"
                    size="small"
                  />
                )}
              />
            </Stack>
          </div>
          <div className="flex gap-2">
            <Link to="/Contact">
              <Likediv>
                <Like />
                <div>0</div>
              </Likediv>
            </Link>
            <Link to="/Shop">
              <Likediv>
                <IconShop />
                <div>0</div>
              </Likediv>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
];
const HeaderLink = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  text-align: left;
`;

const Iconspan = styled.span`
  padding: 0.5rem 1rem;
  color: #d19c97;
  border: 1px solid silver;
  font-weight: 700;
  border-radius: 5px;
  font-size: calc(1rem + 1.3vw);
`;
const IconSpan = styled.span`
  font-weight: 700;
  margin-left: 15px;
  font-size: calc(1rem + 1.3vw);
`;

const Likediv = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  gap: 0.5rem;
  font-size: 14px;
  border: 1px solid rgba(171, 139, 139, 0.694);
`;
