import React, { useState } from "react";
import { Input, Grid, Box, Button, Checkbox } from "@mui/material";
import { MainContainer, ListContainer, Paragraf } from "./MarketListStyle";

let products = [];
let bulks = [];
let prices = [];

const MarketListItem = ({ product }) => {
  const [bulk, setBulk] = useState(0);
  const [price, setPrice] = useState(0);
  const [isCheked, setIsCheked] = useState(false);

  const handleChaked = (e) => {
    setIsCheked(e.target.checked);
  };

  const handleValue = () => {
    bulks.push(bulk);
    prices.push(price);
    setBulk(0);
    setPrice(0);
  };

  return (
    <Box style={{ width: "1000px", margin: "20px auto" }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Checkbox onChange={(e) => handleChaked(e)} />
        </Grid>
        <Grid item xs={3}>
          <Paragraf
            style={{
              textDecoration: `${isCheked ? "line-through" : "none"}`,
              fontStyle: `${isCheked ? "italic" : ""}`,
            }}
          >
            {product}
          </Paragraf>
        </Grid>
        <Grid item xs={3}>
          <Input
            placeholder="Hajm"
            value={bulk}
            onChange={(event) => setBulk(event.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            placeholder="Narx"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={handleValue}>
            Ok
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const MarketList = () => {
  const [item, setItem] = useState("");
  const [allPrice, setAllPrice] = useState(0);

  const getAllPrice = () => {
    for (let i = 0; i < products.length; i++) {
      let valueHandler = bulks[i] * prices[i];
      setAllPrice(allPrice + valueHandler);
    }
  };
  const handleValue = (e) => {
    products.push(item);
    setItem("");
  };

  return (
    <MainContainer>
      <ListContainer style={{ maxHeight: "600px", overflowY: "scroll" }}>
        <h1>Market list</h1>
        <Input value={item} onChange={(e) => setItem(e.target.value)} />
        <Button variant="contained" onClick={handleValue}>
          Add
        </Button>
        {products.map((value, index) => {
          return <MarketListItem key={index} product={value} />;
        })}
      </ListContainer>
      <Paragraf>Jami: {allPrice} </Paragraf>
      <Button variant="contained" onClick={getAllPrice}>
        Get all price
      </Button>
    </MainContainer>
  );
};

export default MarketList;
