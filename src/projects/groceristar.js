import groceryData     from 'data/grocery';
import departmentsData from 'data/department';
import ingredientsData from 'data/ingredient';
import usersData       from 'data/user';

import _         from 'lodash';
// or use better way
// import { map, uniq, tail } from 'lodash';


const getIngredients = () => ingredientsData;

const getDepartments = () => departmentsData;

const getGrocery = () => groceryData;

const getUsers = () => usersData;


export default {
  departments: getDepartments,
  ingredients: getIngredients,
  grocery: getGrocery,
  users: getUsers,
};
