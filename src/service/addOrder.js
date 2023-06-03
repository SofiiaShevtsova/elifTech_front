import { userSchema } from "./validation";
import axios from "axios";

export const addOrder = async ({ orderList, total, setOrder }) => {
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const user = {};
  formData.forEach((value, name) => {
    user[name] = value;
  });
  try {
    await userSchema.validate(user);
    const listForOrder = [];

    orderList.map((elem) =>
      listForOrder.push({
        dishName: elem.dishName,
        image: elem.image,
        price: elem.price,
        number: elem.number,
        shop: elem.shop,
      })
    );

    await axios.post(`https://delivery-api-quzs.onrender.com/api/orders`, {
      ...user,
      order: listForOrder,
      totalPrice: `${total}`,
      dateOrder: new Date(),
    });
    form.reset();
    setOrder([]);
  } catch (error) {}
};
