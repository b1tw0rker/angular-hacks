import { ApolloError } from "@apollo/client/core";
// ...
// Beispiel für eine GraphQL-Abfrage
this.apollo
  .query({
    query: YOUR_QUERY,
  })
  .subscribe(
    (response) => {
      // Erfolgreiche Antwort verarbeiten
      console.log(response.data);
    },
    (error: ApolloError) => {
      // GraphQL-Fehler behandeln
      console.error("GraphQL-Fehler:", error.message);
    }
  );
// Beispiel für eine GraphQL-Mutation
this.apollo
  .mutate({
    mutation: YOUR_MUTATION,
  })
  .subscribe(
    (response) => {
      // Erfolgreiche Mutation verarbeiten
      console.log(response.data);
    },
    (error: ApolloError) => {
      // GraphQL-Fehler behandeln
      console.error("GraphQL-Fehler:", error.message);
    }
  );
