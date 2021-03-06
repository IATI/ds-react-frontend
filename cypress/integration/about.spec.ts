// @ts-nocheck
/// <reference types="cypress" />

const aboutHeadersText = [
  'About the new Datastore',
  'What data can be accessed?',
  'What can I do with the IATI Datastore?',
  'Using the Datastore API',
  'Using the Query Builder',
  'In what formats can I output IATI data?',
];

const aboutParagraphs = [
  'The new IATI Datastore offers a robust online data service, providing timely and standardised access to data published according to the IATI Standard. Data users can gain data on development and humanitarian resources and results through using the Datastore’s API. Users will also be able to download data from a new user-friendly Datastore Query Builder.',
  /* ------------------- */
  'The new IATI Datastore API provides data published by organisations who have used version 2 of the IATI Standard. This is following the decision to deprecate version 1 by IATI members, which was implemented July 2019.',
  /* ------------------- */
  'To help users access good quality data, the Datastore will not hold any data that does not adhere to the IATI Schema. The IATI Schema provides the exact order and format that publishers should provide their XML files in. More information about the Schema can be found on IATI’s Reference site.',
  /* ------------------- */
  'Depending on what information you are looking for and what questions you want to answer with IATI data, you can form queries and set up filters to get the details you require. You can do this via using the Datastore API or the Query Builder.',
  /* ------------------- */
  'For detailed documentation on how to use the API, please refer to the Datastore API documentation. For information on how to map queries from the ‘old’ Datastore to the new one, please see the mapping document.',
  /* ------------------- */
  'The Query builder allows users to build common queries through a series of drop down and freetext filters.',
  'The benefit of the IATI Datastore is that you can convert the original IATI data, provided in XML format, into two more formats - CSV and JSON. All data in the Datastore is filtered and output based on IATI activities. The exception is converting the data into CSV format, which also allows you to output it based on budgets and transactions.',
  /* ------------------- */
  'So, you can output:',
  /* ------------------- */
  'XML - The Datastore returns the original activity XML as published. This is enhanced with metadata, specifying the version of the IATI standard that individual activities were published at, as well as details of the query result.',
  'CSV - The Datastore will convert the published XML data into CSV format. Only a subset of published data is present. This format can be used to analyse information using spreadsheet software such as Microsoft Excel or Libreoffice Calc.',
  /* ------------------- */
  'You can select the rows in a CSV file to represent individual activities, budgets or transactions depending on the output format you select. Each of these may be expanded by sector or country so that percentage splits can be analysed. Less technically adept users can use the Datastore CSV Query Builder tool to access data in this format.',
  /* ------------------- */
  'JSON - The Datastore will convert the published XML to JSON format. All the original published information is present in this alternative format. The same metadata that is given in the XML output is available in the JSON output.',
];

describe('About', function () {
  it('should load the page', function () {
    cy.visit('/about');
  });

  it('should show the correct text', function () {
    cy.viewport(1440, 821);
    aboutHeadersText.map((text) => cy.findAllByText(text).should('exist'));
    for (let index = 0; index < aboutParagraphs.length; index++) {
      cy.get(`[data-cy="p${index}"]`).should(
        'contain.text',
        aboutParagraphs[index]
      );
    }
  });

  it('should show footer and navigation', function () {
    cy.findByTestId('AppBar').should('exist');
    cy.findByTestId('Footer').should('exist');
  });

  it('make screenshot', () => {
    cy.get('body').happoScreenshot({ component: 'About page' });
  });
});
