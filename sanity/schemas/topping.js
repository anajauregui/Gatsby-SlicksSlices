import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // Computer name - singular lowercase
  name: 'topping',
  // visible title - human readable
  title: 'Toppings',
  type: 'document',
  // icon can take in a react component
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'What is the name of the topping?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    // prepare function is necessary to customize view
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '(Veg)' : ''}`,
    }),
  },
};
