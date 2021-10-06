import React from "react";
import { Route, Switch } from "react-router-dom";
import { Balance } from "../Components/Balance";
import { History } from "../Components/History";

interface Props {
  productItems: any;
  cartItems: any;
  handleChange: any;
  handleDelete: any;
  searchItem: any;
  jupitorInfo: any;
}
export const Routes: React.FC<Props> = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
         <Balance/>
        </Route>
        <Route path="/cart" exact>
          <History/>
        </Route>
      </Switch>
    </div>
  );
};
