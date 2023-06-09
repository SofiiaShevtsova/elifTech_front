import axios from 'axios';

import { userSchema } from './validation';

export const addOrder = async ({
   orderList,
   total,
   setOrder,
   toast,
}) => {
   const form = document.querySelector('form');
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
         }),
      );

      await axios.post(
         `https://delivery-api-quzs.onrender.com/api/orders`,
         {
            ...user,
            order: listForOrder,
            totalPrice: `${total}`,
            dateOrder: new Date(),
         },
      );
      toast({
         title: 'Your order is in progress.',
         status: 'success',
         duration: 4000,
         isClosable: true,
         position: 'top',
         variant: 'subtle',
      });
      form.reset();
      setOrder([]);
   } catch (error) {
      toast({
         title: `${error.message}`,
         status: 'error',
         duration: 4000,
         isClosable: true,
         position: 'top',
         variant: 'subtle',
      });
   }
};
