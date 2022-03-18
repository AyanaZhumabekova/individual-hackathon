import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import "./SideBar.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <RadioGroup
            className="side-bar"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <h5 className="choose-type">TYPE</h5>
            <FormControlLabel
              value="underwear"
              control={<Radio />}
              label="UNDERWEAR"
            />
            <FormControlLabel value="socks" control={<Radio />} label="SOCKS" />
            <FormControlLabel
              value="trunks"
              control={<Radio />}
              label="TRUNKS"
            />
            <FormControlLabel
              value="t-shirts"
              control={<Radio />}
              label="T-SHIRTS"
            />

            <FormControlLabel value="all" control={<Radio />} label="ALL" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
