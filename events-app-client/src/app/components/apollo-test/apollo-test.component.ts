import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-apollo-test',
  templateUrl: './apollo-test.component.html',
  styleUrls: ['./apollo-test.component.css']
})
export class ApolloTestComponent {
  events: any[] = [];
  locations: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`query {
          events {
            id
            name
            startDate
            endDate
            description
          }
          locations {
            id
            name
          }
        }`,
      })
      .valueChanges.subscribe((result: any) => {
        this.events = result.data?.events;
        this.locations = result.data?.locations;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
