import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import PayBtn from "./PayBtn";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/slice/Auth";
import { orderActions } from "../store/slice/OrderSlice";
import ApplyCouponItem from "./ApplyCouponItem";
import CheckoutAddress_Ship from "./CheckoutAddress_Ship";
import CheckoutCard from "./CheckoutCard";

const CheckoutContent = ({ newCity, newDistrict, newRoad, total }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.auth.cartList);

  //Shipping and price
  const discount = useSelector((state) => state.order.discount);
  const final = useSelector((state) => state.order.finalPrice);
  const freeShipping = total >= 500 ? true : false;
  const shipping = freeShipping ? 0 : 10;
  const finalTotal = total + shipping;
  const finalPrice = final ? final : finalTotal;
  const short = 500 - total;

  // Address
  const city = useSelector((state) => state.auth.county);
  const district = useSelector((state) => state.auth.district);
  const road = useSelector((state) => state.auth.road);

  const Address = () => {
    if (city) {
      return `${city}${district}${road}`;
    } else if (newCity) {
      return `${newCity}${newDistrict}${newRoad}`;
    } else {
      return "No address";
    }
  };
  //Coupon code
  const [code, setCode] = useState("");
  const setCodeHandler = (code) => {
    setCode(code);
  };
  const clearCode = () => {
    setCode("");
  };
  useEffect(() => {
    dispatch(authActions.setErrorClear());
    dispatch(orderActions.clearDisAndPrice());
  }, []);

  return (
    <>
      <ScrollView>
        <CheckoutCard />
        <CheckoutAddress_Ship
          Address={Address}
          total={total}
          short={short}
          freeShipping={freeShipping}
        />
        <ApplyCouponItem
          discount={discount}
          finalPrice={finalPrice}
          finalTotal={finalTotal}
          setCodeHandler={setCodeHandler}
          clearCode={clearCode}
          code={code}
        />
        <PayBtn
          finalPrice={finalPrice}
          code={code}
          discount={discount}
          cartList={cartList}
          newCity={newCity}
          newDistrict={newDistrict}
          newRoad={newRoad}
          Address={Address}
        />
      </ScrollView>
    </>
  );
};

export default CheckoutContent;
