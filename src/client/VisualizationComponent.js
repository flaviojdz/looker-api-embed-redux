/**
 * Created by Looker Data Applications Team 2021
 * These are simplified code snippets representing functionality on the page,
 * to view full implementation click the "Open Sandbox" button below
 */

/**
 * Note on Visualization Components
 * This is an all new initiative led by Looker's Components team
 * designed to make it easy for developers to create visualizations
 * based on Looker data without requiring a third party dependency.
 * As a developer, this is preferable because the visualization library
 * is compatible with the API out of the box, speeding up time to value.
 * Questions? Reach out to Elliot Glasenk | eglasenk@google.com
 */

//import necssary dependencies
import React from "react";
import { getSdk } from "../utils/client/looker_sdk";
import { Box, Heading } from "@looker/components";
import { Query, Visualization } from "@looker/visualizations";

const VisualizationComponent = () => {
  //initialize sdk in order to start making calls
  const sdk = getSdk();
  //static query id, also works with qid
  const id = "2047";
  /**
   * config object accepts a variety of parameters, for further discussion consult this link:
   * https://docs.looker.com/data-modeling/extension-framework/vis-components-prop-tables
   */
  return (
    <Box>
      <Heading>Visualization Component</Heading>
      <Query sdk={sdk} query={id} config={{ type: "sparkline" }}>
        <Visualization />
      </Query>
    </Box>
  );
};
export default VisualizationComponent;
