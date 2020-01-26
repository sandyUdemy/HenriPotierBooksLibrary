import React, { Fragment, useEffect  } from "react";
import { StyledFooter } from './styles'
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../../lib/actions/shoppingCart/cart";
import {
  CartButtons,
  CartTotal
} from "./_components"

export const CartFooter = () => {
  const props = useSelector(state => ({...state.shoppingCartReducer }));
  const { isPending } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDiscount())
  }, []) 

  return (
    <Fragment>
      {!isPending &&
        <StyledFooter>
          <CartTotal {...props} />
          <CartButtons />
        </StyledFooter>}
    </Fragment>
)}