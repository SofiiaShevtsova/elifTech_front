import { userSchema } from "./validation";
import axios from "axios";

export const addOrder = async ({ orderList, total, setOrder }) => {
  const form = document.querySelector("form")
  const formData = new FormData(form);
  const user = {};
  formData.forEach((value, name) => {
    user[name] = value;
  });
  try {
    await userSchema.validate(user);

    await axios.post(`http://localhost:4000/api/orders`, {
      ...user,
      order: orderList,
      totalPrice: total,
      dateOrder: new Date(),
    });
    form.reset()
    setOrder([])
  } catch (error) {}
};
