import { Query } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root",
})
export class GetUsersGQL extends Query<Response> {
  document = gql`
    query getUsers {
      users {
        id
        name
        email
      }
    }
  `;
}
