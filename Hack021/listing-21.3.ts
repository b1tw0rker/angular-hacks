const rootResolver = {
  user: ({ id }) => {
   return { 
     id: id,
      name: 'User ' + id,
   }
 }
};
    