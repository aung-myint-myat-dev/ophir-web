import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { assets } from "../../../constants";
import { products } from "../../products/data/products";
import ProductCard from "../../products/components/ProductCard";

const item1 = assets.lovecar_logo;
const item2 = assets.sayazawmaths_logo;
const item3 = assets.foodburma_logo;
const item4 = assets.stargrade_logo;
const item5 = assets.APP_LOGO;
const item6 = assets.zogenealogy_logo;
const item7 = assets.call2clean_logo;

function Product() {
  const items = [
    {
      img: item1,
      title: "Love Car (App)",
      links: [
        {
          label: "Android",
          url: "https://play.google.com/store/search?q=lovecar&c=apps&hl=en",
        },
        {
          label: "iOS",
          url: "https://apps.apple.com/br/app/love-car/id6739915707?l=en-GB",
        },
      ],
    },
    {
      img: item2,
      title: "Saya Zaw (App)",
      links: [{ label: "View More", url: "/saya-zaw" }],
    },
    {
      img: item3,
      title: "Food Burma (App)",
      disabled: true,
      links: [{ label: "View More", url: "#food-burma" }],
    },

    {
      img: item4,
      title: "Star Grade Education",
      disabled: true,
      links: [{ label: "View More", url: "/#star-grade" }],
    },

    // {
    //   img: item1,
    //   title: "Car Business Management",
    //   links: [{ label: "View More", url: "https://lovecarbusiness.com/" }],
    // },
    {
      img: item6,
      title: "Zo Genealogy",
      links: [{ label: "View More", url: "https://zogenealogy.org/" }],
    },
    {
      img: item7,
      title: "Call2Clean Janitorial",
      links: [
        { label: "View More", url: "https://www.call2cleanservices.com/" },
      ],
    },
    {
      img: item5,
      title: "Ophir Restaurant POS",
      links: [{ label: "View More", url: "/pos-page" }],
    },
  ];

  return (
    <div
      className="py-5 bg-secondary-subtle"
    >
      <section id="project">
        <Container>
          <div>
            <h2 className="fw-bold display-5 text-center mb-5">Our Products</h2>
          </div>

          <Row className="g-4">
            {products.map((product) => (
              <Col key={product.id} lg={4} md={6} sm={12}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Product;
